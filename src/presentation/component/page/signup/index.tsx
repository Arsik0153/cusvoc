import React, { ChangeEvent, FC, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import Input from 'presentation/component/common/Control/Input';
import Radio from 'presentation/component/common/Control/Radio';
import TextArea from 'presentation/component/common/Control/TextArea';
import Checkbox from 'presentation/component/common/Control/Checkbox';
import { DISCOVER } from 'constant/routes';
import { USERS_API } from 'constant/apiRoutes';
import cameraSvg from 'presentation/svg/camera.svg?sprite';
import {
    Wrapper,
    Heading,
    Controls,
    Button,
    Text,
    InterestsControl,
    IconWrapper,
    FileInput,
    FileName,
    ImageBlock,
} from './styles';

export type InterestT = {
    id: number;
    text: string;
};

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
        id: 5,
        text: 'Cooking',
    },
    {
        id: 6,
        text: 'Tennis',
    },
    {
        id: 7,
        text: 'Run',
    },
    {
        id: 8,
        text: 'Swimming',
    },
    {
        id: 9,
        text: 'Art',
    },
    {
        id: 10,
        text: 'Traveling',
    },
    {
        id: 11,
        text: 'Extreme',
    },
    {
        id: 12,
        text: 'Music',
    },
    {
        id: 13,
        text: 'Drink',
    },
    {
        id: 14,
        text: 'Video games',
    },
];

const SignUp: FC = () => {
    const router = useRouter();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('2021-05-09 14:17:57');
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [activeGender, setActiveGender] = useState<string>('0');
    const [activeInterests, setActiveInterests] = useState<number[]>([]);
    const [interestedIn, setInterestedIn] = useState<string>('0');
    const [files, setFiles] = useState<FileList | null>(null);
    const [bio, setBio] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const currentFiles = e.target.files;
        setFiles(currentFiles);
    };

    const handleCheckboxClick = (interestId: number): void => {
        if (activeInterests.includes(interestId)) {
            setActiveInterests(activeInterests.filter((interest) => interest !== interestId));
        } else {
            setActiveInterests([...activeInterests, interestId]);
        }
    };

    const handleSubmit = () => {
        if (loading) {
            return;
        }

        if (!files) {
            // eslint-disable-next-line no-alert
            alert('Upload your profile picture');

            return;
        }

        setLoading(true);

        const interestsAsText = activeInterests
            .map((id) => INTERESTS.find((x) => x.id === id)?.text)
            .join(', ');

        const formData = new FormData();
        formData.append('confirmation_code', password);
        formData.append('confirmation_time', '');
        formData.append('date_of_birth', birthDate);
        formData.append('about_me', bio);
        formData.append('details', interestsAsText);
        formData.append('email', email);
        formData.append('first_name', firstName);
        formData.append('gender_id', activeGender);
        formData.append('orientation', interestedIn);
        formData.append('last_name', lastName);
        formData.append('nickname', username);
        formData.append('photo', files[0]);
        formData.append('popularity', '0');

        axios
            .post(USERS_API, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                localStorage.setItem('userId', res.data.user_id);
                router.push(DISCOVER);
            });
    };

    return (
        <FilledContainer>
            <Wrapper>
                <Heading>Profile details</Heading>
                <Controls>
                    <Input
                        placeholder="First name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Input
                        placeholder="Last name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Input
                        placeholder="Birth date"
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                    <Input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Controls>
                <Heading>I am a</Heading>
                <Controls>
                    <Radio
                        text="Woman"
                        active={activeGender === '0'}
                        onClick={() => setActiveGender('0')}
                    />
                    <Radio
                        text="Man"
                        active={activeGender === '1'}
                        onClick={() => setActiveGender('1')}
                    />
                    <Radio
                        text="Prefer not to say"
                        active={activeGender === '2'}
                        onClick={() => setActiveGender('2')}
                    />
                </Controls>
                <Heading>I am interested in </Heading>
                <Controls>
                    <Radio
                        text="Woman"
                        active={interestedIn === '0'}
                        onClick={() => setInterestedIn('0')}
                    />
                    <Radio
                        text="Man"
                        active={interestedIn === '1'}
                        onClick={() => setInterestedIn('1')}
                    />
                    <Radio
                        text="I do not care"
                        active={interestedIn === '2'}
                        onClick={() => setInterestedIn('2')}
                    />
                </Controls>
                <Heading>Your interests</Heading>
                <Text>
                    Select a few of your interests and let everyone know what you’re passionate
                    about.
                </Text>
                <InterestsControl>
                    {INTERESTS.map(({ text, id }) => (
                        <Checkbox
                            text={text}
                            checked={activeInterests.includes(id)}
                            key={id}
                            onClick={() => handleCheckboxClick(id)}
                        />
                    ))}
                </InterestsControl>
                <Heading>
                    Describe yourself little bit more
                </Heading>
                <TextArea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <Heading>Profile image</Heading>
                <ImageBlock htmlFor="pfp-upload">
                    Upload image
                    <IconWrapper>
                        <SvgSpriteIcon icon={cameraSvg} />
                    </IconWrapper>
                </ImageBlock>
                <FileName>{files && files[0] && files[0].name}</FileName>
                <FileInput id="pfp-upload" type="file" onChange={handleChange} accept="image/*" />
                <Button onClick={handleSubmit} $disabled={loading}>Sign Up</Button>
            </Wrapper>
        </FilledContainer>
    );
};

export default SignUp;
