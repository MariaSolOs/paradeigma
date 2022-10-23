import type { StaticImageData } from 'next/image';

import PixelSlide from './PixelSlide';

export type PixelSlideProps = {
    image: {
        src: StaticImageData;
        altText: string;
        alignment?: 'left' | 'right';
        priority?: boolean;
    };
};

export default PixelSlide;
