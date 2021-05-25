import { FC } from 'react';
import HttpStatusCode from 'enum/HttpStatusCode';
import Wrapper from './styles';

type PropsT = {
    statusCode: HttpStatusCode;
};

const ErrorPage: FC<PropsT> = (props: PropsT) => {
    const { statusCode } = props;
    const message =
        statusCode === HttpStatusCode.NotFound
            ? 'Страница не найдена или еще не создана'
            : 'Что-то пошло не так';

    return (
        <Wrapper>
            <h1>{message}</h1>
        </Wrapper>
    );
};

export default ErrorPage;
