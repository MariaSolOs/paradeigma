import Link from 'next/link';
import * as S from './ParadeigmaTitle.styled';

const ParadeigmaTitle = () => (
    <Link href="/" passHref legacyBehavior>
        <S.Title>Paradeigma</S.Title>
    </Link>
);

export default ParadeigmaTitle;
