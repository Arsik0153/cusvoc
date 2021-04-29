import React, { FC, useState } from 'react';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import Checkbox from 'presentation/component/common/Control/Checkbox';
import { Wrapper, Heading, Text, Controls, Button } from './styles';

type InterestT = {
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

const Interests: FC = () => {
    const [activeInterests, setActiveInterests] = useState<number[]>([]);

    const handleCheckboxClick = (interestId: number): void => {
        if (activeInterests.includes(interestId)) {
            setActiveInterests(activeInterests.filter((interest) => interest !== interestId));
        } else {
            setActiveInterests([...activeInterests, interestId]);
        }
    };

    return (
        <FilledContainer>
            <Wrapper>
                <Heading>Your interests</Heading>
                <Text>
                    Select a few of your interests and let everyone know what you’re passionate
                    about.
                </Text>
                <Controls>
                    {INTERESTS.map(({ text, id }) => (
                        <Checkbox
                            text={text}
                            checked={activeInterests.includes(id)}
                            key={id}
                            onClick={() => handleCheckboxClick(id)}
                        />
                    ))}
                </Controls>
                <Button>Continue</Button>
            </Wrapper>
        </FilledContainer>
    );
};

export default Interests;
