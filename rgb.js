
const hsl = require('./hsl');
// if(array[2] == "rgb"){

// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }

// function rgbToHex(r, g, b) {
//   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }


// console.log(rgbToHex(parseInt(array[3]),parseInt(array[4]),parseInt(array[5])));
// }


// if(array[2] == "rgb"){

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

module.exports.rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



// console.log(rgbToHex(parseInt(array[3]),parseInt(array[4]),parseInt(array[5])));
// }