import gql from 'graphql-tag';

const typeDefs = gql`
    type Query {
        """
        Get snippets filtered by language and with a title or description
        matching the given query.
        """
        snippets(query: String, languages: [ProgrammingLanguage!]): [Snippet!]!
    }

    type Mutation {
        """
        Create a new code snippet.
        """
        createSnippet(
            name: String!,
            description: String!
            content: String!,
            language: ProgrammingLanguage!,
            style: SnippetStyle!
        ): Snippet!
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
        dracula
        duotoneDark
        duotoneSea
        funky
        ghcolors
        materialDark
        materialLight
        materialOceanic
        nord
        okaidia
        prism
        shadesOfPurple
        solarizedlight
        synthwave84
        tomorrow
    }

    """
    A code snippet.
    """
    type Snippet {
        id: ID!
        name: String!
        description: String!
        content: String!
        language: ProgrammingLanguage!
        style: SnippetStyle!
    }
`;

export default typeDefs;