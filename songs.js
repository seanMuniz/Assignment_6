/* ********* 

  songs.js

  The app's list of Songs.  Each song will be represented as an object, for example:

  { 
    id: "A1S1",
    artistId: "A1",
    title: "Burn",
    album: {name: "The Crow: Original Motion Picture Soundtrack", imageURL: "https://upload.wikimedia.org/wikipedia/en/7/72/The_Crow_soundtrack_album_cover.jpg"},
    year: "1994",
    duration: 398
  }

 ********* */

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

window.songs = [
  /* TODO */
  {
    id: "S1", 
    artistId: "A1", 
    title: "ANGOSTURA", 
    album: {name: "GABRIEL", imageURL: "https://images.genius.com/4f3c2796e4868784ce4a79b9043f4a64.1000x1000x1.png"}, 
    year: "2022", 
    duration: "2:51"
  },
  {
    id: "S2", 
    artistId: "A1", 
    title: "WESTSIDE", 
    album: {name: "GABRIEL", imageURL: "https://images.genius.com/4f3c2796e4868784ce4a79b9043f4a64.1000x1000x1.png"}, 
    year: "2022", 
    duration: "3:04"
  },
  {
    id: "S3", 
    artistId: "A1", 
    title: "LIMBO", 
    album: {name: "GABRIEL", imageURL: "https://images.genius.com/4f3c2796e4868784ce4a79b9043f4a64.1000x1000x1.png"}, 
    year: "2022", 
    duration: "3:32"
  }, 
  {
    id: "S4", 
    artistId: "A1", 
    title: "HELL/HEAVEN", 
    album: {name: "GABRIEL", imageURL: "https://images.genius.com/4f3c2796e4868784ce4a79b9043f4a64.1000x1000x1.png"}, 
    year: "2022", 
    duration: "2:40"
  }, 
  {
    id: "S5", 
    artistId: "A1", 
    title: "MILI", 
    album: {name: "GABRIEL", imageURL: "https://images.genius.com/4f3c2796e4868784ce4a79b9043f4a64.1000x1000x1.png"}, 
    year: "2022", 
    duration: "2:15"
  },
  {
    id: "S6", 
    artistId: "A1", 
    title: "less of you", 
    album: {name: "bandaids", imageURL: "https://i.scdn.co/image/ab67616d0000b2737941a79c3108cedb1667b68d"}, 
    year: "2020", 
    duration: "3:26"
  }, 
  {
    id:"S7", 
    artistId: "A1", 
    title: "alright", 
    album: {name: "bandaids", imageURL: "https://i.scdn.co/image/ab67616d0000b2737941a79c3108cedb1667b68d"}, 
    year: "2020", 
    duration: "2:48"
  }, 
  {
    id: "S8", 
    artistId: "A1", 
    title: "blue", 
    album: {name: "bandaids", imageURL:"https://i.scdn.co/image/ab67616d0000b2737941a79c3108cedb1667b68d"}, 
    year: "2020", 
    duration: "2:58"
  },
  {
    id: "S9", 
    artistId: "A1", 
    title: "right here", 
    album: {name: "bandaids", imageURL:"https://i.scdn.co/image/ab67616d0000b2737941a79c3108cedb1667b68d"}, 
    year: "2020", 
    duration: "3:15"
  }, 
  {
    id: "S10", 
    artistId: "A1", 
    title: "bandaids", 
    album: {name: "bandaids", imageURL:"https://i.scdn.co/image/ab67616d0000b2737941a79c3108cedb1667b68d"}, 
    year: "2020", 
    duration: "3:35"
  }, 
  {
    id: "S11", 
    artistId: "A2", 
    title: "girls like me don't cry", 
    album: {name: "girls like me don't cry", imageURL: "https://i.scdn.co/image/ab67616d0000b273bdcbd2a3317bdb308b5d1789"}, 
    year: "2022", 
    duration: "3:33"
  }, 
  {
    id: "S12", 
    artistId: "A2", 
    title: "u should feel special", 
    album: {name: "girls like me don't cry", imageURL: "https://i.scdn.co/image/ab67616d0000b273bdcbd2a3317bdb308b5d1789"}, 
    year: "2022", 
    duration: "2:37"
  }, 
  {
    id: "S13", 
    artistId: "A2",
    title: "chances", 
    album: {name: "i hope u see this", imageURL: "https://i.scdn.co/image/ab67616d0000b273cec183f5733a3aef9420b38a"}, 
    year: "2021", 
    duration: "2:47"
  }, 
  {
    id: "S14", 
    artistId: "A2", 
    title: "i hope u see this", 
    album: {name: "i hope u see this", imageURL: "https://i.scdn.co/image/ab67616d0000b273cec183f5733a3aef9420b38a"}, 
    year: "2021", 
    duration: "1:50"
  },
  {
    id: "S15", 
    artistId: "A2",
    title: "in my bag",  
    album: {name: "i hope u see this", imageURL: "https://i.scdn.co/image/ab67616d0000b273cec183f5733a3aef9420b38a"}, 
    year: "2021", 
    duration: "2:24"
  },
  {
    id: "S16", 
    artistId: "A3", 
    title: "SLOW DANCING IN THE DARK", 
    album: {name: "BALLADS 1", imageURL: "https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2"}, 
    year: "2018", 
    duration: "3:29"
  }, 
  {
    id: "S17", 
    artistId: "A3", 
    title: "TEST DRIVE", 
    album: {name: "BALLADS 1", imageURL: "https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2"}, 
    year: "2018", 
    duration: "2:59"
  }, 
  {
    id: "S18", 
    artistId: "A3", 
    title: "Glimpse of Us", 
    album: {name: "SMITHEREENS", imageURL: "https://i.scdn.co/image/ab67616d0000b273eaac2a7955f5b8967991cacb"}, 
    year: "2022", 
    duration: "3:53" 
  }, 
  {
    id: "S19", 
    artistId: "A3", 
    title: "Die For You", 
    album: {name: "SMITHEREENS", imageURL: "https://i.scdn.co/image/ab67616d0000b273eaac2a7955f5b8967991cacb"}, 
    year: "2022", 
    duration: "1:42"
  }, 
  {
    id: "S20", 
    artistId: "A3", 
    title: "Dissolve", 
    album: {name: "SMITHEREENS", imageURL: "https://i.scdn.co/image/ab67616d0000b273eaac2a7955f5b8967991cacb"}, 
    year: "2022", 
    duration: "2:57"
  }
];