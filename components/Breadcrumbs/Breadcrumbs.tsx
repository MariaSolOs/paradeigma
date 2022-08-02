import { v4 as uuid } from 'uuid';
import type { FC } from 'react';
import type { BreadcrumbsProps } from './index';

import Link from 'next/link';
import * as S from './Breadcrumbs.styled';

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => (
    <S.Breadcrumbs>
        {props.links.map(link => 
            <Link key={uuid()} href={link.href} as={link.as} passHref>
                <S.NavigationLink>{link.title}</S.NavigationLink>
            </Link>
        )}
    </S.Breadcrumbs>
);

export default Breadcrumbs;