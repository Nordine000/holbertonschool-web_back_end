export default class Currency {
    constructor(code, name) {
        this._name = name
        this._code = code
    }
    get name() {
        return this._name;
    }
    set name(newname) {
        if (typeof newname !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = newname;
    }
        get code() {
        return this._code;
    }
    set code(newcode) {
        if (typeof newcode !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._code = newcode;
    }

    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}
