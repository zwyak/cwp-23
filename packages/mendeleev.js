const data = require('../data.json');

const getElementJson = (el) =>{
  let res;
  for (var i = 0; i < data.length; i++) {
    if (data[i].name == el){
      return data[i];
    }
  }

  return 'NOT FOUND';
}

module.exports.getElementJson = getElementJson;
