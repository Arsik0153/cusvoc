import React, { FC } from 'react';
import { Wrapper, Control } from './styles';

type PropsT = {
    text: string;
    active: boolean;
};

const Radio: FC<PropsT> = (props) => {
    const { text, active } = props;

    return (
        <Wrapper>
            <Control inverted={!active}>{text}</Control>
        </Wrapper>
    );
};

export default Radio;
