import React from "react";
import "./styles.css";

import { KeyboardKey, KeyPosition } from "../Keys/KeyboardKey";

export const Keyboard = () => {
  //TODO add styles to styles.css
  //TODO make numbar full width
  return (
    <div className="keyboard-container">
      <KeyboardKey
        position={KeyPosition.NumBar}
        side="middle"
        letter="#"
        isActive={true}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <KeyboardKey
              position={KeyPosition.Top}
              side="left"
              letter="S"
              isActive={true}
            />
            <KeyboardKey position={KeyPosition.Top} side="left" letter="T" />
            <KeyboardKey position={KeyPosition.Top} side="left" letter="P" />
            <KeyboardKey position={KeyPosition.Top} side="left" letter="H" />
          </div>
          <div style={{ display: "flex" }}>
            <KeyboardKey
              position={KeyPosition.Bottom}
              side="left"
              letter="S"
              isActive={true}
            />
            <KeyboardKey position={KeyPosition.Bottom} side="left" letter="K" />
            <KeyboardKey position={KeyPosition.Bottom} side="left" letter="W" />
            <KeyboardKey
              position={KeyPosition.Bottom}
              side="left"
              letter="R"
              isActive={true}
            />
          </div>
        </div>
        <KeyboardKey
          position={KeyPosition.Middle}
          side="middle"
          letter="*"
          isActive={true}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <KeyboardKey position={KeyPosition.Top} side="right" letter="F" />
            <KeyboardKey position={KeyPosition.Top} side="right" letter="P" />
            <KeyboardKey position={KeyPosition.Top} side="right" letter="L" />
            <KeyboardKey
              position={KeyPosition.Top}
              side="right"
              letter="T"
              isActive={true}
            />
            <KeyboardKey position={KeyPosition.Top} side="right" letter="D" />
          </div>
          <div style={{ display: "flex" }}>
            <KeyboardKey
              position={KeyPosition.Bottom}
              side="right"
              letter="R"
            />
            <KeyboardKey
              position={KeyPosition.Bottom}
              side="right"
              letter="B"
            />
            <KeyboardKey
              position={KeyPosition.Bottom}
              side="right"
              letter="G"
            />
            <KeyboardKey
              position={KeyPosition.Bottom}
              side="right"
              letter="S"
            />
            <KeyboardKey
              position={KeyPosition.Bottom}
              side="right"
              letter="Z"
              isActive={true}
            />
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
          <KeyboardKey
            position={KeyPosition.Thumb}
            side="thumb"
            letter="A"
            isActive={true}
          />
          <KeyboardKey position={KeyPosition.Thumb} side="thumb" letter="O" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <KeyboardKey position={KeyPosition.Thumb} side="thumb" letter="E" />
          <KeyboardKey position={KeyPosition.Thumb} side="thumb" letter="U" />
        </div>
      </div>
    </div>
  );
};
