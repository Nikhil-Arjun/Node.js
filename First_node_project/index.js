const axios = require("axios");
// console.log(axios);

async function fetch() {
  const response = await axios.get(
    "http://www.omdbapi.com/?i=tt3896198&apikey=c3b27799"
  );
  console.log(response.data);
}
fetch();
