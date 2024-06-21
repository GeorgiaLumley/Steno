import { getKeyPressFromSteno } from "../getKeyPressFromSteno";

describe("getKeyPressFromSteno", () => {
  test(`Only passing asterisk to return pressAsterisk as true`, () => {
    const steno = "*";
    expect(getKeyPressFromSteno(steno)).toStrictEqual([
      {
        pressAsterisk: true,
        pressNumber: false,
        left: [],
        right: [],
      },
    ]);
  });

  test("if steno include a number then pressNumber returns as true", () => {
    const steno = "1";
    expect(getKeyPressFromSteno(steno)).toStrictEqual([
      {
        pressAsterisk: false,
        pressNumber: true,
        left: ["S"],
        right: [],
      },
    ]);
  });
  test("if steno numbers are included then the correct letter is pressed along with pressNumber", () => {
    expect(getKeyPressFromSteno("0")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: ["O"], right: [] },
    ]);
    expect(getKeyPressFromSteno("1")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: ["S"], right: [] },
    ]);
    expect(getKeyPressFromSteno("2")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: ["T"], right: [] },
    ]);
    expect(getKeyPressFromSteno("3")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: ["P"], right: [] },
    ]);
    expect(getKeyPressFromSteno("4")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: ["H"], right: [] },
    ]);
    expect(getKeyPressFromSteno("5")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: ["A"], right: [] },
    ]);
    expect(getKeyPressFromSteno("6")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: [], right: ["F"] },
    ]);
    expect(getKeyPressFromSteno("7")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: [], right: ["P"] },
    ]);
    expect(getKeyPressFromSteno("8")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: [], right: ["L"] },
    ]);
    expect(getKeyPressFromSteno("9")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: [], right: ["T"] },
    ]);
    expect(getKeyPressFromSteno("23")).toStrictEqual([
      {
        pressAsterisk: false,
        pressNumber: true,
        left: ["T", "P"],
        right: [],
      },
    ]);
    expect(getKeyPressFromSteno("56")).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: ["A"], right: ["F"] },
    ]);
  });
  test("if steno include letters and numbers then pressNumber returns as true along with the correct letters", () => {
    const eleven = "1-D";
    expect(getKeyPressFromSteno(eleven)).toStrictEqual([
      { pressAsterisk: false, pressNumber: true, left: ["S"], right: ["D"] },
    ]);
  });

  test("Left and right string should always be in caps", () => {
    const steno = "s*t";
    const keyPress = getKeyPressFromSteno(steno);
    const left = keyPress[0].left;
    const right = keyPress[0].right;
    console.log({ keyPress, left, right });
    expect(left[0]).toBe("S");
    expect(right[0]).toBe("T");
    expect(left[0]).not.toBe("s");
    expect(right[0]).not.toBe("t");
  });

  test("Steno should be split into side by *", () => {
    const steno = "s*s";
    expect(getKeyPressFromSteno(steno)).toStrictEqual([
      {
        pressAsterisk: true,
        pressNumber: false,
        left: ["S"],
        right: ["S"],
      },
    ]);
  });

  test("Vowels should be split with AO in left and EU in right", () => {
    const steno = "AOEU";

    expect(getKeyPressFromSteno(steno)).toStrictEqual([
      {
        pressAsterisk: false,
        pressNumber: false,
        left: ["A", "O"],
        right: ["E", "U"],
      },
    ]);
    expect(getKeyPressFromSteno("AE")).toStrictEqual([
      {
        pressAsterisk: false,
        pressNumber: false,
        left: ["A"],
        right: ["E"],
      },
    ]);
  });
  test("Steno should be split by -", () => {
    expect(getKeyPressFromSteno("H-L")).toStrictEqual([
      {
        pressAsterisk: false,
        pressNumber: false,
        left: ["H"],
        right: ["L"],
      },
    ]);
    expect(getKeyPressFromSteno("-F")).toStrictEqual([
      {
        pressAsterisk: false,
        pressNumber: false,
        left: [],
        right: ["F"],
      },
    ]);
  });
  test("Steno should be split by /", () => {
    expect(getKeyPressFromSteno("-F/KOS")).toStrictEqual([
      {
        pressAsterisk: false,
        pressNumber: false,
        left: [],
        right: ["F"],
      },
      {
        pressAsterisk: false,
        pressNumber: false,
        left: ["K", "O"],
        right: ["S"],
      },
    ]);
  });
  test("Check for complex steno", () => {
    const ofCosmopolitanism = "-F/KOS/PHO/POL/TAPB/EUFPL";
    const amies = "-PL/AO*E/-S";
    expect(getKeyPressFromSteno(ofCosmopolitanism)).toStrictEqual([
      {
        pressAsterisk: false,
        pressNumber: false,
        left: [],
        right: ["F"],
      },
      {
        pressAsterisk: false,
        pressNumber: false,
        left: ["K", "O"],
        right: ["S"],
      },
      {
        pressAsterisk: false,
        pressNumber: false,
        left: ["P", "H", "O"],
        right: [],
      },
      {
        pressAsterisk: false,
        pressNumber: false,
        left: ["P", "O"],
        right: ["L"],
      },
      {
        pressAsterisk: false,
        pressNumber: false,
        left: ["T", "A"],
        right: ["P", "B"],
      },
      {
        pressAsterisk: false,
        pressNumber: false,
        left: [],
        right: ["E", "U", "F", "P", "L"],
      },
    ]);
    expect(getKeyPressFromSteno(amies)).toStrictEqual([
      {
        pressAsterisk: false,
        pressNumber: false,
        left: [],
        right: ["P", "L"],
      },
      {
        pressAsterisk: true,
        pressNumber: false,
        left: ["A", "O"],
        right: ["E"],
      },
      {
        pressAsterisk: false,
        pressNumber: false,
        left: [],
        right: ["S"],
      },
    ]);
  });
});
