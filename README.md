# I Mage Proxerific

A simple image proxy server for MN legislature images.

## Examples

* http://localhost:5000/resize?size=200x200&url=http://www.house.leg.state.mn.us/hinfo/memberimgls88/53A.jpg
* http://localhost:5000/fit?size=200x200&url=http://www.house.leg.state.mn.us/hinfo/memberimgls88/53A.jpg
* (doesnt work?) http://localhost:5000/crop?crop=200x200+20+40&size=100x50&url=http://www.house.leg.state.mn.us/hinfo/memberimgls88/53A.jpg

## Hacks

Due to some oddities with mime lookup and connect, ```node-imageable``` is not setting mime type correctly.  This application is currently using a hacked version of ```node-imageable``` until the change is fixed upstream.  See this [pull request](https://github.com/sdepold/node-imageable/pull/17).

## Run Locally

* Ensure ImageMagick is installed.  (```brew install imagemagick```)
* ```npm install```
* ```node server.js```
* Visit one of the examples.

## Deployment on Heroku

* ```heroku create <app-name>```
* ```git push heroku master```
* ```heroku open```