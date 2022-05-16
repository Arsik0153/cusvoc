import React, { FC } from 'react';
import { InterestT } from 'presentation/component/page/signup';
import Actions, { ActionsT } from 'presentation/component/page/discover/Actions';
import {
    Wrapper,
    Image,
    Name,
    Content,
    Description,
    OuterWrapper,
    InfoWrapper,
    ActionsWrapper,
    SubHeader,
    Interest,
    InterestsWrapper,
    Text,
} from './styles';

type PropsT = ActionsT & {
    src: string;
    name: string;
    age: number;
    description: string;
    showFull: boolean;
    interests: InterestT[];
};

const truncate = (input: string) => input.length > 20 ? `${input.substring(0, 20)}...` : input;

const Slide: FC<PropsT> = (props) => {
    const {
        src,
        age,
        name,
        description,
        showFull,
        interests,
        rate,
        onMoreClick,
    } = props;

    return (
        <OuterWrapper>
            <Wrapper>
                <Image src={src} />
                {!showFull && (
                    <Content>
                        <Name>
                            {name}, {age}
                        </Name>
                        <Description>{truncate(description)}</Description>
                    </Content>
                )}
            </Wrapper>
            {showFull && (
                <InfoWrapper>
                    <ActionsWrapper>
                        <Actions
                            onMoreClick={onMoreClick}
                            rate={rate}
                        />
                    </ActionsWrapper>
                    <Name>
                        {name}, {age}
                    </Name>
                    <SubHeader>About</SubHeader>
                    <Text>
                        {description}
                    </Text>
                    <SubHeader>Interests</SubHeader>
                    <InterestsWrapper>
                        {interests &&
                            interests.map((interest) => (
                                <Interest key={interest.id}>{interest.text}</Interest>
                            ))}
                    </InterestsWrapper>
                </InfoWrapper>
            )}
        </OuterWrapper>
    );
};

export default Slide;
