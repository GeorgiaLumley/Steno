import stenoTranslations from "../data/stenoTranslations.json";

interface StenoTranslationsType {
  [key: string]: string;
}

const filterOutNumbers = (translations: string[]) =>
  translations.filter((translation) => !translation.match(/\d/));
const sortByStrokeCount = (translations: string[]) =>
  translations.sort((a, b) => {
    return a.split("/").length - 1 - (b.split("/").length - 1);
  });
const getSingleStrokeOptions = (translations: string[]) =>
  translations.filter((translation) => !translation.includes("/"));
const sortByLength = (translations: string[]) =>
  translations.sort((a, b) => a.length - b.length);

export const getStenoFromWord = (
  word: string,
): {
  word: string;
  allTranslations: string[];
  brief: string | null;
} | null => {
  if (word === "") return null;

  const translations = stenoTranslations as StenoTranslationsType;
  const allOptions = Object.keys(translations).filter(
    (key) => translations[key] === word,
  );

  if (allOptions.length === 0) return null;

  const optionsWithoutNumbers = filterOutNumbers(allOptions);
  const optionOrderedByStrokeCount = sortByStrokeCount(optionsWithoutNumbers);
  const singleStrokeOptions = getSingleStrokeOptions(
    optionOrderedByStrokeCount,
  );
  const singleStrokeOrderedByLength = sortByLength(singleStrokeOptions);

  const brief = singleStrokeOrderedByLength[0] || null;
  return { word, allTranslations: optionOrderedByStrokeCount, brief };
};
