import { useRouter } from 'next/router';
import { getLanguageIcon } from 'lib/mikro';
import useStyles from './Details.styles';
import type { FC } from 'react';
import type { DetailsProps } from './index';

import Button from 'components/Button';
import MikroCode from 'components/MikroCode';
import SnippetButton from 'components/mikro-details/SnippetButton';

const Details: FC<DetailsProps> = (props) => {
    const { cx, classes } = useStyles();

    const router = useRouter();

    return (
        <div className={classes.container}>
            <Button onClick={router.back}>Go back</Button>
            <div className={classes.body}>
                <div className={classes.codeColumn}>
                    <div className={classes.mikro}>
                        <MikroCode
                            content={props.mikro.content}
                            language={props.mikro.language}
                            style={props.mikro.style}
                            containerStyles={{
                                width: '100%',
                                margin: 0
                            }}
                        />
                    </div>
                    <SnippetButton editor="VSCode" />
                </div>
                <div className={classes.textDetails}>
                    <div className={classes.languageIconContainer}>
                        <i className={cx(getLanguageIcon(props.mikro.language), classes.languageIcon)} />
                    </div>
                    <h2 className={classes.name}>{props.mikro.name}</h2>
                    <p className={classes.description}>{props.mikro.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
