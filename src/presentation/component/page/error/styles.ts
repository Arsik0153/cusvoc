import styled from '@emotion/styled';
import { mq } from 'constant/mediaqueries';

const Wrapper = styled.div`
    padding: 20px 48px;

    ${mq.lowerXs} {
        padding: 20px 15px;
    }
`;

export default Wrapper;
