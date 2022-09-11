import type { GetMikrosQuery } from '@paradeigma/graphql';

import MikrosMasonry from './MikrosMasonry';

export type MikrosMasonryProps = {
    mikros: GetMikrosQuery['mikros'];
}

export default MikrosMasonry;