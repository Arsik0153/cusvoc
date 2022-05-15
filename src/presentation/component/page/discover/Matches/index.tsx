import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'constant/apiRoutes';
import { Wrapper, Title, Match, Name, Image, Inner } from './styles';

type UserT = {
    id: number;
    first_name: string;
    last_name: string;
    link: string;
    user_account_id_given?: string;
};

const Matches: FC = () => {
    const [users, setUsers] = useState<UserT[] | undefined>();
    const [currentUser, setCurrentUser] = useState<UserT | undefined>();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        axios.get(`${BASE_URL}/users/${userId}/likes`).then((res) => {
            setUsers(res.data);
        });
    }, []);

    useEffect(() => {
        if (users && users?.length > 0) {
            axios.get(`${BASE_URL}/users/${users[0].user_account_id_given}`).then((res) => {
                setCurrentUser(res.data);
            });
        }
    }, [users]);

    return (
        <Wrapper>
            <Title>Your latest likes</Title>
            <Inner>
                {/*{users && users.length > 0 &&*/}
                {/*    users.map((user, index) => (*/}
                {/*        <Match key={user.id}>*/}
                {/*            <Image src={FAKE_IMAGES[index]} alt="" />*/}
                {/*            <Name>*/}
                {/*                {user.first_name} {user.last_name}*/}
                {/*            </Name>*/}
                {/*        </Match>*/}
                {/*    ))}*/}

                {currentUser && (
                    <Match>
                        <Image src={currentUser.link} alt=""/>
                        <Name>
                            {currentUser.first_name} {currentUser.last_name}
                        </Name>
                    </Match>
                )}
            </Inner>
        </Wrapper>
    );
};

export default Matches;
