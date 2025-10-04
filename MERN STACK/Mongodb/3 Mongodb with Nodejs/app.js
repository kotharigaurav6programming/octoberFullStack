import http from 'http';
import fs from 'fs';
import url from 'url';
import qs from 'querystring';
import { MongoClient } from 'mongodb';
var mongoURL = "mongodb://127.0.0.1:27017/";

const instance = http.createServer(async (request, response) => {
    const requestedURL = url.parse(request.url, true);
    if (requestedURL.pathname == '/') {
        const data = fs.readFileSync("index.html");
        response.write(data);
        response.end();
    }
    else if (requestedURL.pathname == "/viewInfo") {
        const data = requestedURL.query;
        const dbInstance = await MongoClient.connect(mongoURL);
        const db = dbInstance.db("oct630");
        (await db.createCollection("user")).insertOne(data);
        console.log("Data inserted successfully");
        response.write("Data inserted successfully");
        response.end();
    }
    else if (requestedURL.pathname == "/viewInfoPost") {
        var chunkData = '';
        var data = '';
        request.on('data', (chunk) => {
            chunkData += chunk;
        });
        request.on('end', async () => {
            data = qs.parse(chunkData);
            console.log(data);

            const dbInstance = await MongoClient.connect(mongoURL);
            const db = dbInstance.db("oct630");
            await db.collection("user1").insertOne(data);

            console.log("Data inserted successfully");
            response.write("Data inserted successfully");
            response.end();
        });

    }

});

instance.listen(3000, () => {
    console.log("connection established successfully");
});