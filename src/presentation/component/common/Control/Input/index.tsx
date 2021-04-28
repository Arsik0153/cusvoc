import React, { FC, InputHTMLAttributes } from 'react';
import { Wrapper, Control } from './styles';

export type PropsT = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
};

const Input: FC<PropsT> = (props) => {
    const { error, value, ...restProps } = props;

    return (
        <Wrapper>
            <Control value={value || ''} {...restProps} />
        </Wrapper>
    );
};

export default Input;
