import styled from '@emotion/styled';
import { mq } from 'constant/mediaqueries';

const Wrapper = styled.div`
    min-height: calc(100vh - 99px);

    ${mq.lowerXs} {
        min-height: calc(100vh - 133px);
    }
`;

export default Wrapper;
