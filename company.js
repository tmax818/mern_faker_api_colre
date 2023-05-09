
const createCompany = (f) => {
    const newCompany = {
        _id: f.database.mongodbObjectId(),
        name: f.company.name(),
        address: {
            street: f.address.street(),
            city: f.address.city(),
            state: f.address.state(),
            zipCode: f.address.zipCode(),
            country: f.address.country(),

        }
    }
    return newCompany;
}

module.exports = {createCompany}