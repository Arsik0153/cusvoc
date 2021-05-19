import React, { FC } from 'react';
import { Wrapper, Title, Match, Name, Image, Inner } from './styles';

const Matches: FC = () => {
    return (
        <Wrapper>
            <Title>Latest matches</Title>
            <Inner>
                <Match>
                    <Image src="http://d70242yz.beget.tech/images/25.jpg" alt="" />
                    <Name>Peter Parker</Name>
                </Match>
                <Match>
                    <Image src="http://d70242yz.beget.tech/images/25.jpg" alt="" />
                    <Name>Peter Parker</Name>
                </Match>
                <Match>
                    <Image src="http://d70242yz.beget.tech/images/25.jpg" alt="" />
                    <Name>Peter Parker</Name>
                </Match>
                <Match>
                    <Image src="http://d70242yz.beget.tech/images/25.jpg" alt="" />
                    <Name>Peter Parker</Name>
                </Match>
            </Inner>
        </Wrapper>
    );
};

export default Matches;
