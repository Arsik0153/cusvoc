import 'reflect-metadata';
import { Container as BaseContainer } from 'inversify';
import isServer from 'helper/common/isServer';
import Repository from 'framework/Repository';

export function getContainerByName(container: Container, name: string): Container | null {
    if (container.name === name) {
        return container;
    }

    if (container.parent) {
        return getContainerByName(container.parent, name);
    }

    return null;
}

export default abstract class Container<
    ContextT extends Record<string, unknown> = Record<string, unknown>,
    DataT extends Record<string, Repository> = Record<string, Repository>
> extends BaseContainer {
    public readonly name: string;

    public parent: Container | null = null;

    constructor(name: string) {
        super({
            autoBindInjectable: true,
            defaultScope: 'Singleton',
        });

        this.name = name;
        this.bindAll();
    }

    protected abstract getData(): DataT;

    public abstract bindAll(): void;

    public abstract getContext(): ContextT;

    public setParent(container: Container): void {
        this.parent = container;
    }

    public getParent(): Container | null {
        return this.parent;
    }

    public serializeData(): Record<keyof DataT, unknown> {
        const data = this.getData();

        return (Object.keys(data) as (keyof DataT)[]).reduce(
            (acc, key) => ({
                ...acc,
                [key]: data[key].serialize(),
            }),
            {} as Record<keyof DataT, unknown>,
        );
    }

    public hydrateData(dataSerialized: Record<keyof DataT, unknown>): void {
        if (isServer()) {
            return;
        }

        const data = this.getData();

        (Object.keys(data) as (keyof DataT)[]).forEach((key) => {
            data[key].hydrate(dataSerialized[key]);
        });
    }
}
