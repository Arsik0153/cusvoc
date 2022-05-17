import { FC, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AUTH } from 'constant/apiRoutes';
import { DISCOVER } from 'constant/routes';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import Input from 'presentation/component/common/Control/Input';
import { Wrapper, Heading, Controls, Button } from './styles';

const SignIn: FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = () => {
        if (loading) {
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append('login', email);
        formData.append('password', pass);

        axios
            .post(AUTH, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                setLoading(false);
                if (res.data.authenticated) {
                    localStorage.setItem('userId', res.data.id);
                    router.push(DISCOVER);
                } else {
                    // eslint-disable-next-line no-alert
                    alert('Email or password is incorrect');
                }
            });
    };

    return (
        <FilledContainer>
            <Wrapper>
                <Heading>Sign in</Heading>
                <Controls>
                    <Input
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <Button onClick={handleSubmit} $disabled={loading}>Sign in</Button>
                </Controls>
            </Wrapper>
        </FilledContainer>
    );
};

export default SignIn;
