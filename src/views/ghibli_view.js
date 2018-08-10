const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./detail_view.js');


const GhibliView = function (container) {
  this.container = container;
};


GhibliView.prototype.bindEvents = function () {
  PubSub.subscribe('Ghibli:data-loaded', (event) => {
    // received API data now loading all of it
    this.ghiblis = event.detail;
    // console.log(this.ghiblis);
    // method to render & display all of the API data
    this.render(this.ghiblis);
  });
};

GhibliView.prototype.render = function (ghiblis) {
  // from the API data get each element
  ghiblis.forEach((ghibli) => {
    // link to new view to deal with the individual details
    const detailView = new DetailView(this.container, ghibli);
    detailView.render();
  });
};




module.exports = GhibliView;
