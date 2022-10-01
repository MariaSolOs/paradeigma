import type { StaticImageData } from 'next/image';

import PixelSlide from './PixelSlide';
import { HighlightedText } from './PixelSlide.styled';

export type PixelSlideProps = {
    image: {
        src: StaticImageData;
        altText: string;
        alignment?: 'left' | 'right';
    };
}

export { HighlightedText };
export default PixelSlide;