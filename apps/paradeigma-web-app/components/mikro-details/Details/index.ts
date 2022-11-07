import type { GetMikroQuery } from '@paradeigma/graphql';

import Details from './Details';

export type DetailsProps = {
    mikro: GetMikroQuery['mikro'];
};

export default Details;
