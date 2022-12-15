import useStyles from './Footer.styles';

const Footer = () => {
    const { classes } = useStyles();

    return (
        <footer className={classes.footer}>
            <p className={classes.row}>
                Feature suggestion? Found a bug? Create a new issue in{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/MariaSolOs/paradeigma"
                    className={classes.link}>
                    the repo
                </a>.
            </p>
            <p className={classes.row}>
                A side project from{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.maria-sol-os.com/"
                    className={classes.link}>
                    Maria José Solano
                </a>.
            </p>
        </footer>
    );
};

export default Footer;
