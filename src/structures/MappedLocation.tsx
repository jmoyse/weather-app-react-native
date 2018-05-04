
export default class MappedLocation {
    public zipcode: number = -1;
    public name: string = 'Undefined Location';
    public latitude: number = -1;
    public longitude: number = -1;
    public lastRefreshTime: Date = new Date();
    public key: String = (Math.random() * 1000).toString(); // TODO: this shouldn't be random

    constructor (zipcode: number) {
        this.zipcode = zipcode;
        this.key = zipcode.toString();
    }
}