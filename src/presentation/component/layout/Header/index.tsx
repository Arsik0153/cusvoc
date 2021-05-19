import React, { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { LinkT } from 'presentation/type/Link';
import { Wrapper, Logo, Left, Right, PageLink } from './styles';

export const LINKS: LinkT[] = [
    {
        id: 1,
        href: '/',
        text: 'Home',
    },
    {
        id: 2,
        href: '/signup',
        text: 'Sign Up',
    },
    {
        id: 3,
        href: '/signin',
        text: 'Sign In',
    },
];

const Header: FC = () => {
    const router = useRouter();
    const activeLink = router.pathname;

    return (
        <Wrapper>
            <Left>
                <NextLink href="/" passHref>
                    <Logo>cusvoc</Logo>
                </NextLink>
            </Left>
            <Right>
                {LINKS.map((link) => (
                    <NextLink href={link.href} passHref key={link.id}>
                        <PageLink active={activeLink === link.href}>{link.text}</PageLink>
                    </NextLink>
                ))}
            </Right>
        </Wrapper>
    );
};

export default Header;
