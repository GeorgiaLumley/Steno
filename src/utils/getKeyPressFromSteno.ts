import { replaceNumberWithKeyPress } from "./replaceNumberWithKeyPress";
import {
  stringContainsNumbers,
  isStenoLeftVowel,
  isStenoVowel,
  stringIsOnlyNumbers,
} from "./regexTests";

const splitStenoByVowels = (stroke: string): string[] => {
  if (isStenoLeftVowel(stroke)) {
    if (stroke.includes("O")) {
      return stroke.split(/(?<=[O])/);
    } else {
      return stroke.split(/(?<=[A])/);
    }
  } else {
    if (stroke.split("")[0] === "E" || stroke.split("")[0] === "U") {
      return ["", stroke];
    } else if (stroke.includes("E")) {
      const splitByE = stroke.split(/(?<=[E])/);
      return splitByE.length === 1 ? ["", splitByE[0]] : splitByE;
    } else {
      const splitByU = stroke.split(/(?<=[U])/);
      return splitByU.length === 1 ? ["", splitByU[0]] : splitByU;
    }
  }
};

const splitStenoByNumbers = (stroke: string): string[] => {
  const numbers = stroke.split("").map((num) => parseInt(num));
  let left: number[] = [];
  let right: number[] = [];
  numbers.forEach((num) => {
    if (num < 6) {
      left.push(num);
    } else {
      right.push(num);
    }
  });
  return [left.join(""), right.join("")];
};

const splitStenoBySide = ({
  stroke,
  pressAsterisk,
}: {
  stroke: string;
  pressAsterisk: boolean;
}): string[] => {
  const hasDash = stroke.includes("-");
  const hasVowels = isStenoVowel(stroke);

  if (pressAsterisk) {
    return stroke.split("*");
  } else if (hasDash) {
    return stroke.split("-");
  } else if (hasVowels) {
    return splitStenoByVowels(stroke);
  } else if (stringIsOnlyNumbers(stroke)) {
    return splitStenoByNumbers(stroke);
  }
  return [];
};

export const getKeyPressFromSteno = (
  steno: string,
): {
  pressAsterisk: boolean;
  pressNumber: boolean;
  left: string[];
  right: string[];
}[] => {
  const uppercaseSteno = steno.toUpperCase();
  const strokes = uppercaseSteno.split("/");
  return strokes.map((stroke) => {
    const pressAsterisk = stroke.includes("*");
    const pressNumber = stroke.includes("#") || stringContainsNumbers(stroke);

    const sides = splitStenoBySide({ stroke, pressAsterisk });

    const getSide = (side: "left" | "right") => {
      const sideIndex = side === "left" ? 0 : 1;
      return !!sides[sideIndex] && sides[sideIndex].length > 0
        ? replaceNumberWithKeyPress(sides[sideIndex].split(""))
        : [];
    };

    return {
      pressAsterisk,
      pressNumber,
      left: getSide("left"),
      right: getSide("right"),
    };
  });
};
