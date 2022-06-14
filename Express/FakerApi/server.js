const express = require("express");

const  faker  = require("faker");
const app = express();
const port = 8000;
class Company{
    constructor(id,name, address){
        this.id=id;
        this.name=name;
        this.address=address;

    }
}
class User{
    constructor(id,firstName, lastName , phoneNumber,password,email){
        this.id=faker.datatype.uuid();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.password=faker.internet.password();
        this.email= faker.internet.email();
    }
}



const createCompany = () => {
    const newCompany = new Company(
        faker.datatype.uuid(),
        faker.company.companyName(),
        {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    );
    return newCompany;
};


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.get("/api/users/new", (req, res) => {
    const newUser=new User();
    res.json( newUser );
});

app.get("/api/companies/new", (req, res) => {
    const newCompany=createCompany();
    res.json( newCompany );
});
app.get("/api/user/company", (req, res) => {
    const newCompany=createCompany();
    const newUser=new User();
    const arr=[newCompany,newUser]
    res.json( arr  );
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );