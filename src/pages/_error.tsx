import { NextPageContext } from 'next';
import Head from 'next/head';
import React from 'react';
import HttpStatusCode from 'enum/HttpStatusCode';
import ErrorPage from 'presentation/component/page/error';
import Logger from 'util/Logger';

interface Props {
    statusCode: HttpStatusCode;
}

export default class Error extends React.Component<Props> {
    private defaultProps = {
        statusCode: null,
    };

    public static async getInitialProps(ctx: NextPageContext) {
        const { req, res, err } = ctx;

        if (req) {
            Logger.error('Server side', req.url, err, [
                {
                    title: 'User agent',
                    value: req.headers['user-agent'],
                },
            ]);
        }

        if (res) {
            return { statusCode: res.statusCode };
        }

        return {
            statusCode: err ? err.statusCode : null,
        };
    }

    public render() {
        const { statusCode } = this.props;
        const message =
            statusCode === HttpStatusCode.NotFound ? 'Страница не найдена' : 'Что-то пошло не так';

        return (
            <>
                <Head>
                    <title>{message}</title>
                </Head>
                <ErrorPage statusCode={statusCode} />
            </>
        );
    }
}
