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
  side: "left" | "right" | "thumb" | "middle";
  isActive?: boolean;
}

export const KeyboardKey = ({
  position = KeyPosition.Top,
  letter,
  side,
  isActive = false,
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

  const getActiveKeyColour = () => {
    if (!isActive) return "";
    switch (side) {
      case "left":
        return "blue";
      case "right":
        return "purple";
      case "thumb":
        return "yellow";
      case "middle":
        return "red";
      default:
        return "";
    }
  };

  const keyPosition = getKeyPosition();
  const activeKeyColour = isActive ? getActiveKeyColour() : "";

  return (
    <div
      className={[
        "keyboard-key",
        keyPosition,
        isActive && activeKeyColour,
      ].join(" ")}
    >
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
