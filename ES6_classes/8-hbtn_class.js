export default class HolbertonClass {
    constructor(size, location) {
        if (typeof size !== 'number') {
            throw new TypeError('Size must be a number');
        }
        if (typeof location !== 'string') {
            throw new TypeError('Location must be a string');
        }
        this._size = size;
        this._location = location;
    }
    get size() {
        return this._size;
    }
    get location() {
        return this._location;
    }
    set size(newsize) {
        if (typeof newsize !== 'number') {
            throw new TypeError('Size must be a number');
        }
        this._size = newsize
    }
    set location(newlocation) {
        if (typeof newlocation !== 'string') {
            throw new TypeError('Location must be a string');
        }
        this._location = newlocation
    }
    valueOf() {
        return this._size;
    }
    toString() {
        return this._location;
    }
}
