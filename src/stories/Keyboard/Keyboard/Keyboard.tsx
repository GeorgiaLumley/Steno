import React from "react";
import "./styles.css";

import { KeyboardKey, KeyPosition } from "../Keys/KeyboardKey";

export const Keyboard = () => {
  //TODO add styles to styles.css
  //TODO make numbar full width
  return (
    <div className="keyboard-container">
      <KeyboardKey position={KeyPosition.NumBar} letter="#" />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <KeyboardKey position={KeyPosition.Top} letter="S" />
            <KeyboardKey position={KeyPosition.Top} letter="T" />
            <KeyboardKey position={KeyPosition.Top} letter="P" />
            <KeyboardKey position={KeyPosition.Top} letter="H" />
          </div>
          <div style={{ display: "flex" }}>
            <KeyboardKey position={KeyPosition.Bottom} letter="S" />
            <KeyboardKey position={KeyPosition.Bottom} letter="K" />
            <KeyboardKey position={KeyPosition.Bottom} letter="W" />
            <KeyboardKey position={KeyPosition.Bottom} letter="R" />
          </div>
        </div>
        <KeyboardKey position={KeyPosition.Middle} letter="*" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <KeyboardKey position={KeyPosition.Top} letter="F" />
            <KeyboardKey position={KeyPosition.Top} letter="P" />
            <KeyboardKey position={KeyPosition.Top} letter="L" />
            <KeyboardKey position={KeyPosition.Top} letter="T" />
            <KeyboardKey position={KeyPosition.Top} letter="D" />
          </div>
          <div style={{ display: "flex" }}>
            <KeyboardKey position={KeyPosition.Bottom} letter="R" />
            <KeyboardKey position={KeyPosition.Bottom} letter="B" />
            <KeyboardKey position={KeyPosition.Bottom} letter="G" />
            <KeyboardKey position={KeyPosition.Bottom} letter="S" />
            <KeyboardKey position={KeyPosition.Bottom} letter="Z" />
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", marginRight: "5rem" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "0.5rem",
          }}
        >
          <KeyboardKey position={KeyPosition.Thumb} letter="A" />
          <KeyboardKey position={KeyPosition.Thumb} letter="O" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <KeyboardKey position={KeyPosition.Thumb} letter="E" />
          <KeyboardKey position={KeyPosition.Thumb} letter="U" />
        </div>
      </div>
    </div>
  );
};
