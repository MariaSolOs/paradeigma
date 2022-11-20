import { useState } from 'react';
import { splitIntoLines } from 'lib/strings';
import { useMantineTheme } from '@mantine/core';
import useStyles from './SnippetButton.styles';
import type { FC } from 'react';
import type { SnippetButtonProps, SnippetContent } from './index';

import { CopyButton, Modal } from '@mantine/core';
import Button from 'components/Button';
import MikroCode from 'components/MikroCode';

const SnippetButton: FC<SnippetButtonProps> = (props) => {
    const { classes, cx } = useStyles();
    const theme = useMantineTheme();

    const [snippetModalOpened, setSnippetModalOpened] = useState(false);

    const { iconClassName, buttonText, editorSnippet, editorDocs } = ((): SnippetContent => {
        switch (props.editor) {
            case 'VS':
                return {
                    iconClassName: 'devicon-visualstudio-plain',
                    buttonText: 'Generate Visual Studio snippet',
                    editorSnippet: '',
                    editorDocs: ''
                };
            case 'VSCode':
                return {
                    iconClassName: 'devicon-vscode-plain',
                    buttonText: 'Generate VS Code snippet',
                    editorSnippet: `{
  "${props.mikro.name}": {
    "prefix": [],
    "body": [
${splitIntoLines(props.mikro.content).map((line) => `      "${line}"`).join(',\n')}
    ],
    "description": "${props.mikro.description.split('.', 1)[0] ?? ''}"
  }
}`,
                    editorDocs:
                        'https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets'
                };
        }
    })();

    return (
        <>
            <Button
                className={classes.editorButton}
                primaryColor="#904799"
                secondaryColor="#E3DFE4"
                onClick={() => setSnippetModalOpened(true)}>
                <i className={cx(classes.editorIcon, iconClassName)} />
                {buttonText}
            </Button>
            <Modal
                opened={snippetModalOpened}
                onClose={() => setSnippetModalOpened(false)}
                centered
                withCloseButton={false}
                size="auto"
                overlayColor={theme.colors['paradeigma-blue'][9]}
                classNames={{ modal: classes.modal }}>
                <MikroCode
                    style={props.mikro.style}
                    language={props.mikro.language}
                    wrapLongLines
                    customStyle={{
                        fontSize: '0.75rem',
                        borderRadius: theme.radius.md
                    }}>
                    {editorSnippet}
                </MikroCode>
                <p className={classes.docsLink}>
                    For more information about adding snippets to your editor, visit the{' '}
                    <a href={editorDocs} target="_blank" rel="noopener noreferrer">docs</a>.
                </p>
                <CopyButton value={editorSnippet}>
                    {({ copy }) => (
                        <Button className={classes.copyButton} onClick={copy}>
                            Copy to clipboard
                        </Button>
                    )}
                </CopyButton>
            </Modal>
        </>
    );
};

export default SnippetButton;
