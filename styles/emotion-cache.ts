import createCache from '@emotion/cache';

export const INSERTION_POINT_NAME = 'emotion-insertion-point';

const isBrowser = typeof document !== 'undefined';

// On the client side, we create a meta tag at the top of the <head> and set it as insertionPoint
// to ensure MUI styles are loaded first.
const createEmotionCache = () => {
    let insertionPoint: HTMLElement | undefined = undefined;

    if (isBrowser) {
        insertionPoint = document.querySelector<HTMLMetaElement>(`meta[name="${INSERTION_POINT_NAME}"]`) ?? undefined;
    }

    return createCache({ key: 'mui-style', insertionPoint });
}

export default createEmotionCache;