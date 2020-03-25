const mendeleev = require('./mendeleev-stringify');
const data = require('../data.json');

const getElements = () =>{
  data.forEach((item, i) => {
    console.log(mendeleev.getElementString(item.name));
  });
}

module.exports.getElements = getElements;

getElements()
