const express = require('express');
const Url = require('../models/url');
const { createShortUrl, getshortIDdata, getAnalysis, deleteID } = require('../controllers/url');
const router = express.Router();


router.post('/', createShortUrl);
router.get('/:shortId',getshortIDdata);
router.get('/analysis/:shortId',getAnalysis);
router.post('/',deleteID);
module.exports = router;
