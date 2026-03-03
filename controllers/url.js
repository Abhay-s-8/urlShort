const user1 = require('../models/url');
const nanoid = require('nanoid');

async function createShortUrl(req, res) {
    const details = req.body;
    const shortUrl = nanoid.nanoid(details.lengthWanted);
    if(!details.redirectUrl) {res.status(404).json({message: "Redirect URL is required"});}
    else{
        await user1.create({
            shortUrl: shortUrl,
            redirectUrl: details.redirectUrl.trim(),
            lengthWanted: details.lengthWanted,
            clicks: [],
        });
        res.json({msg:`created short ID: ${shortUrl}`});
    }
}

async function getshortIDdata(req,res) {
    const short = req.params.shortId;
    const redirect1 = await user1.findOneAndUpdate({shortUrl : short},{
        $push:{clicks:{Timestamp : Date.now()}}
    })
    res.redirect(redirect1.redirectUrl.trim());
}

async function getAnalysis(req,res){
    const short = req.params.shortId;
    const result = await user1.findOne({shortUrl:short});
    res.status(202).json({total_clicks : result.clicks.length , analysis :`${result.clicks}`})
}
module.exports = {createShortUrl,getshortIDdata,getAnalysis};