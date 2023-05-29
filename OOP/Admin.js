import User from './User.js'

export default class Admin extends User {
    constructor(name, career, code) {
        super(name, career)
        this.code = code
    }
}