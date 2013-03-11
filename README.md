# I Mage Proxerific

A simple image proxy server for MN legislature images.

## Examples

* http://localhost:5000/resize?size=200x200&url=http://www.house.leg.state.mn.us/hinfo/memberimgls88/53A.jpg
* http://localhost:5000/fit?size=200x200&url=http://www.house.leg.state.mn.us/hinfo/memberimgls88/53A.jpg
* (doesnt work?) http://localhost:5000/crop?crop=200x200+20+40&size=100x50&url=http://www.house.leg.state.mn.us/hinfo/memberimgls88/53A.jpg

## Run Locally

* Ensure ImageMagick is installed.  (```brew install imagemagick```)
* ```npm install```
* ```node server.js```
* Visit one of the examples.

## Deployment on Heroku

* ```heroku create <app-name>```
* ```git push heroku master```
* ```heroku open```