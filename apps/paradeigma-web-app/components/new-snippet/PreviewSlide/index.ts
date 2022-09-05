import type { ProgrammingLanguage, SnippetStyle } from '@paradeigma-graphql/sdk';

import PreviewSlide from './PreviewSlide';

export type PreviewSlideProps = {
    name: string;
    language: ProgrammingLanguage;
    content: string;
    style: SnippetStyle;
    onStyleChange: (style: SnippetStyle | null) => void;
    onGoBack: () => void;
}

export default PreviewSlide;