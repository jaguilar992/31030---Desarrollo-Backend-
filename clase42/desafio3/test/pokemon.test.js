const assert = require("assert");
const chai = require("chai");
const supertest = require("supertest")
const expect = chai.expect
const agent = supertest("http://localhost:4000");

const {suma, resta} = require("../suma");

describe("Test Pokemon endpoints", () => {
  let pokemon;
  beforeEach(()=> {
    pokemon = {
      name: "MewTwo",
      type: "Pyscho",
      id: 151
    }
  });

  it ("Suma de dos numeros", () => {
    assert.equal(suma(2,2), 4);
  });

  it("Debe devolver resta", () => {
    assert.equal(resta(5,3), 2);
  });

  it("Deberia agregar un nuevo pokemon", async () => {
    const response = await agent.post("/pokemon")
      .send(pokemon);
    
    const body = response.body;
    expect(response.status).to.eql(200);
    expect(body).to.include.keys('name', 'type', 'id');
    expect(body.name).to.eql(pokemon.name);
  });
});