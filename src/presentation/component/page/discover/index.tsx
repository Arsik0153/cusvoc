import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {DISCOVER, LIKE} from 'constant/apiRoutes';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import getAge from "helper/string/getAge";
import Actions from './Actions';
import Matches from './Matches';
import Slide from "./Slide";
import { Wrapper, Title, Inner, Interaction, SubTitle, Center } from './styles';

type UserT = {
    id: number;
    src: string;
    first_name: string;
    last_name: string;
    age: number;
    details: string;
    link: string;
    about_me: string;
    date_of_birth: string;
};

const MY_ID = typeof window !== 'undefined' ? Number(localStorage.getItem('userId')) : null;

const Discover: FC = () => {
    const router = useRouter();
    const [showFull, setShowFull] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const [users, setUsers] = useState<UserT[]>([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('userId')) router.push('/');
    }, []);

    const toggleShowFull = () => {
        setShowFull(!showFull);
    };

    const rate = (action: number) => {
        if (!MY_ID) {
            return;
        }

        setReady(false);

        const formData = new FormData();
        formData.append('user_account_id_received', `${users[currentId].id}`);
        formData.append('grade', `${action}`);

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
        if (currentId !== users.length - 1){
            setCurrentId((currentId) => currentId + 1);
        }
        setReady(true);
    };

    useEffect(() => {
        if (!MY_ID) {
            return;
        }

        axios.get(DISCOVER(MY_ID)).then(({ data }) => {
            setUsers(data);
            if (data && data.length > 0) {
                setReady(true);
            }
        });
    }, []);

    return (
        <FilledContainer>
            <Wrapper>
                <Inner>
                    <Interaction opacify={!ready}>
                        <Title>Discover</Title>
                        {users?.length > 0 && (
                            <Slide
                                showFull={showFull}
                                name={`${users[currentId].first_name} ${users[currentId].last_name}`}
                                age={getAge(users[currentId].date_of_birth)}
                                description={users[currentId].about_me}
                                src={users[currentId].link}
                                interests={users[currentId].details}
                                onMoreClick={toggleShowFull}
                                rate={rate}
                            />
                        )}
                        {!users && (
                            <Center>
                                <SubTitle>There's nothing for you yet.</SubTitle>
                            </Center>
                        )}
                        {!showFull && (
                            <Actions
                                onMoreClick={toggleShowFull}
                                rate={rate}
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
