import type { ProgrammingLanguage } from '@paradeigma/graphql';

import Details from './Details';

export type DetailsProps = {
    name: string;
    description: string;
    language: ProgrammingLanguage;
};

export default Details;
