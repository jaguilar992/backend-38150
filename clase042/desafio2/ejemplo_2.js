import got from "got";

function getPokemon(id) {
  return got(`http:/localhost:8080/api/pokemon/${id}`);
}

const pokemon25 = getPokemon(25);
const pokemon5 = getPokemon(5);

const reqs = [pokemon5, pokemon25];

Promise.all(reqs)
  .then(resutls => {
    resutls.forEach(resp => {
      console.log(resp.body);
    })
  })
  .then(console.error)
;