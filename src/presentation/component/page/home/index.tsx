import React, { FC } from 'react';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import NextLink from 'next/link';
import { DISCOVER, SIGN_UP } from 'constant/routes';
import datingSvg from 'presentation/svg/dating.svg?sprite';
import Button from 'presentation/component/common/Control/Button';
import { useAuth } from 'presentation/hook/auth';
import {
    Wrapper,
    Banner,
    Text,
    Heading,
    datingCss,
    ImageWrapper,
    Content,
    MicroText,
    Link,
} from './styles';

const HomePage: FC = () => {
    const { isLogged } = useAuth();

    return (
        <Wrapper>
            <Banner>
                <Content>
                    <Heading>Dating deserves better</Heading>
                    <Text>
                        On CygniFlight, you&apos;re more than just a photo. You have stories to
                        tell, and passions to share, and things to talk about that are more
                        interesting than the weather. Get noticed for who you are, not what you look
                        like. Because you deserve what dating deserves: better.
                    </Text>
                    <MicroText>
                        By clicking Join, you agree to our <Link href="/">Terms</Link>. Learn how we
                        process your data in our <Link href="/">Privacy Policy</Link>.
                    </MicroText>
                    {!isLogged && (
                        <NextLink href={SIGN_UP} passHref>
                            <Button>Join now</Button>
                        </NextLink>
                    )}

                    {isLogged && (
                        <NextLink href={DISCOVER} passHref>
                            <Button>Discover new people</Button>
                        </NextLink>
                    )}
                </Content>
                <ImageWrapper>
                    <SvgSpriteIcon icon={datingSvg} css={datingCss} />
                </ImageWrapper>
            </Banner>
        </Wrapper>
    );
};

export default HomePage;
