import type { ButtonHTMLAttributes } from 'react';

import Button from './Button';

export type ButtonStyleProps = {
    primaryColor?: string;
    secondaryColor?: string;
};

export type ButtonProps = ButtonStyleProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default Button;
