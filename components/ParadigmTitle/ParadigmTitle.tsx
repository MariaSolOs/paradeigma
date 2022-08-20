import routes from 'routes';

import Link from 'next/link';
import * as S from './ParadigmTitle.styled';

const ParadigmTitle = () => (
    <Link { ...routes.home } passHref>
        <S.Title>Paradigm</S.Title>
    </Link>
);

export default ParadigmTitle;