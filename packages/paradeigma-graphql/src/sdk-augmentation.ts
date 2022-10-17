import { ProgrammingLanguage, MikroStyle } from './sdk';

/**
 * Maximum length for a mikro's name field.
 */
export const MIKRO_NAME_MAX_LENGTH = 30;

/**
 * Maximum length for a mikro's description field.
 */
export const MIKRO_DESCRIPTION_MAX_LENGTH = 100;

export const ProgrammingLanguages = Object.values(ProgrammingLanguage);

export const MikroStyles = Object.values(MikroStyle);
