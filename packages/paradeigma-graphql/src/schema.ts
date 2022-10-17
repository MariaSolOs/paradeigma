import gql from 'graphql-tag';

const typeDefs = gql`
    type Query {
        """
        Get mikros filtered by language and with a title or code content
        matching the given text query.
        """
        mikros(textFilter: String, languageFilter: [ProgrammingLanguage!]): [Mikro!]!

        """
        Get a mikro by ID.
        """
        mikro(id: ID!): Mikro!
    }

    type Mutation {
        """
        Create a new mikro.
        """
        createMikro(
            name: String!
            description: String!
            content: String!
            language: ProgrammingLanguage!
            style: MikroStyle!
        ): Mikro!
    }

    """
    Supported programming languages for a mikro.
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
    Supported styles to use in a mikro code block.
    """
    enum MikroStyle {
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
    A mikro.
    """
    type Mikro {
        id: ID!
        name: String!
        description: String!
        content: String!
        language: ProgrammingLanguage!
        style: MikroStyle!
        rating: Float!
    }
`;

export default typeDefs;
