import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let userGeboortejaar = parseFloat(await userInput.question('Wat is je geboorte jaar?: '));
let userToekmostjaar = parseFloat(await userInput. question('Kies een toekomstig jaar.: '));

let userleeftijd1 = userToekmostjaar - userGeboortejaar;
let userleeftijd2 = 1 + userleeftijd1;

console.log('In ' + userToekmostjaar + ' zal je ' + userleeftijd1 + ' of ' + userleeftijd2 + ' jaar oud zijn.');
process.exit();