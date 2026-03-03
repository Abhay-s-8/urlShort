const mongoose = require("mongoose");

const urlSchems = new mongoose.Schema(
  {
    shortUrl: { type: String, unique: true },
    redirectUrl: { type: String, required: true },
    clicks: [{ Timestamp: { type: Number } }],
    lengthWanted: { type: Number, required: true },
  },
  { timestamps: true },
);

const Url = mongoose.model("url", urlSchems);

module.exports = Url;
