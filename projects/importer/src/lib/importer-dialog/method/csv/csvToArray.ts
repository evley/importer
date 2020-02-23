// Lots of love: https://stackoverflow.com/questions/8493195
export const CSVtoArray = (text: string): string[] => {
  // tslint:disable-next-line: max-line-length
  const validCsvRegex = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
  // tslint:disable-next-line: max-line-length
  const valueRegex = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
  // Return NULL if input string is not well formed CSV string.
  if (!validCsvRegex.test(text)) {
    return null;
  }
  const a = []; // Initialize array to receive values.
  text.replace(
    valueRegex, // "Walk" the string using replace with callback.
    (m0, m1, m2, m3) => {
      // Remove backslash from \' in single quoted values.
      if (m1 !== undefined) {
        a.push(m1.replace(/\\'/g, "'"));
      } else if (m2 !== undefined) {
        // Remove backslash from \" in double quoted values.
        a.push(m2.replace(/\\"/g, '"'));
      } else if (m3 !== undefined) {
        a.push(m3);
      }
      return ''; // Return empty string.
    }
  );
  // Handle special case of empty last value.
  if (/,\s*$/.test(text)) {
    a.push('');
  }

  return a;
};
