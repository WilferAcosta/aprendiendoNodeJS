import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const expressApp = express();

expressApp.use(express.text());
expressApp.use(express.json());

expressApp.post('/campus/:nombre',(req,res)=>{

    let obj = {
        DATA : req.body,
        'URL-GET': req.query,
        PARAMENTROS: req.params
    }
    res.send(obj);
});

let config= JSON.parse(process.env.MY_CONFIG);

expressApp.listen(config,()=>{
    console.log(`servidor http://${config.host}:${config.port}/campus`);
});