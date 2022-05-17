import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { USER } from 'constant/apiRoutes';
import getAge from 'helper/string/getAge';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import { Wrapper, ImageWrapper, Image, ContentWrapper, Name, Text, Heading, InterestsWrapper, Interest, ActionWrapper, Button } from './style';

const MY_ID = typeof window !== 'undefined' ? Number(localStorage.getItem('userId')) : null;

const getGender = (gender: number) => {
    if (gender === 0) {
        return 'Women';
    }

    if (gender === 1) {
        return 'Men';
    }

    return 'Men and Women';
};

const ProfilePage: FC = () => {
    const router = useRouter();
    const [user, setUser] = useState<any>();

    useEffect(() => {
        if (!MY_ID) {
            router.push('/');

            return;
        }

        axios.get(USER(MY_ID))
            .then(res => {
                setUser(res.data);
                console.log(res.data.id);
            });
    }, []);

    return (
        <FilledContainer>
            {user && (
                <Wrapper>
                    <ActionWrapper>
                        <ImageWrapper>
                            <Image src={user.link} />
                            <Button type="button">Edit profile</Button>
                        </ImageWrapper>
                        <Button type="button">Edit profile</Button>
                    </ActionWrapper>
                    <ContentWrapper>
                        <Name>{user.first_name} {user.last_name}, {getAge(user.date_of_birth)}</Name>
                        <Heading>Basic information</Heading>
                        <Text>Born: {new Date(user.date_of_birth).toLocaleDateString()}</Text>
                        <Text>Interested in: {getGender(+user.gender_id)}</Text>
                        <Heading>About me</Heading>
                        <Text>{user.about_me}</Text>
                        <Heading>Interests</Heading>
                        {user.details && user.details.split(', ').map((interest: string, id: number) => (
                            <InterestsWrapper key={id}>
                                <Interest>{interest}</Interest>
                            </InterestsWrapper>
                        ))}
                        <Heading>Contacts</Heading>
                        <Text>E-mail: {user.email}</Text>
                        <Text>Member since {new Date(user.confirmation_time).toLocaleDateString()}</Text>
                    </ContentWrapper>
                </Wrapper>
            )}
        </FilledContainer>
    );
};

export default ProfilePage;