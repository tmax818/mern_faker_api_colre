
const createUser = (f) => {
    const newUser = {
        _id: f.database.mongodbObjectId(),
        firstName: f.name.firstName(),
        lastName: f.name.lastName(),
        phoneNumber: f.phone.number(),
        password: f.internet.password(),
        email: f.internet.email(this.firstName, this.lastName)
    }
    return newUser;
}

module.exports = {createUser}