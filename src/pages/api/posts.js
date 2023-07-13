import connectMongoDB from "../../db/mongodb";
import Form from "../../models/form";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        await connectMongoDB();
        await Form.create(req.body);
        res.json(req.body);
        break;
      case "GET":
        const allPosts = await db.collection("posts").find({}).toArray();
        res.json({ status: 200, data: allPosts });
        break;
    }
  } catch(error) {
    return {status: 500, body: error.toString()}
  }
}