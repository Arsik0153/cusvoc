import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { GENDER_CHOOSE } from 'constant/routes';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import Input from 'presentation/component/common/Control/Input';
import { Wrapper, Heading, Controls, Button } from './styles';

const SignUp: FC = () => {
    const router = useRouter();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('2021-05-09 14:17:57');
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (): void => {
        const data = {
            first_name: firstName,
            last_name: lastName,
            email,
            nickname: username,
            confirmation_code: password,
            confirmation_time: birthDate,
        };
        localStorage.setItem('registerData', JSON.stringify(data));
        router.push(GENDER_CHOOSE);
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
                <Button onClick={handleSubmit}>Confirm</Button>
            </Wrapper>
        </FilledContainer>
    );
};

export default SignUp;
