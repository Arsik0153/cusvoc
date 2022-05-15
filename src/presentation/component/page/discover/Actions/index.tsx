import React, { FC } from 'react';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import closeSvg from 'presentation/svg/close.svg?sprite';
import moreSvg from 'presentation/svg/more.svg?sprite';
import heartSvg from 'presentation/svg/heart.svg?sprite';
import { Wrapper, Default, Main, closeIconCss, starIconCss, heartIconCss } from './styles';

export type ActionsT = {
    rate: (action: number) => void;
    onMoreClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Actions: FC<ActionsT> = (props) => {
    const { onMoreClick, rate } = props;

    return (
        <Wrapper>
            <Default onClick={() => rate(0)}>
                <SvgSpriteIcon icon={closeSvg} css={closeIconCss} />
            </Default>
            <Main onClick={() => rate(1)}>
                <SvgSpriteIcon icon={heartSvg} css={heartIconCss} />
            </Main>
            <Default onClick={onMoreClick}>
                <SvgSpriteIcon icon={moreSvg} css={starIconCss} />
            </Default>
        </Wrapper>
    );
};

export default Actions;
