import type { ProgrammingLanguage, MikroStyle } from '@paradeigma/graphql';

import PreviewSlide from './PreviewSlide';

export type PreviewSlideProps = {
    name: string;
    language: ProgrammingLanguage;
    content: string;
    style: MikroStyle;
    onStyleChange: (style: MikroStyle | null) => void;
    onGoBack: () => void;
};

export default PreviewSlide;
