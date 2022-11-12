import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { MikroStyle } from '@paradeigma/graphql';
import { getHookedSdk } from 'lib/graphql';
import type { MikroFormValues } from 'components/new-mikro/MikroForm';

import Spinner from 'components/Spinner';
import MikroForm from 'components/new-mikro/MikroForm';

const sdk = getHookedSdk();

// TODO: Add markdown support for the description
const NewMikroPage = () => {
    const router = useRouter();
    const form = useForm<MikroFormValues>({
        initialValues: {
            name: '',
            description: '',
            language: undefined,
            content: '',
            style: MikroStyle.AtomDark
        },
        validate: {
            // TODO: Not sure why value is of type 'any'
            language: (value: MikroFormValues['language']) => value === undefined ? 'Please select a language!' : null
        }
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (values: MikroFormValues) => {
        void (async () => {
            setIsSubmitting(true);

            if (values.language === undefined) {
                form.setFieldError('language', 'Please select a language!');
                return;
            }

            const { id } = (
                await sdk.createMikro({
                    ...values,
                    language: values.language
                })
            ).createMikro;

            showNotification({ message: <>Mickro created! 🥳</> });

            void router.push({ pathname: '/mikro/[id]', query: { id } });
        })();
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Spinner visible={isSubmitting} />
            <MikroForm form={form} />
        </form>
    );
};

export default NewMikroPage;
