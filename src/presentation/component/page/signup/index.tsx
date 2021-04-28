import React, { FC } from 'react';
import NextLink from 'next/link';
import { GENDER_CHOOSE } from 'constant/routes';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import Input from 'presentation/component/common/Control/Input';
import { Wrapper, Heading, Controls, Button } from './styles';

const SignUp: FC = () => {
    return (
        <FilledContainer>
            <Wrapper>
                <Heading>Profile details</Heading>
                <Controls>
                    <Input placeholder="First name" type="text" />
                    <Input placeholder="Last name" type="text" />
                    <Input placeholder="Birth date" type="date" value="" />
                </Controls>
                <NextLink href={GENDER_CHOOSE} passHref>
                    <Button>Confirm</Button>
                </NextLink>
            </Wrapper>
        </FilledContainer>
    );
};

export default SignUp;
