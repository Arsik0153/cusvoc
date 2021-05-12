import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { INTERESTS } from 'constant/routes';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import Radio from 'presentation/component/common/Control/Radio';
import { Wrapper, Heading, Controls, Button } from './styles';

const GenderChoose: FC = () => {
    const router = useRouter();
    const [activeGender, setActiveGender] = useState<string>('2');

    const handleSubmit = (): void => {
        const oldData = localStorage.getItem('registerData');
        if (oldData) {
            const data = {
                ...JSON.parse(oldData),
                gender_id: activeGender,
            };
            localStorage.setItem('registerData', JSON.stringify(data));
            router.push(INTERESTS);
        }
    };

    return (
        <FilledContainer>
            <Wrapper>
                <Heading>I am a</Heading>
                <Controls>
                    <Radio
                        text="Woman"
                        active={activeGender === '1'}
                        onClick={() => setActiveGender('1')}
                    />
                    <Radio
                        text="Man"
                        active={activeGender === '2'}
                        onClick={() => setActiveGender('2')}
                    />
                    <Radio
                        text="Choose another"
                        active={activeGender === '3'}
                        onClick={() => setActiveGender('3')}
                    />
                </Controls>
                <Button onClick={handleSubmit}>Continue</Button>
            </Wrapper>
        </FilledContainer>
    );
};

export default GenderChoose;
