import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

//aca creamos el servidor 
const appExpress = express();
//let data = "";
// appExpress.use((req, res, next) => {
//     console.log("soy el portero gono");

//     req.on("data",(input)=>{
//         data += input;
//     });
//     req.on("end",()=>{
        
//         res.send();
//     })
//     next();
// });

// appExpress.use((req,res,next)=>{
//     console.log("hola bienvenido",data);
//     next();
// });
let validate = (req,res,next)=>{
    console.log("hola mundo");
    next();
}

appExpress.get("/campus",validate,(req,res)=>{
    //cuando es un query es con el ? y para el params es con el /
    console.log("data body");
    res.send();
});

let config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.host}:${config.port}`);
});

