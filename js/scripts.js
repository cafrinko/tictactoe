//business logic//
function Player (mark) { //takes new instances that were defined as variables in user interface logic//
  this.mark = mark;
  this.spaces = []; //empty array that is populated as players select a square//
}

function Game(playerOne, playerTwo) { //need to create constructor with playerOne and playerTwo to make Game.prototype.switchPlayer work without needing global variables//
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.currentPlayer = playerOne; //starts each game with playerOne starting and is used to switch players on alternating turns//
}

Game.prototype.switchPlayer = function () { //uses the if else function to switch players//
  if (this.currentPlayer === this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else {
    this.currentPlayer = this.playerOne;
  }
}

// function Board (number) { //unsure if this is needed or not???//
//   var board = [];
//   for (var x = 0; x <= number; x++);
//     board.push([]);
//     for (var y = 0; y <= number; y++);
//       board.push([]);
//
//       return board;
// }

//user interface logic//
$(document).ready(function() {
  var playerOne = new Player("X"); //instantiate a new instance of the Player object
  var playerTwo = new Player("O");

  var newGame = new Game(playerOne, playerTwo); //instantiate a new instance of the Game object

  $("#gameBoard td").one("click", function(event) {
    var spaceId = $(this).attr('id'); //using the table ID and each table cell ID to allow for click functions//
    newGame.currentPlayer.spaces.push(spaceId); //pushes the table cell value of clicked cell to current players array//
    $("#" + spaceId).text(playerOne.mark); //prints out X or O to game board//
    console.log(playerOne.mark);
    console.log(newGame.currentPlayer);
    // console.log(newGame.currentPlayer.spaces);
    // console.log(spaceId);
    newGame.switchPlayer(); //switches player to alternate turns//
    // newGame.currentPlayer.spaces.push(spaceId);
    // $("#" + spaceId).text(playerTwo.mark);
    // console.log(playerTwo.mark);

  });

  $("form.chooseXO").submit(function(event) {
    event.preventDefault();
  });
 });

//Mark the table with X or O
//Determine if there is a win
//Incorporate computer play
