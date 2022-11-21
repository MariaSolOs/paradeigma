import useStyles from './Footer.styles';

const Footer = () => {
    const { classes } = useStyles();

    return (
        <footer className={classes.footer}>
            A side project from{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.maria-sol-os.com/" className={classes.link}>
                Maria José Solano
            </a>.
        </footer>
    );
};

export default Footer;
