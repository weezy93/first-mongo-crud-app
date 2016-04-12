var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/artistsdb');

module.exports.Artist = require('./artists');
module.exports.Artwork = require('./artwork');
