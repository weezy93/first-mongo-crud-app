var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/artists', function (req, res, next) {
  db.Artist.find(function (err, artists) {
    res.render('artists', { title: 'Artists', artists: artists });
  });
});

router.get('/artwork', function (req, res, next) {
  db.Artwork.find(function (err, artwork) {
    console.log(artwork);
    res.render('artwork', { title: 'Artwork', artworks: artwork });
  });
});

module.exports = router;
