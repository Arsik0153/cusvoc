import { inject, injectable } from 'inversify';
import { NextPageContext as NextPageContextT } from 'next';
import BootAppClientSideUseCase from 'domain/interactor/BootAppClientSideUseCase';
import nextContext from 'util/NextContext';

@injectable()
export default class AppController {
    @inject(BootAppClientSideUseCase)
    private readonly bootAppClientSideUseCase!: BootAppClientSideUseCase;

    /**
     * Will be executed on initial load (server side) and on every page transition (client side)
     * */
    public appPageAction = async (ctx: NextPageContextT): Promise<void> => {
        nextContext.setContext(ctx);
    };

    /**
     * Will be executed only once on app did mount (client side)
     * */
    public appInitialAction = async (): Promise<void> => {
        await this.bootAppClientSideUseCase.execute();
    };
}
