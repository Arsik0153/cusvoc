import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'constant/apiRoutes';
import { Wrapper, Title, Match, Name, Image, Inner, Email, Link } from './styles';

type UserT = {
    email: string;
    id: number;
    first_name: string;
    last_name: string;
    link: string;
    user_account_id_given?: string;
};

const Matches: FC = () => {
    const [users, setUsers] = useState<UserT[] | undefined>();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        axios.get(`${BASE_URL}/users/${userId}/likes`).then((res) => {
            setUsers(res.data);
        });
    }, []);

    return (
        <Wrapper>
            <Title>Your latest likes</Title>
            <Inner>
                {users && users.length > 0 &&
                    users.map((user, index) => (
                        <Match key={user.id}>
                            <Image src={user.link} alt="" />
                            <Name>
                                {user.first_name} {user.last_name}
                            </Name>
                            <Link href={`mailto:${user.email}`}>
                                <Email>{user.email}</Email>
                            </Link>
                        </Match>
                    ))}
            </Inner>
        </Wrapper>
    );
};

export default Matches;
