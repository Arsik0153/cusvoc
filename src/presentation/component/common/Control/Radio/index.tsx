import React, { FC, HTMLAttributes } from 'react';
import { Wrapper, Control } from './styles';

type PropsT = HTMLAttributes<HTMLElement> & {
    text: string;
    active: boolean;
};

const Radio: FC<PropsT> = (props) => {
    const { text, active, ...restProps } = props;

    return (
        <Wrapper {...restProps}>
            <Control inverted={!active}>{text}</Control>
        </Wrapper>
    );
};

export default Radio;
