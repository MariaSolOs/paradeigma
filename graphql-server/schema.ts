import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    """
    Supported styles to use in a snippet code block.
    """
    enum SnippetStyle {
        a11yDark
        atomDark
        base16AteliersulphurpoolLight
        coldarkCold
        coldarkDark
        coy
        coyWithoutShadows
        dracula
        duotoneDark
        duotoneSea
        funky
        ghcolors
        holiTheme
        lucario
        materialDark
        materialLight
        materialOceanic
        nightOwl
        nord
        okaidia
        oneDark
        oneLight
        prism
        shadesOfPurple
        solarizedlight
        synthwave84
        tomorrow
        zTouch
    }
`;