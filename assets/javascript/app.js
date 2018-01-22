$(document).ready(function() {

// initialize Firebase
  var config = {
    apiKey: "AIzaSyDsi_d8qmePYtwaC5U5wi8MA_Y8AKt36Xk",
    authDomain: "rps-multiplayer-942c0.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-942c0.firebaseio.com",
    projectId: "rps-multiplayer-942c0",
    storageBucket: "rps-multiplayer-942c0.appspot.com",
    messagingSenderId: "855685414315"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var playerRef = database.ref("/players");
  var gameRef = database.ref("/game");
  var playerName = "";
  var numberOfPlayers = 0;

// player 1 variables
var player1 = {
    name: "",
    wins: 0,
    losses: 0,
    ties: 0,
    player1Key: "",
    number: 0
  }

// player 2 variables
var player2 = {
    name: "",
    wins: 0,
    losses: 0,
    ties: 0,
    player2Key: "",
    exists: false
  }

var gameDetails = {
  player1: "",
  player2: "",
  gameKey: ""
}

 // hide buttons when there are 0 players registered -- MAY REMOVE THESE
$(".start-game").hide();
$(".join-game").hide();

// choices of rock, paper, or scissors
var choices = ["rock", "paper", "scissors"];

// on click function as players join the game
  $(".submit-name").on("click", function() {
    event.preventDefault();
    if (numberOfPlayers === 0) { // if it is the first player to join, add "player 1" details to firebase
        player1.name = $("#player-name").val().trim();
        var player1Details = {
          name: player1.name,
          key: ""
        };

        player1.name = playerName;
        // var key = playerRef.child(key).update({
        //   key: key
        // });
        // player1.player1Key = key;

        database.ref("/players").push ({
          player1: player1.name
        });

        // playerRef.child(key).onDisconnect().remove();
        numberOfPlayers++;
        $(".status-message").html("WAITING for 1 more player to join");


  } else if (numberOfPlayers === 1) { // if it is the second player to join, add "player 2" details to firebase
        player2.name = $("#player-name").val().trim();
        var player1Details = {
          name: player2.name,
          key: ""
        };
        player2.name = playerName;
        // var key = playerRef.child(key).update({
        //   key: key
        // });
        // player2.player2Key = key;
        database.ref("/players").push ({
          player1: player2.name
        });

        // playerRef.child(key).onDisconnect().remove();
        numberOfPlayers++;
        $(".start-game").show();
        console.log(player2.name);

  } else {
    $(".status-message").html("SORRY! There are already 2 people playing, come back again later"); // if 2 players are connected, alert that you can't play
  }

// PSEUDO CODE FOR THE REST OF THE game
// - need to greate a "game" object in firebase once there are 2 players connected, this will store the current wins, losses, and the current RPS choices for each round played
// - once 2 players are connected, a prompt will show up for each to select rock, paper, or scissors
// - once a selection is chosen for each round, a win, loss, or tie is determined -- this repeats until a player has 4 wins (best of 7 series)
// -
// -
// -

    // database.ref().on("value", function(snapshot){
    //   if (!snap.child("game").exists()) {
    //     $(".start-game").show();
    //   } else if (player.number < 2) {
    //     $(".join-game").show();
    //
    //     var gameSnapshot = snap.child("game").val();
    //     var gameSnapshotKeys = Object.keys(gameSnapshot);
    //     var prevIndex = gameSnapshotKeys.length - 1;
    //     var prevKey = gameSnapshotKeys[prevIndex];
    //     var prevObj = gameSnapshot[prevKey];
    //
    //   }
    //
    // });

});
});

// Create a game that suits this user story:
//
// Only two users can play at the same time.
// Both players pick either rock, paper or scissors. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.
// The game will track each players wins and losses.
// Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.
// Styling and theme are completely up to you. Get Creative!
// Deploy your assignment to Github Pages.
