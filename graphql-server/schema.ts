import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type Query {
        """
        Snippets filtered by the given parameters.
        """
        snippets(name: String, language: ProgrammingLanguage): [Snippet!]!
    }

    """
    Supported programming languages for a snippet.
    """
    enum ProgrammingLanguage {
        csharp
        css
        java
        javascript
        markdown
        python
    }

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

    """
    A code snippet.
    """
    type Snippet {
        id: ID!
        style: SnippetStyle!
        name: String!
        description: String!
        content: String!
        language: ProgrammingLanguage!
    }
`;