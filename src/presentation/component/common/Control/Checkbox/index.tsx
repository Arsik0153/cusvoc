import React, { FC } from 'react';
import Control from './styles';

type PropsT = {
    text: string;
    checked: boolean;
};

const Checkbox: FC<PropsT> = (props) => {
    const { text, checked } = props;

    return <Control inverted={!checked}>{text}</Control>;
};

export default Checkbox;
