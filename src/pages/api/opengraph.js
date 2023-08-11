const og = require('open-graph');

export default function handler(req, res) {

    const url = req.query.url;
    let metaData;

    og(url, function (err, meta) {
    //console.log(meta);
    return res.status(200).json(meta);
    });

   // return res.status(200).json({metaData});
}