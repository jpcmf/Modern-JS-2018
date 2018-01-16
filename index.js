// index.js
// var moment = require('moment');
import moment from 'moment'; //ES2015 import statement

console.log("Hello from JS");
console.log(moment().startOf('day').fromNow());

var name = "Joones",
    time = "today";
console.log(`Hello mister ${name}, how are you feeling ${time}?`);
