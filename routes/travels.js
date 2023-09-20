var express = require('express');
var router = express.Router();

const Travel = require('../models/travels');

router.get('/', (req, res) => {
	Travel.find().then(data => {
		res.json({ departure, arrival: data });
	});
});

router.get("/:departure/:arrival", (req, res) => {
 	Travel.find({
	  departure: { $regex: new RegExp(req.params.departure, "i") },
	  arrival: { $regex: new RegExp(req.params.arrival, "i") },
	}).then(data => {
	  if (data) {
		res.json({ result: true, trips: data });
	  } else {
		res.json({ result: false, error: "No trip found." });
	  }
	});
  });














module.exports = router;
