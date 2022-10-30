import useStyles from './ParadeigmaTitle.styled';

import Link from 'next/link';

const ParadeigmaTitle = () => {
    const { classes } = useStyles();

    return (
        <Link href="/" passHref legacyBehavior>
            <h1 className={classes.title}>Paradeigma</h1>
        </Link>
    );
};

export default ParadeigmaTitle;
