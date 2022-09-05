import routes from 'routes';

import Link from 'next/link';
import * as S from './ParadeigmaTitle.styled';

const ParadeigmaTitle = () => (
    <Link { ...routes.home } passHref>
        <S.Title>Paradeigma</S.Title>
    </Link>
);

export default ParadeigmaTitle;