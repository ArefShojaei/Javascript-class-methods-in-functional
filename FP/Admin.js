import User from "./User.js"

const Admin = function(name, career, code) {
    User.call(this, name, career)
    this.code = code
}

Admin.prototype = new User()

export default Admin