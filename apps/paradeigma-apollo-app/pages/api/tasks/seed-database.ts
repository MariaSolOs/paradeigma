import { LoremIpsum } from 'lorem-ipsum';
import { Mikro } from '@paradeigma/mongoose';
import mongooseConnection from 'lib/mongoose-connection';
import {
    ProgrammingLanguages,
    MikroStyles,
    MIKRO_NAME_MAX_LENGTH,
    MIKRO_DESCRIPTION_MAX_LENGTH
} from '@paradeigma/graphql';
import type { NextApiHandler } from 'next';

/**
 * The number of random mikros to generate.
 */
const NUM_RANDOM_MIKROS = 20;

/**
 * Minimum rating for a random mikro.
 */
const MIN_MIKRO_RATING = 3;

/**
 * Maximum rating for a random mikro.
 */
const MAX_MIKRO_RATING = 5;

/**
 * List of random mikro code snippets.
 */
const mikroContents: string[] = [
    `
body {
    margin: 'auto';
    display: 'flex';
    align-items: 'center';
}`,
    `
int array[width * height];
int setElement(int row, int col, int value)
{
    array[width * row + col] = value;
}`,
    `
for (int i = 0; i < scores.length; i++) {
    for (int a = 0; a < scores[i].length; a++) {
        for (int b = 0; b < scores[i][a].length; b++) {
            scores[i][a][b] = b + 1;
        }
    }
}`,
    `
>>> class Foo:
    def __init__(self): print "Created a Foo!"

>>> globals()['Foo']()
    Created a Foo!
    <__main__.Foo instance at 0xFFF>`,
    `
// Define a regular expression for repeated words.
Regex rx = new Regex(@"\b(?<word>\\w+)\\s+(\\k<word>)\b", RegexOptions.Compiled | RegexOptions.IgnoreCase);

// Define a test string.
string text = "The the quick brown fox jumps over the lazy dog dog.";

// Find matches.
MatchCollection matches = rx.Matches(text);`
];

/**
 * @param elements - Array with elements of type T.
 * @returns A random element from the input array.
 */
const getRandomElement = <T>(elements: T[]): T => {
    const randomIndex = Math.floor(Math.random() * elements.length);
    return elements[randomIndex] as T;
}

type SeedDatabaseResponse = { message: string; }

const handler: NextApiHandler<SeedDatabaseResponse> = async (req, res) => {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).end('Method Not Allowed');
    }

    try {
        await mongooseConnection;

        // Delete existing mikros.
        await Mikro.deleteMany({});

        // Lorem Ipsum generator for mikro names and descriptions.
        const lorem = new LoremIpsum({
            wordsPerSentence: { min: 4, max: 8 }
        });

        for (let i = 0; i < NUM_RANDOM_MIKROS; i++) {
            await Mikro.create({
                name: lorem.generateSentences(1).slice(0, MIKRO_NAME_MAX_LENGTH),
                description: lorem.generateSentences(3).slice(0, MIKRO_DESCRIPTION_MAX_LENGTH),
                content: getRandomElement(mikroContents).trimStart(),
                language: getRandomElement(ProgrammingLanguages),
                style: getRandomElement(MikroStyles),
                rating: Math.random() * (MAX_MIKRO_RATING - MIN_MIKRO_RATING) + MIN_MIKRO_RATING
            });
        }

        return res.status(200).json({
            message: `${NUM_RANDOM_MIKROS} random mikros generated.`
        });
    } catch (err) {
        return res.status(500).json({
            message: (err instanceof Error) ? err.message : 'An unknown error occurred.'
        });
    }
}

export default handler;