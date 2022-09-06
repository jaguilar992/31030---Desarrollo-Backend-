const request = require("supertest");
const {faker} = require("@faker-js/faker");
const mongoose = require("mongoose");

const baseURL = "http://localhost:3000";

let _id;
let name = faker.name.lastName();
let age = faker.datatype.number({min: 18, max: 40});

test("Insert user", async () => {
  const response = await request(baseURL)
    .post("/user")
    .send({nombre: name, edad: age})
    .set("Accept","application/json")
    .expect(200);
    
    console.log(response.body);
    _id = response.body._id;
    const objectId = mongoose.Types.ObjectId(_id);
    expect(mongoose.isValidObjectId(objectId)).toBeTruthy();
});