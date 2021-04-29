import React, { ButtonHTMLAttributes, FC } from 'react';
import Control from './styles';

type PropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    checked: boolean;
};

const Checkbox: FC<PropsT> = (props) => {
    const { text, checked, ...restProps } = props;

    return (
        <Control inverted={!checked} {...restProps}>
            {text}
        </Control>
    );
};

export default Checkbox;
