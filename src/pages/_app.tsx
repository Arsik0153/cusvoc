import { enableStaticRendering } from 'mobx-react-lite';
import NextApp from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ErrorInfo } from 'react';
import ContainerFactory from 'container';
import isServer from 'helper/common/isServer';
import { withContainerContext } from 'presentation/context/Container';
import { Provider as ThemeProvider } from 'presentation/context/Theme';
import AppContainer from 'container/AppContainer';
import ErrorPage from 'pages/_error';
import Logger, { AdditionalInfoT } from 'util/Logger';
import { ScrollRestorationT } from 'util/ScrollRestoration';
import Layout from 'presentation/component/layout/Main';

enableStaticRendering(isServer());

const containerFactory = new ContainerFactory(AppContainer, 'app');

class App extends NextApp {
    private scrollRestoration?: ScrollRestorationT;

    private logError = (error: Error, additional?: AdditionalInfoT[]) => {
        Logger.error('Client side', Router.asPath, error, additional);
    };

    private handleErrorEvent = (e: ErrorEvent) => {
        const error = new Error(e.message);
        this.logError(error);

        return true;
    };

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        const additional = [
            {
                title: 'Components stack',
                value: errorInfo.componentStack,
            },
            {
                title: 'User agent',
                value: window.navigator.userAgent,
            },
        ];

        this.logError(error, additional);
        super.componentDidCatch(error, errorInfo);
    }

    public componentDidMount() {
        import('util/ScrollRestoration').then(({ default: ScrollRestoration }) => {
            this.scrollRestoration = new ScrollRestoration(Router);
            this.scrollRestoration.init();
        });
        window.addEventListener('error', this.handleErrorEvent, false);
        containerFactory.getInstance().getContext().appController.appInitialAction();
    }

    public componentWillUnmount() {
        window.removeEventListener('error', this.handleErrorEvent, false);

        if (this.scrollRestoration) {
            this.scrollRestoration.destroy();
        }
    }

    public render() {
        const {
            Component,
            pageProps: { error, ...pageProps },
        } = this.props;

        return (
            <>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=5"
                    />
                    <meta name="description" key="description" content="Description" />
                    <title>CygniFlight</title>
                </Head>
                <ThemeProvider>
                    <Layout>
                        {error ? (
                            <ErrorPage statusCode={error.statusCode} />
                        ) : (
                            <Component {...pageProps} />
                        )}
                    </Layout>
                </ThemeProvider>
            </>
        );
    }
}

export default withContainerContext(containerFactory, async (nextAppContext) => {
    const { appController } = containerFactory.getInstance().getContext();
    await appController.appPageAction(nextAppContext.ctx);

    return NextApp.getInitialProps(nextAppContext);
})(App);
