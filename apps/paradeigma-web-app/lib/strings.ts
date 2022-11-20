/**
 * @param str - Multi-line string.
 * @returns Array containing the lines in the string.
 */
export const splitIntoLines = (str: string) => str.split(/\r?\n/);

/**
 * @param str - Multi-line string.
 * @returns Number of lines in the string.
 */
export const numberOfLines = (str: string) => splitIntoLines(str).length;
