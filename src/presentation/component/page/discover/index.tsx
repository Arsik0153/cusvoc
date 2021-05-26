import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import { InterestT } from 'presentation/component/page/signup';
import Slide from './Slide';
import Actions from './Actions';
import Matches from './Matches';
import { Wrapper, Title, Inner, Interaction } from './styles';

const INTERESTS: InterestT[] = [
    {
        id: 1,
        text: 'Photography',
    },
    {
        id: 2,
        text: 'Shopping',
    },
    {
        id: 3,
        text: 'Karaoke',
    },
    {
        id: 4,
        text: 'Yoga',
    },
    {
        id: 6,
        text: 'Tennis',
    },
    {
        id: 7,
        text: 'Run',
    },
];

const Discover: FC = () => {
    const router = useRouter();
    const [showFull, setShowFull] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('userId')) router.push('/');
    }, []);

    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    useEffect(() => {}, [showFull]);

    return (
        <FilledContainer>
            <Wrapper>
                <Inner>
                    <Interaction>
                        <Title>Discover</Title>
                        <Slide
                            showFull={showFull}
                            name="John Doe"
                            age={34}
                            description="Professional model"
                            src="https://images.unsplash.com/photo-1620058833760-3655c04bbf16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                            interests={INTERESTS}
                            onMoreClick={toggleShowFull}
                            onCloseClick={() => {}}
                            onLikeClick={() => {}}
                        />
                        {!showFull && (
                            <Actions
                                onMoreClick={toggleShowFull}
                                onCloseClick={() => {}}
                                onLikeClick={() => {}}
                            />
                        )}
                    </Interaction>
                    <Matches />
                </Inner>
            </Wrapper>
        </FilledContainer>
    );
};

export default Discover;
