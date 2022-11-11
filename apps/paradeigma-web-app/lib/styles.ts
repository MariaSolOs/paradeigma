import { createEmotionCache } from '@mantine/core';

/**
 * Style cache, shared between the server and client.
 */
export const cache = createEmotionCache({ key: 'paradeigma-styles' });
