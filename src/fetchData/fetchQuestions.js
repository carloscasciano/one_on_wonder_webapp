/* http://localhost:3001/enus/questions.js */

const axios = require('axios');

const questionsData = axios.get('http://localhost:3001/enus/questions.json')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});


export default questionsData



