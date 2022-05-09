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

const FAKE_IMAGES = [
    'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    'https://images.unsplash.com/photo-1485463598028-44d6c47bf23f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1576695444267-40cdd214f06e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80'
];

const Matches: FC = () => {
    const [users, setUsers] = useState<UserT[] | undefined>();
    const [currentUser, setCurrentUser] = useState();

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
                        <Image src={FAKE_IMAGES[0]} alt=""/>
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
