import { useEffect, useState } from 'react';
import useStyles from './CodeEditor.styles';
import type { FC } from 'react';
import type { CodeEditorProps } from './index';

import { Textarea } from '@mantine/core';

const CodeEditor: FC<CodeEditorProps> = (props) => {
    const { classes } = useStyles();

    const [lineCount, setLineCount] = useState(0);

    // Create line number column based on the number of input lines.
    useEffect(() => {
        setLineCount(props.value.split('\n').length);
    }, [props.value]);

    return (
        <div className={classes.editor}>
            <div className={classes.lineNumbers}>
                {Array(lineCount).fill(0).map((_, i) => <div key={i}>{i + 1}</div>)}
            </div>
            <Textarea
                value={props.value}
                onChange={props.onChange}
                maxRows={10}
                autosize
                classNames={{
                    root: classes.areaRoot,
                    input: classes.areaInput
                }}
            />
        </div>
    );
};

export default CodeEditor;
