import { NextPageContext } from 'next';
import isServer from 'helper/common/isServer';

class NextContext {
    private ctx?: NextPageContext;

    public setContext(ctx: NextPageContext) {
        this.ctx = ctx;
    }

    public getContext(): NextPageContext | undefined {
        if (isServer()) {
            return this.ctx;
        }

        return undefined;
    }
}

export default new NextContext();
