import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MikroStyle, ProgrammingLanguages } from '@paradeigma/graphql';
import type { FC } from 'react';
import type { HighlighterStyle } from 'react-syntax-highlighter';
import type { MikroCodeProps } from './index';

import Skeleton from '@mui/material/Skeleton';

const SyntaxHighlighter = dynamic(
    async () => {
        const syntaxHighlighter = (await import('react-syntax-highlighter')).PrismAsyncLight;

        for (const language of ProgrammingLanguages) {
            const languageSupport = (
                (await import(`react-syntax-highlighter/dist/esm/languages/prism/${language}`)) as {
                    default: unknown;
                }
            ).default;
            syntaxHighlighter.registerLanguage(language, languageSupport);
        }

        return syntaxHighlighter;
    },
    { loading: () => <Skeleton variant="rectangular" height="5rem" sx={{ borderRadius: 1 }} /> }
);

/**
 * @param style - The mikro's style
 * @returns The react-syntax-highlighter module containing the style's
 * implementation.
 */
const getStylePackage = async (style: MikroStyle): Promise<HighlighterStyle> => {
    switch (style) {
        case MikroStyle.A11yDark:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).a11yDark;
        case MikroStyle.AtomDark:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).atomDark;
        case MikroStyle.Base16AteliersulphurpoolLight:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism'))
                .base16AteliersulphurpoolLight;
        case MikroStyle.ColdarkCold:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).coldarkCold;
        case MikroStyle.ColdarkDark:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).coldarkDark;
        case MikroStyle.Coy:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).coy;
        case MikroStyle.Dracula:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).dracula;
        case MikroStyle.DuotoneDark:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).duotoneDark;
        case MikroStyle.DuotoneSea:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).duotoneSea;
        case MikroStyle.Funky:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).funky;
        case MikroStyle.Ghcolors:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).ghcolors;
        case MikroStyle.MaterialDark:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).materialDark;
        case MikroStyle.MaterialLight:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).materialLight;
        case MikroStyle.MaterialOceanic:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).materialOceanic;
        case MikroStyle.Nord:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).nord;
        case MikroStyle.Okaidia:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).okaidia;
        case MikroStyle.Prism:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).prism;
        case MikroStyle.ShadesOfPurple:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).shadesOfPurple;
        case MikroStyle.Solarizedlight:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).solarizedlight;
        case MikroStyle.Synthwave84:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).synthwave84;
        case MikroStyle.Tomorrow:
            return (await import('react-syntax-highlighter/dist/cjs/styles/prism')).tomorrow;
    }
};

const MikroCode: FC<MikroCodeProps> = (props) => {
    const [style, setStyle] = useState<HighlighterStyle>();

    useEffect(() => {
        const setStylePackage = async () => {
            const stylePackage = await getStylePackage(props.style);
            setStyle(stylePackage);
        };

        void setStylePackage();
    }, [props.style]);

    // TODO: Limit the number of code lines in the card.
    return (
        <SyntaxHighlighter
            wrapLongLines
            style={style}
            language={props.language}
            customStyle={props.containerStyles}>
            {props.content}
        </SyntaxHighlighter>
    );
};

export default MikroCode;
