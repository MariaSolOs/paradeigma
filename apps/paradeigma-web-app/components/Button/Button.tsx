import useStyles from './Button.styles';
import type { FCC } from 'react';
import type { ButtonProps } from './index';

const Button: FCC<ButtonProps> = (props) => {
    const { primaryColor, secondaryColor, className, ...nativeProps } = props;

    const { classes, cx } = useStyles({ primaryColor, secondaryColor });

    return (
        <button className={cx(classes.button, className)} {...nativeProps}>
            {props.children}
        </button>
    );
};

export default Button;
