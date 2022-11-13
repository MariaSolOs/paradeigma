import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { getHookedSdk } from 'lib/graphql';
import {
    MIKRO_CODE_MAX_LINES,
    MIKRO_DESCRIPTION_MAX_LENGTH,
    MIKRO_NAME_MAX_LENGTH,
    MikroStyle
} from '@paradeigma/graphql';
import type { MikroFormValues } from 'components/new-mikro/MikroForm';

import Spinner from 'components/Spinner';
import MikroForm from 'components/new-mikro/MikroForm';
import { IconCodePlus } from '@tabler/icons';

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
            name: (value) => {
                if (value.length === 0) {
                    return 'Please name your mikro!';
                }
                if (value.length > MIKRO_NAME_MAX_LENGTH) {
                    return 'Please use a shorter name!';
                }

                return null;
            },
            description: (value) => {
                if (value.length === 0) {
                    return 'Please describe your mikro!';
                }
                if (value.length > MIKRO_DESCRIPTION_MAX_LENGTH) {
                    return 'Please use a shorter description!';
                }

                return null;
            },
            // TODO: Not sure why value is of type 'any'
            language: (value: MikroFormValues['language']) => value === undefined ? 'Please select a language!' : null,
            content: (value) => {
                if (value.length === 0) {
                    return "Where's your mikro??";
                }
                if (value.split('\n').length > MIKRO_CODE_MAX_LINES) {
                    return 'Your mikro is becoming a MAKRO!';
                }

                return null;
            }
        }
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (values: MikroFormValues) => {
        void (async () => {
            setIsSubmitting(true);

            // This should never actually happen because validation happens
            // beforehand, but we need the typeguard for TypeScript.
            if (values.language === undefined) {
                form.validateField('language');
                return;
            }

            const { id } = (
                await sdk.createMikro({
                    ...values,
                    language: values.language
                })
            ).createMikro;

            showNotification({ message: 'Mickro created!', icon: <IconCodePlus /> });

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
