import {MongoClient} from 'mongodb';
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance =  await MongoClient.connect(url);   
        console.log("Connection established successfully");

        var db = dbInstance.db("octdb1");
        var data = await db.collection("Product").aggregate([{
                        $lookup:{
                            from:"Category",
                            foreignField:"cat_id",
                            localField:"category_id",
                            as:"Product Details"
                        }
                    }]).toArray();
        // console.log(data);

        for(var i=0;i<data.length;i++){
            console.log("\nname : ",data[i].name);
            console.log("price : ",data[i].price);
            console.log("quantity : ",data[i].quantity);
            console.log("category_id : ",data[i].category_id);
            console.log("category_name : ",data[i]['Product Details'][0].category_name);            
        
        }

    }catch(error){
        console.log("Error occured : ",error);
    }
} 
myFun();
