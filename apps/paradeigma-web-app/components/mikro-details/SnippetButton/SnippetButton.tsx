import { useState } from 'react';
import useStyles from './SnippetButton.styles';
import type { FC } from 'react';
import type { ButtonContent, SnippetButtonProps } from './index';

import { Modal } from '@mantine/core';
import Button from 'components/Button';

const SnippetButton: FC<SnippetButtonProps> = (props) => {
    const { classes, cx } = useStyles();

    const [snippetModalOpened, setSnippetModalOpened] = useState(false);

    const { iconClassName, text, snippet } = ((): ButtonContent => {
        switch (props.editor) {
            case 'VS':
                return {
                    iconClassName: 'devicon-visualstudio-plain',
                    text: 'Generate Visual Studio snippet',
                    snippet: ''
                };
            case 'VSCode':
                return {
                    iconClassName: 'devicon-vscode-plain',
                    text: 'Generate VS Code snippet',
                    snippet: `{
  "${props.mikro.name}": {
    "prefix": []
  }
}`
                };
        }
    })();

    return (
        <>
            <Button
                className={classes.button}
                primaryColor="#904799"
                secondaryColor="#E3DFE4"
                onClick={() => setSnippetModalOpened(true)}>
                <i className={cx(classes.editorIcon, iconClassName)} />
                {text}
            </Button>
            <Modal
                opened={snippetModalOpened}
                onClose={() => setSnippetModalOpened(false)}
                centered
                classNames={{
                    body: classes.modalBody
                }}>
                {snippet}
            </Modal>
        </>
    );
};

export default SnippetButton;
