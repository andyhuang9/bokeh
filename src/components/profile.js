export default class Profile {
    constructor(name, desc, links, gear) {
        this.links = links;
        this.gear = gear
        this.name = name;
        this.desc = desc;
        this.likes = []
        this.matchList = []
    }
}