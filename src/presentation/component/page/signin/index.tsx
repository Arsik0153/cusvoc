import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

const SignIn: FC = () => {
    const router = useRouter();

    useEffect(() => {
        localStorage.setItem('userId', '5');
        router.push('/');
    }, []);

    return null;
};

export default SignIn;
