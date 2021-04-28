import React, { FC } from 'react';
import NextLink from 'next/link';
import { INTERESTS } from 'constant/routes';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import Radio from 'presentation/component/common/Control/Radio';
import { Wrapper, Heading, Controls, Button } from './styles';

const GenderChoose: FC = () => {
    return (
        <FilledContainer>
            <Wrapper>
                <Heading>I am a</Heading>
                <Controls>
                    <Radio text="Woman" active={false} />
                    <Radio text="Man" active />
                    <Radio text="Choose another" active={false} />
                </Controls>
                <NextLink href={INTERESTS}>
                    <Button>Continue</Button>
                </NextLink>
            </Wrapper>
        </FilledContainer>
    );
};

export default GenderChoose;
