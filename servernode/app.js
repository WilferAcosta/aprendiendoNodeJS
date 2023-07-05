import { createServer } from "http";
import fs from 'fs';
const appHttp = createServer(async(req,res)=>{
    if(req.url == "/"){
        let data = await (await fetch("http://127.10.10.10:5015/index.html")).text();
        console.log(data);
        res.end();
        
    }else if(req.url == "/home"){
        fs.readFile("./home.html","utf-8", (err, data)=>{
            res.end(data);
        })
    }else if(req.url == "./index.html"){
        res.end("pailas");
    }
});
const config = {
    hostname: "127.10.10.10",
    port: 5015
};
appHttp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});