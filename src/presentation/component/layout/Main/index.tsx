import React, { FC } from 'react';
import { Global } from '@emotion/react';
import globalCss from 'presentation/component/layout/common/globalCss';
import Header from 'presentation/component/layout/Header';
import Footer from 'presentation/component/layout/Footer';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import Wrapper from './styles';

const Layout: FC = (props) => {
    const { children } = props;

    return (
        <FilledContainer>
            <Wrapper>
                <Header />
                {children}
            </Wrapper>
            <Global styles={globalCss} />
            <Footer />
        </FilledContainer>
    );
};

export default Layout;
