const Ghibli = require('./models/ghibli.js');
const GhibliView = require('./views/ghibli_view.js');


document.addEventListener('DOMContentLoaded', () => {

  console.log('Loaded, homie!');

  // selects the html container to hold all the data
  const ghibliContainer = document.querySelector('#ghibli-container');

  // receives and loads all API data ready to pass onto detailing
  const ghibliView = new GhibliView(ghibliContainer);
  ghibliView.bindEvents();

  // gets data from API
  const ghibli = new Ghibli();
  ghibli.getData();

});
