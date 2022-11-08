import useStyles from './SnippetButton.styles';
import type { FC } from 'react';
import type { Editor, SnippetButtonProps } from './index';

import Button from 'components/Button';

/**
 * @param editor - IDE/code editor for which the snippet is being generated for.
 * @returns The respective Devicon classname and button text.
 */
const getButtonContent = (editor: Editor): { iconClassName: string; text: string } => {
    switch (editor) {
        case 'VS':
            return {
                iconClassName: 'devicon-visualstudio-plain',
                text: 'Generate VS Code snippet'
            };
        case 'VSCode':
            return {
                iconClassName: 'devicon-vscode-plain',
                text: 'Generate Visual Studio snippet'
            };
    }
};

const SnippetButton: FC<SnippetButtonProps> = (props) => {
    const { classes, cx } = useStyles();

    const { iconClassName, text } = getButtonContent(props.editor);

    return (
        <Button className={classes.button} primaryColor="#904799" secondaryColor="#E3DFE4">
            <i className={cx(classes.editorIcon, iconClassName)} />
            {text}
        </Button>
    );
};

export default SnippetButton;
