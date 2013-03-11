var express = require('express');
var imageable = require('imageable');

// Create server
var app = express();

// Imagable config
var iConfig = {
  //secret: process.env.IMAGEABLE_SECRET || 'my-very-secret-secret',
  //magicHash: process.env.IMAGEABLE_HASH || 'magic',
  namespace: '',
  maxListeners: 512,
  imageSizeLimit: 2048,
  timeouts: {
    convert: 5000,
    identify: 500,
    download: 5000
  },
  whitelist: {
    allowedHosts: ['.*leg\.state\.mn\.us'],
    trustedHosts: ['.*leg\.state\.mn\.us']
  },
  keepDownloads: true,
  maxDownloadCacheSize: 500,
  tmpPathRoot: process.cwd() + '/tmp'
};

// Configure app
app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  
  app.use(imageable(iConfig, {
    before: function(stats) {
      console.log('before');
    },
    after: function(stats, returnValueOfBefore, err) {
      console.log('after');
    }
  }));
  
  app.use(app.router);
})

// Run server
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});