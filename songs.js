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
    duration: 171
  },
  {
    id: "S2", 
    artistId: "A1", 
    title: "WESTSIDE", 
    album: {name: "GABRIEL", imageURL: "https://images.genius.com/4f3c2796e4868784ce4a79b9043f4a64.1000x1000x1.png"}, 
    year: "2022", 
    duration: 184
  },
  {
    id: "S3", 
    artistId: "A1", 
    title: "LIMBO", 
    album: {name: "GABRIEL", imageURL: "https://images.genius.com/4f3c2796e4868784ce4a79b9043f4a64.1000x1000x1.png"}, 
    year: "2022", 
    duration: 212
  }, 
  {
    id: "S4", 
    artistId: "A1", 
    title: "HELL/HEAVEN", 
    album: {name: "GABRIEL", imageURL: "https://images.genius.com/4f3c2796e4868784ce4a79b9043f4a64.1000x1000x1.png"}, 
    year: "2022", 
    duration: 160
  }, 
  {
    id: "S5", 
    artistId: "A1", 
    title: "MILI", 
    album: {name: "GABRIEL", imageURL: "https://images.genius.com/4f3c2796e4868784ce4a79b9043f4a64.1000x1000x1.png"}, 
    year: "2022", 
    duration: 135
  },
  {
    id: "S6", 
    artistId: "A1", 
    title: "less of you", 
    album: {name: "bandaids", imageURL: "https://i.scdn.co/image/ab67616d0000b2737941a79c3108cedb1667b68d"}, 
    year: "2020", 
    duration: 206
  }, 
  {
    id:"S7", 
    artistId: "A1", 
    title: "alright", 
    album: {name: "bandaids", imageURL: "https://i.scdn.co/image/ab67616d0000b2737941a79c3108cedb1667b68d"}, 
    year: "2020", 
    duration: 168
  }, 
  {
    id: "S8", 
    artistId: "A1", 
    title: "blue", 
    album: {name: "bandaids", imageURL:"https://i.scdn.co/image/ab67616d0000b2737941a79c3108cedb1667b68d"}, 
    year: "2020", 
    duration: 178
  },
  {
    id: "S9", 
    artistId: "A1", 
    title: "right here", 
    album: {name: "bandaids", imageURL:"https://i.scdn.co/image/ab67616d0000b2737941a79c3108cedb1667b68d"}, 
    year: "2020", 
    duration: 195
  }, 
  {
    id: "S10", 
    artistId: "A1", 
    title: "bandaids", 
    album: {name: "bandaids", imageURL:"https://i.scdn.co/image/ab67616d0000b2737941a79c3108cedb1667b68d"}, 
    year: "2020", 
    duration: 215
  }, 
  {
    id: "S11", 
    artistId: "A2", 
    title: "Hold On, We're Going Home", 
    album: {name: "Nothing Was The Same", imageURL: "https://i.scdn.co/image/ab67616d0000b273a4dfa7122ec07fe3a1af22e7"}, 
    year: "2013", 
    duration: 227
  }, 
  {
    id: "S12", 
    artistId: "A2", 
    title: "From Time", 
    album: {name: "Nothing Was The Same", imageURL: "https://i.scdn.co/image/ab67616d0000b273a4dfa7122ec07fe3a1af22e7"}, 
    year: "2013", 
    duration: 322
  }, 
  {
    id: "S13", 
    artistId: "A2",
    title: "Since Way Back", 
    album: {name: "More Life", imageURL: "https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700"}, 
    year: "2017", 
    duration: 368
  }, 
  {
    id: "S14", 
    artistId: "A2", 
    title: "Preach", 
    album: {name: "If You're Reading This It's Too Late", imageURL: "https://i.scdn.co/image/ab67616d0000b2732090f4f6cc406e6d3c306733"}, 
    year: "2015", 
    duration: 236
  },
  {
    id: "S15", 
    artistId: "A2",
    title: "Crew Love",  
    album: {name: "Take Care", imageURL: "https://i.scdn.co/image/ab67616d0000b2737893285c1d43056deff72d0c"}, 
    year: "2011", 
    duration: 208
  },
  {
    id: "S16", 
    artistId: "A3", 
    title: "Instinct", 
    album: {name: "Nocturnal", imageURL: "https://i.scdn.co/image/ab67616d0000b273ba895f05221840751a45e3d5"}, 
    year: "2016", 
    duration: 174
  }, 
  {
    id: "S17", 
    artistId: "A3", 
    title: "Young Boy Problems", 
    album: {name: "Mixed Emotions", imageURL: "https://i.scdn.co/image/ab67616d0000b27373d1561893e79903e52179a4"}, 
    year: "2023", 
    duration: 169
  }, 
  {
    id: "S18", 
    artistId: "A3", 
    title: "Don't Love Me", 
    album: {name: "Mixed Emotions", imageURL: "https://i.scdn.co/image/ab67616d0000b27373d1561893e79903e52179a4"}, 
    year: "2023", 
    duration: 203
  }, 
  {
    id: "S19", 
    artistId: "A3", 
    title: "Say Less", 
    album: {name: "Say Less", imageURL: "https://i.scdn.co/image/ab67616d0000b273f4f51ec8be0e068eb819b0bc"}, 
    year: "2017", 
    duration: 187
  }, 
  {
    id: "S20", 
    artistId: "A3", 
    title: "Switch", 
    album: {name: "Waking At Dawn", imageURL: "https://i.scdn.co/image/ab67616d00001e023271a50cf6a0318f6a54f86c"}, 
    year: "2016", 
    duration: 201
  }
];