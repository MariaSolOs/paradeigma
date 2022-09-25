import type { GetMikrosQuery } from '@paradeigma/graphql';

import MikrosMasonry from './MikrosMasonry';

export type MikrosMasonryProps = {
    mikros: GetMikrosQuery['mikros'];
    onMikroClick: (id: string) => void;
}

export default MikrosMasonry;