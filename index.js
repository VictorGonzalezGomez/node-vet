//import funtions read and register
const { register, read} = require('./operations');
// adding data from console
const operation = process.argv.slice(2)[0];
const name = process.argv.slice(2)[1];
const age = process.argv.slice(2)[2];
const animal = process.argv.slice(2)[3];
const color = process.argv.slice(2)[4];
const illness = process.argv.slice(2)[5];
//condition to call the operation require
if(operation === "register"){
    register(name, age, animal, color, illness)
}
if(operation === "read"){
    read()
}
