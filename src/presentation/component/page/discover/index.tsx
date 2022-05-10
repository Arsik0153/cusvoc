import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {DISCOVER, LIKE} from 'constant/apiRoutes';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import { InterestT } from 'presentation/component/page/signup';
import Actions from './Actions';
import Matches from './Matches';
import { Wrapper, Title, Inner, Interaction } from './styles';
import Slide from "./Slide";

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

const FAKE_IMAGES = [
    'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    'https://images.unsplash.com/photo-1485463598028-44d6c47bf23f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1576695444267-40cdd214f06e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80'
];

type UserT = {
    id: number;
    src: string;
    first_name: string;
    last_name: string;
    age: number;
    details: string;
};

const MY_ID = typeof window !== 'undefined' ? Number(localStorage.getItem('userId')) : null;

const Discover: FC = () => {
    const router = useRouter();
    const [showFull, setShowFull] = useState(false);
    const [currentId, setCurrentId] = useState(1);
    const [users, setUsers] = useState<UserT[]>([]);
    const [ready, setReady] = useState(true);

    useEffect(() => {
        if (!localStorage.getItem('userId')) router.push('/');
    }, []);

    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    const like = () => {
        if (!MY_ID) {
            return;
        }

        setReady(false);

        const formData = new FormData();
        formData.append('user_account_id_received', String(currentId));
        formData.append('grade', '1');

        axios
            .post(LIKE(MY_ID), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(() => {
                getNextSlide();
            });
    };

    const getNextSlide = () => {
        setReady(false);
        setCurrentId((currentId) => currentId + 1);
        setReady(true);
    };

    useEffect(() => {
        if (!MY_ID) {
            return;
        }

        axios.get(DISCOVER(MY_ID)).then(({ data }) => {
            setUsers(data);
            setReady(true);
        });
    }, []);

    return (
        <FilledContainer>
            <Wrapper>
                <Inner>
                    <Interaction opacify={!ready}>
                        <Title>Discover</Title>
                        {users.length > 0 && (
                            <Slide
                                showFull={showFull}
                                name={`${users[currentId].first_name} ${users[currentId].last_name}`}
                                age={Math.floor(Math.random() * (30 - 18 + 1) + 18)}
                                description={users[currentId].details}
                                src={currentId > FAKE_IMAGES.length - 1 ? FAKE_IMAGES[currentId % FAKE_IMAGES.length] : FAKE_IMAGES[currentId]}
                                interests={INTERESTS}
                                onMoreClick={toggleShowFull}
                                onCloseClick={getNextSlide}
                                onLikeClick={like}
                            />
                        )}
                        {!showFull && (
                            <Actions
                                onMoreClick={toggleShowFull}
                                onCloseClick={getNextSlide}
                                onLikeClick={like}
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
