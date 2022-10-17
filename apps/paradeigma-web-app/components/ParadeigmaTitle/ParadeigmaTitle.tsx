import Link from 'next/link';
import * as S from './ParadeigmaTitle.styled';

const ParadeigmaTitle = () => (
    <Link href={{ pathname: '/' }} passHref>
        <S.Title>Paradeigma</S.Title>
    </Link>
);

export default ParadeigmaTitle;
