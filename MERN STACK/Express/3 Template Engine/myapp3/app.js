import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
var app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname+'/public'));

app.set("views","views");
app.set("view engine","ejs");

app.get('/',(request,response)=>{
    response.render('index.ejs');
});
app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});