import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
var adminRouter = express.Router();

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename).replace("\\router","");
console.log(__dirname);

// router level middleware
adminRouter.use((request,response,next)=>{
    console.log("adminRouter executes");
    next();
});

adminRouter.get('/',(request,response)=>{
    response.sendFile(__dirname+'/adminHome.html');
});
adminRouter.get('/profile',(request,response)=>{
    response.sendFile(__dirname+'/adminProfile.html');
});
adminRouter.get('/viewList',(request,response)=>{
    response.sendFile(__dirname+'/adminViewList.html');
});


export default adminRouter;

