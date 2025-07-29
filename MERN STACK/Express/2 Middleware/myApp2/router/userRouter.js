import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
var userRouter = express.Router();

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename).replace("\\router","");
console.log(__dirname);

// router level middleware
userRouter.use((request,response,next)=>{
    console.log("userRouter executes");
    next();
});

userRouter.get('/',(request,response)=>{
    response.sendFile(__dirname+'/userHome.html');
});
userRouter.get('/profile',(request,response)=>{
    response.sendFile(__dirname+'/userProfile.html');
});
userRouter.get('/viewList',(request,response)=>{
    response.sendFile(__dirname+'/userViewList.html');
});


export default userRouter;