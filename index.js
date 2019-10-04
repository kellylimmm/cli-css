
const hex = require('./hex');
const rgb = require('./rgb');
const hsl = require('./hsl');

//HEX to RGB to HSL


array = process.argv;

console.log(hex.hexToRgb(array[2]));

if(array[2] === "rgb"){
    console.log(rgb.rgbToHex(parseInt(array[3]),parseInt(array[4]),parseInt(array[5])));
}

console.log(hsl.rgbToHsl(parseInt(array[3]),parseInt(array[4]),parseInt(array[5])));

// // set as red
// var r = 255;
// var b = 0;
// var g = 0;

// // this special console will create colored output
// console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, "hihihi");