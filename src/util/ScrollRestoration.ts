import { NextRouter } from 'next/router';
import getPageHeight from 'helper/browser/getPageHeight';

type RouteScrollPosition = {
    scrollX: number;
    scrollY: number;
    scrollHeight: number;
};

export abstract class ScrollRestorationT {
    routesScrollPositions: RouteScrollPosition[] = [];

    lastRoute: RouteScrollPosition | null = null;

    constructor(protected Router: NextRouter) {}

    public abstract init(): void;

    public abstract destroy(): void;
}

export default class ScrollRestoration extends ScrollRestorationT {
    init() {
        this.Router.events.on('routeChangeStart', this.pushCurrentRouteInfo);
        this.Router.beforePopState(this.setScrollPosition);
        this.Router.events.on('routeChangeComplete', this.fixScrollPosition);
    }

    destroy() {
        this.Router.events.off('routeChangeStart', this.pushCurrentRouteInfo);
        this.Router.events.off('routeChangeComplete', this.fixScrollPosition);
    }

    pushCurrentRouteInfo = (): void => {
        const { scrollX, scrollY } = window;
        const scrollHeight = getPageHeight();

        this.routesScrollPositions.push({
            scrollX,
            scrollY,
            scrollHeight,
        });
    };

    setScrollPosition = (): boolean => {
        this.lastRoute = this.routesScrollPositions.pop() || null;

        return true;
    };

    fixScrollPosition = (): void => {
        if (this.lastRoute) {
            const { scrollX, scrollY, scrollHeight } = this.lastRoute;
            const scrollYPosition = getPageHeight() < scrollHeight ? 0 : scrollY;

            window.requestAnimationFrame(() => {
                window.scrollTo(scrollX, scrollYPosition);
            });

            this.lastRoute = null;
        }
    };
}
