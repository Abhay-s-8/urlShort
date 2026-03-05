const user1 = require("../models/url");
const nanoid = require("nanoid");

async function createShortUrl(req, res) {
  const details = req.body;
  const d = 0;
  const shortUrl = nanoid.nanoid(details.lengthWanted1);
  if (!details.Url) {
    res.status(404).render("home",{
        f:d,
    });
  } else {
    await user1.create({
      shortUrl: shortUrl,
      redirectUrl: details.Url.trim(),
      lengthWanted: details.lengthWanted1,
      clicks: [],
    });

    
    res.render("home",{
        shortid : shortUrl,
    });
  }
}

async function getshortIDdata(req, res) {
  const short = req.params.shortId;

  const redirect1 = await user1.findOneAndUpdate(
    { shortUrl: short },
    { $push: { clicks: { Timestamp: Date.now() } } },
    { new: true },
  );

  if (!redirect1) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(redirect1.redirectUrl.trim());
}
async function getAnalysis(req, res) {
  const short = req.params.shortId;
  const result = await user1.findOne({ shortUrl: short });
  res
    .status(202)
    .json({ total_clicks: result.clicks.length, analysis: `${result.clicks}` });
}

async function deleteID(req,res){
    const body = req.body;
    const short = body.shortUrl;
    const user = user1.findOneAndDelete({shortUrl : short});
    res.render("home");
}
module.exports = { createShortUrl, getshortIDdata, getAnalysis ,deleteID };
