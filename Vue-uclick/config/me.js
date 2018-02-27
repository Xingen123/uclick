var name = 'hello  我是me.js';

function printName(){
    console.log(name);
}

function printFullName(firstName){
    console.log(firstName + name);
}

module.exports = {
    printName: printName,
    printFullName: printFullName
}