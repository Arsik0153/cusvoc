import React, { FC } from 'react';
import { Wrapper, Image, Name, Content, Description } from './styles';

type PropsT = {
    src: string;
    name: string;
    age: number;
    description: string;
};

const Slide: FC<PropsT> = (props) => {
    const { src, age, name, description } = props;

    return (
        <Wrapper>
            <Image src={src} />
            <Content>
                <Name>
                    {name}, {age}
                </Name>
                <Description>{description}</Description>
            </Content>
        </Wrapper>
    );
};

export default Slide;
