const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection("images");
        const images = await collection.find({page: event.queryStringParameters.page}).sort({$natural: -1}).toArray();
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({status: "success", data: images,}),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }