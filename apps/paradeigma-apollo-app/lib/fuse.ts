import Fuse from 'fuse.js';

/**
 * Lazy instances of {@link Fuse} objects.
 */
export class LazyFuse<T> {
    private _fuse: Fuse<T> | undefined = undefined;

    constructor(private options: {
        listProvider: () => Promise<T[]>;
        fuseOptions?: Fuse.IFuseOptions<T>;
    }) {}

    async getFuse() {
        if (this._fuse === undefined) {
            const list = await this.options.listProvider();
            this._fuse = new Fuse(list, this.options.fuseOptions);
        }

        return this._fuse;
    }
}