const functions = require("./functions");
const axios = require("axios");

const increment = x => functions.add(x, 10);

// console.log(functions.add(1, 1));

const getEmail = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(x => {
      //   console.log(x);
      return x.data;
    })
    .then(e => e.email)
    // .then(e => (email = `email is ${e}`))
    .catch(e => console.log(e));
};

module.exports = { getEmail, increment };
