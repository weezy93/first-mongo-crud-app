db.artistsdb.insert({
  artists: [{
        name: 'Bansky',
        movement: 'Social Commentary',
        image:
        'http://d2jv9003bew7ag.cloudfront.net/uploads/Banksy-%E2%80%93-Girl-And-Balloon-in-London-2002.jpg'
      }, {
        name: 'Claude Money',
        movement: 'Impressionist',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/440px-Claude_Monet_1899_Nadar_crop.jpg'
        }
]});

db.artistsdb.insert({ artwork: [{
    currentLocation: 'Broad Street, Newent',
    name: 'Monkey Queen',
    year: 2003,
    image: 'http://static.independent.co.uk/s3fs-public/thumbnails/image/2014/06/06/16/Monkey-Queen.jpg'
  },{
    currentLocation: "Musee d'Orsay",
    name: 'Poppy Field',
    year: 1890,
    image: 'http://www.artic.edu/aic/collections/citi/images/standard/WebLarge/WebImg_000267/185182_3187950.jpg'
  }]})
