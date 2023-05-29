import User from "./User.js";
import Admin from "./Admin.js";
import Storage from "./Storage.js";



// creating an object of the class
const userOne = new User("Robert", "PHP DEV")
const userTwo = new User("Jack", "JS DEV")
const userThree = new User("Kevin", "Py DEV")

const adminOne = new Admin("Aref", "JS DEV", 261)
const adminTwo = new Admin("John", "Laravel DEV", 170)

Storage.save(userOne)
Storage.save(userTwo)
Storage.save(userThree)
Storage.save(adminOne)
Storage.save(adminTwo)

const result = Storage.getAll()
console.log("---- FP ----")
console.log(result);