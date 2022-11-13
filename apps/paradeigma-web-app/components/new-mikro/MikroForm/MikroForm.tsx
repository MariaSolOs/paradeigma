import useStyles from './MikroForm.styles';
import { MIKRO_CODE_MAX_LINES, MikroStyles, ProgrammingLanguage, ProgrammingLanguages } from '@paradeigma/graphql';
import type { FC } from 'react';
import type { MikroFormProps } from './index';

import { Select, Textarea, TextInput } from '@mantine/core';
import { IconAlphabetGreek, IconBrush, IconBulb } from '@tabler/icons';
import LanguageSelectItem from 'components/LanguageSelectItem';
import CodeEditor from 'components/new-mikro/CodeEditor';
import MikroCode from 'components/MikroCode';
import Button from 'components/Button';

const MikroForm: FC<MikroFormProps> = (props) => {
    const { classes, cx } = useStyles();

    return (
        <>
            <div className={classes.form}>
                <div className={classes.formBlock}>
                    <TextInput
                        {...props.form.getInputProps('name')}
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
                <div className={cx(classes.formBlock, classes.editorBlock)}>
                    <CodeEditor
                        value={props.form.values.content}
                        onChange={(event) => {
                            // Only change the code if short enough.
                            const value = event.target.value;
                            if (value.split('\n').length <= MIKRO_CODE_MAX_LINES) {
                                props.form.setFieldValue('content', value);
                            }
                        }}
                        error={(props.form.getInputProps('content') as { error?: string }).error}
                    />
                    <MikroCode
                        showLineNumbers
                        language={props.form.values.language ?? ProgrammingLanguage.Javascript}
                        style={props.form.values.style}
                        customStyle={{ fontSize: 14 }}>
                        {props.form.values.content}
                    </MikroCode>
                </div>
            </div>
            <Button type="submit" className={classes.submitButton}>Ta-da!</Button>
        </>
    );
};

export default MikroForm;
