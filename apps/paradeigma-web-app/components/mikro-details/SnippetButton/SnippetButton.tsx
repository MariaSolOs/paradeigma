import type { FC } from 'react';
import type { SnippetButtonProps, Editor } from './index';

import * as S from './SnippetButton.styled';

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
    const { iconClassName, text } = getButtonContent(props.editor);

    return (
        <S.Button>
            <S.EditorIcon className={iconClassName} />
            {text}
        </S.Button>
    );
};

export default SnippetButton;
