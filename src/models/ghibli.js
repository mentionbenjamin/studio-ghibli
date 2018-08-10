const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const Ghibli = function () {
  this.ghiblis = [];
}

Ghibli.prototype.getData = function () {
  const url = 'https://ghibliapi.herokuapp.com/films';
  const request = new Request(url);
  request.get()
    .then((data) => {
      console.log(data);
      this.ghiblis = data;

      PubSub.publish('Ghibli:data-loaded', this.ghiblis);
    })
    .catch((error) => {
      console.error(error);
    })
};



module.exports = Ghibli;
