# iTunes App
This app uses the [iTunes Store API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) to display the album information for one of my favorite music artists, [Lord Huron](https://music.apple.com/us/artist/lord-huron/393068687).

## About the App
This app was created to meet the front-end programming challenge at [SharpSpring](https://sharpspring.com/) as part of the interview process for the Software Engineer position. 

This app is created using:
* [iTunes Store API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
* [Node.js](https://nodejs.org/)
* [Express](http://expressjs.com/)
* [Axios](https://axios-http.com/)
* [React.js](https://reactjs.org/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
* [styled-components](https://styled-components.com/)

## How to Start the App
Note: You will need to have [Node.js](https://nodejs.dev/learn/how-to-install-nodejs) installed on your machine before you are able to run the app.

1. Navigate to \server, open Powershell, and run "npm install && node index.js" (or "npm install && nodemon index.js" if applicable)
2. Navigate to \client, open Powershell, and run "npm install && npm start"

## Features
Clicking on the album art or information will link you to the album's iTunes page.

This app works for all artists! You can update the artist ID using the "artistID" constant on line 28 of App.js. Other possible artists include:
  * Ed Sheeran: 183313439
  * JORIS: 951243051
  * OneRepublic: 260414340
  * LordHuron: 3930686870 (default artist)

## License
MIT License

Copyright (c) 2021 Ariel Walley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
