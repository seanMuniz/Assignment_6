/* ********* 

  artists.js

  The app's list of Artists.  Each artist will be represented as an object, for example:

  { 
    id: "A1",
    name: "The Cure",
    links: [{url: "https://www.thecure.com", name: "Official Website" }, {url: "https://en.wikipedia.org/wiki/The_Cure" , name: "Wikipedia" }]
  }
/* ********* 

  BTI225 – Assignment 05

  I declare that this assignment is my own work in accordance with
  Seneca Academic Policy. No part of this assignment has been
  copied manually or electronically from any other source
  (including web sites) or distributed to other students.

  Please update the following with your information:

  Name:       Sean Muniz 
  Student ID: 102411188
  Date:       11 August 2023
 
********* */


window.artists = [
  /* TODO */
  {
    id: "A1", 
    name: "Keshi", 
    links: [
      {url:"https://www.keshimusic.com/#/", name: "Keshi Music"}, 
      {url:"https://en.wikipedia.org/wiki/Keshi_(singer)", name: "Keshi Wikipedia" }
    ]
  }, 
  {
    id: "A2", 
    name: "Thuy", 
    links: [
      {url: "https://www.thuymusic.com/", name: "Thuy Music"}, 
      {url: "https://en.wikipedia.org/wiki/Thuy_(singer)", name: "Thuy Wikipedia"}
    ]
  }, 
  {
    id: "A3", 
    name: "joji", 
    links: [
      {url: "https://en.wikipedia.org/wiki/Joji_(musician)", name: "Joji Wikipedia" }, 
      {url: "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq", name: "Joji Spotify"}
    ]
  }
];
