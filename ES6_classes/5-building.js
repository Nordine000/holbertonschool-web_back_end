export default class Building {
    constructor(sqft) {
        if (typeof sqft !== 'number') {
            throw new TypeError('Sqft must be a number');
        }
        this._sqft = sqft;
        if (this.constructor !== Building &&
            !this.constructor.prototype.hasOwnProperty('evacuationWarningMessage')) {
                throw new Error('Class extending Building must override evacuationWarningMessage');
            }
        }
    get sqft() {
        return this._sqft;
    }
    set sqft(newsqft) {
        if (typeof newsqft !== 'number') {
            throw new TypeError('Sqft must be a number');
        }
        this._sqft = newsqft;
}
}
