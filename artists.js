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
    ], 
    backgroundImg: "https://i0.wp.com/fromtheintercom.com/wp-content/uploads/2018/10/keshi-prof-2.jpg?fit=%2C&ssl=1"
  }, 
  {
    id: "A2", 
    name: "Drake", 
    links: [
      {url: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4", name: "Drake Spotify"}, 
      {url: "https://en.wikipedia.org/wiki/Drake_(musician)", name: "Drake Wikipedia"}
    ], 
    backgroundImg: "https://img.buzzfeed.com/buzzfeed-static/static/2020-11/26/1/asset/3300af501692/sub-buzz-1116-1606353819-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto"
  }, 
  {
    id: "A3", 
    name: "Roy Woods", 
    links: [
      {url: "https://open.spotify.com/artist/7mDU6nMUJnOSY2Hkjz5oqM", name: "Roy Woods Spotify" }, 
      {url: "https://en.wikipedia.org/wiki/Roy_Woods", name: "Roy Woods Wikipedia"}
    ], 
    backgroundImg: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xNzI2NTQ1NC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcyOTc0NTg0NX0.Q-Ros-Gs4xzT2HTPxzQuXM9QDChInD_ToGCsqyR7z2s/img.jpg?width=980"
  }
];
