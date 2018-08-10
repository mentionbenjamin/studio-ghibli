const PubSub = require('../helpers/pub_sub.js');




const DetailView = function (container, ghibli) {
  this.detailContainer = container;
  this.ghibli = ghibli;
};

DetailView.prototype.render = function () {
  // create h3 title
  const title = document.createElement('h3');
  // create UL container for list items
  const listContainer = document.createElement('ul');
  const director = document.createElement('li');
  const producer = document.createElement('li');
  title.textContent = this.ghibli.name;
  // console.log(this.ghibli.director);
  director.textContent = this.ghibli.director;
  producer.textContent = this.ghibli.producer;

  // adding list items to list container
  listContainer.appendChild(director);
  listContainer.appendChild(producer);

  this.detailContainer.appendChild(title);
  this.detailContainer.appendChild(listContainer);

};


module.exports = DetailView;
