import React from "react";
import "./styles.css";

export enum KeyPosition {
  Top = "top",
  Bottom = "bottom",
  Middle = "middle",
  NumBar = "numbar",
  Thumb = "thumb",
}

export interface KeyboardKeyProps {
  position?: KeyPosition;
  letter: string;
}

export const KeyboardKey = ({
  position = KeyPosition.Top,
  letter,
}: KeyboardKeyProps) => {
  const getKeyPosition = () => {
    switch (position) {
      case KeyPosition.Top:
        return "keyboard-key-top";
      case KeyPosition.Middle:
        return "keyboard-key-middle";
      case KeyPosition.NumBar:
        return "keyboard-key-numbar";
      case KeyPosition.Thumb:
        return "keyboard-key-thumb";
      default:
        return "";
    }
  };
  const keyPosition = getKeyPosition();

  return (
    <div className={["keyboard-key", keyPosition].join(" ")}>
      <p
        className={[
          "keyboard-letter",
          position === KeyPosition.Middle && "keyboard-letter-large",
        ].join(" ")}
      >
        {letter}
      </p>
    </div>
  );
};
