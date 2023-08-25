const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const eventBody = JSON.parse(event.body);
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection("textFields");
        const textBoxField = await collection.updateOne({textBoxField: eventBody.oldTextBox}, {$set: {textBoxField: eventBody.textBoxField, fontSizeOp: eventBody.fontSizeOp, fontWeightOp: eventBody.fontWeightOp, textAlignOp: eventBody.textAlignOp, pageOp: eventBody.pageOp}});
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({status: "success", data: textBoxField,}),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }