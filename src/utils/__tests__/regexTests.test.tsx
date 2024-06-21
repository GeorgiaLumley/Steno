import {
  stringIsOnlyNumbers,
  stringContainsNumbers,
  isStenoVowel,
  isStenoLeftVowel,
} from "../regexTests";

describe("regexTests", () => {
  describe("stringIsOnlyNumbers", () => {
    it("should return true if the string contains only numbers", () => {
      expect(stringIsOnlyNumbers("123")).toBe(true);
    });

    it("should return false if the string contains any non-number characters", () => {
      expect(stringIsOnlyNumbers("123a")).toBe(false);
    });
  });

  describe("stringContainsNumbers", () => {
    it("should return true if the string contains any numbers", () => {
      expect(stringContainsNumbers("abc123")).toBe(true);
    });

    it("should return false if the string does not contain any numbers", () => {
      expect(stringContainsNumbers("abc")).toBe(false);
    });
  });

  describe("isStenoVowel", () => {
    it("should return true if the string contains any steno vowels", () => {
      expect(isStenoVowel("abc")).toBe(true);
    });

    it("should return false if the string does not contain any steno vowels", () => {
      expect(isStenoVowel("bcd")).toBe(false);
    });
  });

  describe("isStenoLeftVowel", () => {
    it("should return true if the string contains any steno left vowels", () => {
      expect(isStenoLeftVowel("abc")).toBe(true);
    });

    it("should return false if the string does not contain any steno left vowels", () => {
      expect(isStenoLeftVowel("ecu")).toBe(false);
    });
  });
});
