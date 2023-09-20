var express = require('express');
var router = express.Router();

const Travel = require('../models/travels');

router.get('/', (req, res) => {
	Travel.find().then(data => {
		res.json({ travelShema: data });
	});
});












module.exports = router;
