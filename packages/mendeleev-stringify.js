const mendeleev = require('./mendeleev');

const getElementString = (el) =>{
  const res = mendeleev.getElementJson(el);
  return `Name: ${res.name}, Number: ${res.number}, Weight: ${res.weight}`;
}

module.exports.getElementString = getElementString;
