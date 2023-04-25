import axios from "axios";
import got from "got";

async function main () {
  const baseURL = "http://localhost:3001"
  const respAxios = axios.get(baseURL);
  const respGot = got(baseURL);
  try {
    const results = await Promise.all([
      respAxios, respGot
    ]);
    results.forEach(resp => {
      console.log(resp.data || resp.body);
    });
  } catch(err) {
    console.error(err)
  }
}

async function mainV2 () {
  const baseURL = "http://localhost:3001"
  try {
    const respAxios = await axios.get(baseURL);
    const respGot = await got(baseURL);
    
    console.log(respAxios.data);
    console.log(respGot.body);
  } catch(err) {
    console.error(err)
  }
}

// main()
//   .then(() => console.log("Done"))
//   .catch(console.error)

mainV2()
  .then(() => console.log("Done"))
  .catch(console.error)


// setInterval() // Utilizando el cliente de axios
// setInterval() // Utilizando el cliente de got