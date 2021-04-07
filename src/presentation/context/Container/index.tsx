import { NextPage } from 'next';
import NextApp from 'next/app';
import React, { ComponentType, createContext, useContext } from 'react';
import Container, { getContainerByName } from 'framework';
import ContainerFactory, { ContainerContextsT } from 'container';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetInitialPropsT = (ctx: any) => Promise<any>;

type ComponentT<P> = typeof NextApp | NextPage<P>;

const ContainerContext = createContext((undefined as unknown) as Container);

export function withContainerContext(
    containerFactory: ContainerFactory,
    getInitialProps?: GetInitialPropsT,
) {
    return function WithContainerContext<P>(Component: ComponentType<P>): ComponentT<P> {
        const PageWithContainerContext: ComponentT<P> = (props) => {
            const parentContainer = useContext(ContainerContext);
            const container = containerFactory.getInstance();

            // For root container variable `parentContainer` is `undefined`
            if (parentContainer) {
                container.setParent(parentContainer);
            }

            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                container.hydrateData(props.serializedData[container.name]);
            } catch {}

            return (
                <ContainerContext.Provider value={container}>
                    <Component {...props} />
                </ContainerContext.Provider>
            );
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        PageWithContainerContext.getInitialProps = async (ctx) => {
            const container = containerFactory.getInstance(true);

            if (ctx.container) {
                container.setParent(ctx.container);
            }

            if (ctx.ctx) {
                ctx.ctx.container = container;
            } else {
                ctx.container = container;
            }

            const initialProps = getInitialProps ? await getInitialProps(ctx) : {};

            return {
                ...initialProps,
                serializedData: {
                    [container.name]: container.serializeData(),
                },
            };
        };

        return PageWithContainerContext;
    };
}

type ContainerNameT = keyof ContainerContextsT;

export function useContainerContext<K extends ContainerNameT>(
    containerNames: K[],
): Pick<ContainerContextsT, K> {
    const currentContainer = useContext(ContainerContext);

    return containerNames.reduce((acc, containerName) => {
        const container = getContainerByName(currentContainer, containerName);

        if (!container) {
            throw new Error(
                `Cannot find container named ${containerNames}. Are you sure that one of the parent components was wrapped with 'withContainerContext(${containerNames}Container)' HOC?`,
            );
        }

        return {
            ...acc,
            [containerName]: container.getContext(),
        };
    }, {} as ContainerContextsT);
}
