import Container from 'framework';
import AppController from 'presentation/controller/AppController';

// Override it
// eslint-disable-next-line @typescript-eslint/ban-types
type DataT = {};

// Override it
export type ContextT = {
    appController: AppController;
};

export default class AppContainer extends Container<ContextT, DataT> {
    // eslint-disable-next-line class-methods-use-this
    protected getData(): DataT {
        return {};
    }

    // eslint-disable-next-line class-methods-use-this
    public bindAll() {
        /**
         * Bind any abstract classes to its implementation
         *
         * @example
         *
         * this.bind(AbstractRepository).to(RepositoryImpl);
         */
    }

    public getContext(): ContextT {
        return {
            appController: this.get(AppController),
        };
    }
}
