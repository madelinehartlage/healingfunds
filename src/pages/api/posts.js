const { connectToDatabase } = require('../../db/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }

        case 'POST': {
          try {
            // connect to the database
            let { db } = await connectToDatabase();
            // add the post
            await db.collection('posts').insertOne(JSON.parse(req.body));
            // return a message
            return res.json({
                message: 'Post added successfully',
                success: true,
            });
        } catch (error) {
            // return an error
            return res.json({
                message: new Error(error).message,
                success: false,
            });
        }
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}