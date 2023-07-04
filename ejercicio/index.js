import readline from 'node:readline';
import {convertirDolaresAEuros,convertirDolaresALibras} from './conversor.js';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Ingresa un dato: ', (dolar) => {
    readline.cursorTo(process.stdout,0,1);
    readline.clearScreenDown(process.stdout);
    console.log('Has ingresado:', dolar);
    console.log("convertir a euro "+convertirDolaresAEuros(dolar));
    console.log("convertir a libra "+convertirDolaresALibras(dolar));
    rl.close();
});