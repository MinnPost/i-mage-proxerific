var express = require('express');

// We need a hacked version of imageable for now so
// that mime types are handled correctly.
//
// See https://github.com/sdepold/node-imageable/pull/17
var imageable = require('./node-imageable/index.js');

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
    allowedHosts: ['.*leg\.state\.mn\.us', '.*senate\.mn'],
    trustedHosts: ['.*leg\.state\.mn\.us', '.*senate\.mn']
  },
  keepDownloads: true,
  maxDownloadCacheSize: 500,
  tmpPathRoot: process.cwd() + '/tmp'
};

// Configure app
app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  
  // Imageable
  app.use(imageable(iConfig, {
    before: function(stats) {
    },
    after: function(stats, returnValueOfBefore, err) {
    }
  }));
  
  // Use router
  app.use(app.router);
})

// Run server
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});