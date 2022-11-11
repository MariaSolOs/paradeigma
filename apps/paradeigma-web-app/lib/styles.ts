import { createEmotionCache } from '@mantine/core';

/**
 * Style cache, shared between the server and client.
 */
export const cache = createEmotionCache({ key: 'paradeigma-styles' });

/**
 * @param breakpoint - Width (in pixels) for generating the media query.
 * @returns The CSS media query string.
 */
export const getMaxWidthMediaQuery = (breakpoint: number) => `(max-width:${breakpoint}px)`;
