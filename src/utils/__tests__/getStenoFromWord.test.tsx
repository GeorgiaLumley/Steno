import { getStenoFromWord } from "../getStenoFromWords";

describe("Name of the module or component being tested", () => {
  // Test case 1
  test("When passing in a word, I get the word back in the response", () => {
    // Arrange: Set up any necessary data or dependencies
    const word = "hello";
    // Act: Perform the action or function being tested
    const result = getStenoFromWord(word)?.word;
    // Assert: Verify the expected outcome or behavior
    expect(result).toBe(word);
    // Optional: Clean up any resources if needed
  });

  // Test case 2
  test("Passing a word no in the dictionary, returns null", () => {
    const FakeWord = "asdf";
    const result = getStenoFromWord(FakeWord);
    expect(result).toBeNull();
  });

  test("Passing a word with multiple translations returns all translations", () => {
    const word = "hello";
    const result = getStenoFromWord(word);

    expect(result?.allTranslations).toContain("HO*EL");
    expect(result?.allTranslations).toContain("H*EL");
    expect(result?.allTranslations).toContain("HEL/HRO");
    expect(result?.allTranslations).toContain("HEL/HROE");
    expect(result?.allTranslations).toContain("H-L");
  });
  test("Passing a word with a short breif returns the brief", () => {
    const word = "hello";
    const result = getStenoFromWord(word);
    expect(result?.brief).toEqual("H-L");
  });
  test("Passing a word without a short brief does not return a brief", () => {
    const word = "skyscraper";
    const result = getStenoFromWord(word);
    expect(result?.brief).toBeNull();
  });
  test("Passing a word with a brief and other options still returns the brief in all options", () => {
    const word = "hello";
    const result = getStenoFromWord(word);
    expect(result?.allTranslations).toContain("H-L");
    expect(result?.brief).toEqual("H-L");
  });
  test("Passing in an empty string returns null", () => {
    const word = "";
    const result = getStenoFromWord(word);
    expect(result).toBeNull();
  });
  test("Words with translations containing numbers are not returned", () => {
    const word = "world";
    const result = getStenoFromWord(word);
    expect(result?.allTranslations).not.toContain("W0R8D");
  });
  test("Passing in a phrase returns the translations for the phrase", () => {
    const phrase = "to the";
    const result = getStenoFromWord(phrase);
    expect(result?.allTranslations).toContain("TOT");
    expect(result?.allTranslations).toContain("TO*T");
    expect(result?.brief).toContain("TOT");
  });
  test("Passing in a phrase not in the dictionary to return null", () => {
    const phrase = "get out";
    const result = getStenoFromWord(phrase);
    expect(result).toBeNull();
  });

  // Add more test cases as needed
});
