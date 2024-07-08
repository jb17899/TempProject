import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app  = express();
app.get("/api",(req,res)=>{
    res.send({
        "json-value":"hey how are you?"
    });
});
app.listen(3000,(err)=>{
    if(err) throw err;
    console.log("server running perfectly on port 3000");
    
})