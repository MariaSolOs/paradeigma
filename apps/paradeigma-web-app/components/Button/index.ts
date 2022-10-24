import type { ButtonHTMLAttributes } from 'react';

import { Button } from './Button.styled';

export type ButtonProps = {
    primaryColor?: string;
    secondaryColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default Button;
