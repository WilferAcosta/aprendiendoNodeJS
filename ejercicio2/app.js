import {createServer} from 'http'
import fs from 'fs';

const appHttp = createServer((req,res)=>{


    res.end();
});

const config = {
    hostname : '127.27.08.94',
    port : 3000
};
createServer(config,()=>{
    
});