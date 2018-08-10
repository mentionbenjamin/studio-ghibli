const Ghibli = require('./models/ghibli.js');


document.addEventListener('DOMContentLoaded', () => {

  console.log('Loaded, homie!');

  const ghibli = new Ghibli();
  ghibli.getData();

});
