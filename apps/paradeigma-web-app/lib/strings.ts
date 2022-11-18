/**
 * @param str - Multi-line string.
 * @returns Number of lines in the string.
 */
export const numberOfLines = (str: string) => str.split(/\r?\n/).length;
