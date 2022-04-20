import React, { FC } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { LinkT } from 'presentation/type/Link';
import { useAuth } from 'presentation/hook/auth';
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
    const { isLogged } = useAuth();

    const handleSignOutClick = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        localStorage.removeItem('userId');
        router.push('/');
    };

    return (
        <Wrapper>
            <Left>
                <NextLink href="/" passHref>
                    <Logo>CygniFlight</Logo>
                </NextLink>
            </Left>
            <Right>
                {!isLogged &&
                    LINKS.map((link) => (
                        <NextLink href={link.href} passHref key={link.id}>
                            <PageLink active={activeLink === link.href}>{link.text}</PageLink>
                        </NextLink>
                    ))}
                {isLogged && (
                    <PageLink active={false} onClick={handleSignOutClick} href="/">
                        Sign out
                    </PageLink>
                )}
            </Right>
        </Wrapper>
    );
};

export default Header;
