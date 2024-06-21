export const replaceNumberWithKeyPress = (steno: string[]): string[] => {
  return steno.map((key) => {
    switch (key) {
      case "0":
        return "O";
      case "1":
        return "S";
      case "2":
        return "T";
      case "3":
        return "P";
      case "4":
        return "H";
      case "5":
        return "A";
      case "6":
        return "F";
      case "7":
        return "P";
      case "8":
        return "L";
      case "9":
        return "T";
      default:
        return key;
    }
  });
};
