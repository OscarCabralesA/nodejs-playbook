const { v4:uuidv4 } = require('uuid')

class User {
    constructor(firstName, lastName, picture, phoneNumber, email, password) {
        this.id = uuidv4()
        this.firstName = firstName
        this.lastName = lastName
        this.picture = picture
        this.phoneNumber = phoneNumber
        this.email = email
        this.password = password
        this.googleAccount = ""
        this.facebookAccount = ""
    }
}

module.exports = User