// immediately export a function that generates a string of random numbers and letters 
module.exports = () =>
    Math.floor((1 + Math.random()) * 0x1000)
    .toString(16)
    .substring(1);