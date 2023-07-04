import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el nombre\n",(nombre)=>{
    readline.cursorTo(process.stdout,0,1);
    readline.clearScreenDown(process.stdout);//limpia la linea y mantiene el enunciado
    console.log(`Data ${nombre}`);

    rl.question("Ingrese el edad\n",(edad)=>{
        readline.cursorTo(process.stdout,0,3);
        readline.clearScreenDown(process.stdout);//limpia la linea y mantiene el enunciado
        console.log(`Data ${edad}`);
        process.exit();
    });
});