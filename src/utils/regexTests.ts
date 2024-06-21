export const stringIsOnlyNumbers = (str: string): boolean => /^\d+$/.test(str);
export const stringContainsNumbers = (str: string): boolean => /\d/.test(str);
export const isStenoVowel = (str: string): boolean => /[aeou]/i.test(str);
export const isStenoLeftVowel = (str: string): boolean => /[ao]/i.test(str);
