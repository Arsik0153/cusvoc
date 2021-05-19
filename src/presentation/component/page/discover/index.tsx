import React, { FC } from 'react';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import Slide from './Slide';
import Actions from './Actions';
import Matches from './Matches';
import { Wrapper, Title, Inner, Interaction } from './styles';

const Discover: FC = () => {
    return (
        <FilledContainer>
            <Wrapper>
                <Inner>
                    <Matches />
                    <Interaction>
                        <Title>Discover</Title>
                        <Slide
                            name="John Doe"
                            age={34}
                            description="Professional model"
                            src="https://images.unsplash.com/photo-1620058833760-3655c04bbf16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                        />
                        <Actions />
                    </Interaction>
                </Inner>
            </Wrapper>
        </FilledContainer>
    );
};

export default Discover;
