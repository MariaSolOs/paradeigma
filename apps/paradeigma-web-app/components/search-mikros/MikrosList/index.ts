import type { GetMikrosQuery } from '@paradeigma/graphql';

import MikrosList from './MikrosList';

export type MikrosMasonryProps = {
    mikros: GetMikrosQuery['mikros'];
    onMikroClick: (id: string) => void;
};

export default MikrosList;
