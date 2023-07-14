
const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection("posts");
        const post = await collection.insertOne(event.body);
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({status: "sucess", data: post,}),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }
