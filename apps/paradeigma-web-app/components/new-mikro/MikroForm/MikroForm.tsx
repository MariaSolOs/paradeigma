import useStyles from './MikroForm.styles';
import { MikroStyles, ProgrammingLanguage, ProgrammingLanguages } from '@paradeigma/graphql';
import type { FC } from 'react';
import type { MikroFormProps } from './index';

import { Select, Textarea, TextInput } from '@mantine/core';
import { IconAlphabetGreek, IconBrush, IconBulb, IconCode } from '@tabler/icons';
import LanguageSelectItem from 'components/LanguageSelectItem';
import MikroCode from 'components/MikroCode';

const MikroForm: FC<MikroFormProps> = (props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.form}>
            <div>
                <TextInput
                    {...props.form.getInputProps('name')}
                    required
                    placeholder="Baptize your mikro."
                    label={
                        <>
                            <IconBulb size={20} /> Name it like a variable: Keep it short, but self-explanatory.
                        </>
                    }
                    classNames={{
                        root: classes.inputRoot,
                        label: classes.label
                    }}
                />
                <Textarea
                    {...props.form.getInputProps('description')}
                    required
                    placeholder="What is your mikro about?"
                    minRows={3}
                    maxRows={3}
                    label={
                        <>
                            <IconBulb size={20} /> As with good docs, a complete description is always appreciated.
                        </>
                    }
                    classNames={{
                        root: classes.inputRoot,
                        label: classes.label
                    }}
                />
                <Select
                    {...props.form.getInputProps('language')}
                    data={ProgrammingLanguages}
                    itemComponent={LanguageSelectItem}
                    label={
                        <>
                            <IconAlphabetGreek size={20} /> Which programming language are you using?
                        </>
                    }
                    placeholder="Choose your weapon."
                    classNames={{
                        root: classes.inputRoot,
                        label: classes.label
                    }}
                />
                <Select
                    {...props.form.getInputProps('style')}
                    data={MikroStyles}
                    label={
                        <>
                            <IconBrush size={20} /> Which style would you like?
                        </>
                    }
                    classNames={{
                        root: classes.inputRoot,
                        label: classes.label
                    }}
                />
            </div>
            <div className={classes.editorContainer}>
                <Textarea
                    {...props.form.getInputProps('content')}
                    required
                    label={
                        <>
                            <IconCode size={20} /> Write your mikro.
                        </>
                    }
                    classNames={{
                        root: classes.inputRoot,
                        label: classes.label
                    }}
                />
                <MikroCode
                    showLineNumbers
                    language={props.form.values.language ?? ProgrammingLanguage.Javascript}
                    style={props.form.values.style}
                    customStyle={{
                        padding: '8px 10px'
                    }}>
                    {props.form.values.content}
                </MikroCode>
            </div>
        </div>
    );
};

export default MikroForm;
