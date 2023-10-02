import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let userdagen = parseFloat(await userInput.question('Geef het aantal dagen. '));
let useruren = parseFloat(await userInput.question('Geef het aantal uren. '));
let userminuten = parseFloat(await userInput.question('Geef het aantal minuten. '));
let userseconden = parseFloat(await userInput.question('Geef het aantal seconden. '));

let useruren1 = userdagen * 24 + useruren;
let userminuten1 = useruren1 * 60 + userminuten;
let userseconden1 = userminuten1 * 60 + userseconden;

console.log('Het aantal seconden is ' + userseconden1);

process.exit();