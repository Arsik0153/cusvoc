import React, { FC } from 'react';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import Button from 'presentation/component/common/Control/Button';
import { Wrapper, Logo, LogoWrapper, Controls, IntroText, FooterLinks, FooterLink } from './styles';

const HomePage: FC = () => {
    return (
        <FilledContainer>
            <Wrapper>
                <LogoWrapper>
                    <Logo>cusvoc</Logo>
                </LogoWrapper>
                <Controls>
                    <IntroText>Sign up to continue</IntroText>
                    <Button>Continue with email</Button>
                    <Button inverted>Use phone number</Button>
                </Controls>
                <FooterLinks>
                    <FooterLink href="">Terms of use</FooterLink>
                    <FooterLink href="">Privacy Policy</FooterLink>
                </FooterLinks>
            </Wrapper>
        </FilledContainer>
    );
};

export default HomePage;
