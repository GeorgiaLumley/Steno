import { replaceNumberWithKeyPress } from "../replaceNumberWithKeyPress";

describe("replaceNumberWithKeyPress", () => {
  it("should not return numbers", () => {
    const steno = ["2"];
    const result = replaceNumberWithKeyPress(steno);
    expect(result).not.toContain("2");
  });

  it("numbers 0 to 9 should be mapped to a key", () => {
    expect(replaceNumberWithKeyPress(["0"])).toStrictEqual(["O"]);
    expect(replaceNumberWithKeyPress(["1"])).toStrictEqual(["S"]);
    expect(replaceNumberWithKeyPress(["2"])).toStrictEqual(["T"]);
    expect(replaceNumberWithKeyPress(["3"])).toStrictEqual(["P"]);
    expect(replaceNumberWithKeyPress(["4"])).toStrictEqual(["H"]);
    expect(replaceNumberWithKeyPress(["5"])).toStrictEqual(["A"]);
    expect(replaceNumberWithKeyPress(["6"])).toStrictEqual(["F"]);
    expect(replaceNumberWithKeyPress(["7"])).toStrictEqual(["P"]);
    expect(replaceNumberWithKeyPress(["8"])).toStrictEqual(["L"]);
    expect(replaceNumberWithKeyPress(["9"])).toStrictEqual(["T"]);
  });
  it("connective numbers should be mapped to a key", () => {
    expect(replaceNumberWithKeyPress(["1", "2"])).toStrictEqual(["S", "T"]);
    expect(replaceNumberWithKeyPress(["5", "6"])).toStrictEqual(["A", "F"]);
  });
  it("passing in no number shouldn't change the prop", () => {
    expect(replaceNumberWithKeyPress(["H", "E"])).toStrictEqual(["H", "E"]);
  });
});
