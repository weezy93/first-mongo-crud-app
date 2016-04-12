var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtworkSchema = new Schema ({
  currentLocation: String,
  name: String,
  year: Number,
  image: String
});

var Artwork = mongoose.model('artwork', ArtworkSchema);

Artwork.find({}, function (err, artworks) {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Artwork:', artworks);
  }
});
