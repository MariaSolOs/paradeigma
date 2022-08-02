import Breadcrumbs from './Breadcrumbs';

export type BreadcrumbsProps = {
    links: {    
        href: string;
        as: string;
        title: string;
    }[];    
}

export default Breadcrumbs;