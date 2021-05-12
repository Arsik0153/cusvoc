import React, { FC } from 'react';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import closeSvg from 'presentation/svg/close.svg?sprite';
import starSvg from 'presentation/svg/star.svg?sprite';
import heartSvg from 'presentation/svg/heart.svg?sprite';
import { Wrapper, Default, Main, closeIconCss, starIconCss, heartIconCss } from './styles';

const Actions: FC = () => {
    return (
        <Wrapper>
            <Default>
                <SvgSpriteIcon icon={closeSvg} css={closeIconCss} />
            </Default>
            <Main>
                <SvgSpriteIcon icon={heartSvg} css={heartIconCss} />
            </Main>
            <Default>
                <SvgSpriteIcon icon={starSvg} css={starIconCss} />
            </Default>
        </Wrapper>
    );
};

export default Actions;
