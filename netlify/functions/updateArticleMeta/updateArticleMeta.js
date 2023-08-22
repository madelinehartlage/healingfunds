const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const eventBody = JSON.parse(event.body);
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection("articles");
        const article = await collection.updateOne({title: eventBody.title1}, {$set: {title: eventBody.title2, link: eventBody.link, imageData: eventBody.imageData}});
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({status: "success", data: article,}),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }