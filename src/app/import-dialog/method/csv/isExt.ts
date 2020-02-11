export const isExt = (regex: RegExp[] | RegExp, fileName: string) => {
  return Array.isArray(regex) ? regex.some((r) => r.test(fileName)) : regex.test(fileName);
};
