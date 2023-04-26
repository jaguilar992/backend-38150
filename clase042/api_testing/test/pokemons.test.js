const axios = require("axios");
const assert = require("assert");
const supertest = require("supertest");
const expect = require("chai").expect;

const BASE_URL = "http://localhost:8080";

const supertestClient = supertest(BASE_URL)

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, 
  headers: {
    'Content-type': 'application/json'
  }
})


describe("Pruebas funcionales Pokemon API", () => {
  it ("Obtener la lista de pokemons", async()=>{
    const resp = await axiosInstance.get("/api/pokemon");
    const status = resp.status;
    assert.strictEqual(status, 200);
  })

  it("Crear un nuevo pokemon: Valida que no se agregan duplicados", async () => {
    const pokemon = {
      id: 1,
      name: "Bulbasaur",
      type: "Grass"
    }
    let resp;

    resp = await supertestClient
      .post("/api/pokemon")
      .send(pokemon)
    ;
    const EXPECTED_FAILURE_MESSAGE = "Pokemon already exists";
    const EXPECTED_STATUS = 409;

    assert.strictEqual(resp.status, EXPECTED_STATUS);
    assert.strictEqual(resp.body.message, EXPECTED_FAILURE_MESSAGE);
  });

  it ("Obtiene un pokemon segun el id", async () => {
    const id = 25;
    const EXPECTED_NAME = 'Pikachu'
    const EXPECTED_STATUS = 200;
    const resp = await supertestClient.get(`/api/pokemon/${id}`);

    expect(resp.status).to.eql(EXPECTED_STATUS);
    expect(resp.body)
      .to.include.keys('data')
      .to.be.a('object');
    expect(resp.body.data.name).to.eql(EXPECTED_NAME);

  })
})