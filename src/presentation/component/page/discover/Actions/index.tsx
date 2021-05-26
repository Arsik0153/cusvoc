import React, { FC } from 'react';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import closeSvg from 'presentation/svg/close.svg?sprite';
import moreSvg from 'presentation/svg/more.svg?sprite';
import heartSvg from 'presentation/svg/heart.svg?sprite';
import { Wrapper, Default, Main, closeIconCss, starIconCss, heartIconCss } from './styles';

export type ActionsT = {
    onCloseClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onLikeClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMoreClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Actions: FC<ActionsT> = (props) => {
    const { onCloseClick, onMoreClick, onLikeClick } = props;

    return (
        <Wrapper>
            <Default onClick={onCloseClick}>
                <SvgSpriteIcon icon={closeSvg} css={closeIconCss} />
            </Default>
            <Main onClick={onLikeClick}>
                <SvgSpriteIcon icon={heartSvg} css={heartIconCss} />
            </Main>
            <Default onClick={onMoreClick}>
                <SvgSpriteIcon icon={moreSvg} css={starIconCss} />
            </Default>
        </Wrapper>
    );
};

export default Actions;
