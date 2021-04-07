import Container from 'framework';
import isServer from 'helper/common/isServer';
import { ContextT as AppContainerContextT } from './AppContainer';

export default class ContainerFactory<C extends Record<string, unknown> = Record<string, unknown>> {
    private containerInstance?: Container<C>;

    constructor(
        private ContainerClass: { new (name: string): Container<C> },
        private name: keyof ContainerContextsT,
    ) {}

    public getInstance(reinitializeServerSide = false): Container<C> {
        if (!this.containerInstance || (isServer() && reinitializeServerSide)) {
            this.containerInstance = new this.ContainerClass(this.name);
        }

        return this.containerInstance;
    }
}

// Override it
export type ContainerContextsT = {
    app: AppContainerContextT;
};
