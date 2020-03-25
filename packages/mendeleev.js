const data = require('../data.json');
console.log(data);
const getElementJson = (el) =>{
  data.forEach((item, i) => {
    if (item.name == el) return item;
    else return 'Not Found'
  });
}

module.exports.getElementJson = getElementJson;
