import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som;
let verschil;
let product;
let deling;

let getal1 = 5;
let getal2 = 7;
som = getal1 + getal2;
verschil = getal1 - getal2;
product = getal1 * getal2;
deling = getal1 / getal2;

console.log('De Twee getallen zijn ' + getal1 + ' en ' + getal2 + '.');
console.log('De som van deze getallen is ' + som + '.');
console.log('Het verschil van deze getallen is ' + verschil + '.');
console.log('Het product van deze getallen is ' + product + '.');
console.log('De deling van deze getallen is ' + deling + '.');

process.exit();