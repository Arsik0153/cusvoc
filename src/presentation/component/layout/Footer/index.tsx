import React, { FC } from 'react';
import { Wrapper, Text, Right } from './styles';

const Footer: FC = () => {
    return (
        <Wrapper>
            <Text>Cusvoc. 2021 © All rights reserved.</Text>
            <Right>
                <Text>Terms of use</Text>
                <Text>Privacy Policy</Text>
            </Right>
        </Wrapper>
    );
};

export default Footer;
