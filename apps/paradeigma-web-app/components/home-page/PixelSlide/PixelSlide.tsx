import type { FCC } from 'react';
import type { PixelSlideProps } from './index';

import Image from 'next/future/image';
import * as S from './PixelSlide.styled';

const PixelSlide: FCC<PixelSlideProps> = (props) => (
    <S.Slide>
        {props.image.alignment === 'right' && <S.TextContainer>{props.children}</S.TextContainer>}
        <S.ImageContainer>
            <Image
            fill
            style={{ objectFit: 'contain' }}
            src={props.image.src} 
            alt={props.image.altText}
            quality={100} />
        </S.ImageContainer>
        {/* By default align to the left */}
        {props.image.alignment !== 'right' && <S.TextContainer>{props.children}</S.TextContainer>}
    </S.Slide>
);

export default PixelSlide;