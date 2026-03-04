const express = require('express');
const Url = require('../models/url');
const { createShortUrl, getshortIDdata, getAnalysis } = require('../controllers/url');
const router = express.Router();


router.post('/', createShortUrl);
router.get('/:shortId',getshortIDdata);
router.get('/analysis/:shortId',getAnalysis);
module.exports = router;
