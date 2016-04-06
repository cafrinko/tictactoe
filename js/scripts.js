//business logic//
function Player (mark) {
  this.mark = mark;
  this.spaces = [];
}

function Game(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.currentPlayer = playerOne;
}

Game.prototype.switchPlayer = function () {
  if (this.currentPlayer === this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else {
    this.currentPlayer = this.playerOne;
  }
}

// switch player logic//
// var letter = "x";
//
// if (letter === "x") {
//   letter = "y";
// } else {
//   letter = "x";
// }

function Board (number) {
  var board = [];
  for (var x = 0; x <= number; x++);
    board.push([]);
    for (var y = 0; y <= number; y++);
      board.push([]);

      return board;
}

//user interface logic//
$(document).ready(function() {
  var playerOne = new Player("X"); //instantiate new instance of Player object
  var playerTwo = new Player("O");

  var newGame = new Game(playerOne, playerTwo);

  $("#gameBoard td").click(function(event) {
    var spaceId = $(this).attr('id');
    newGame.currentPlayer.spaces.push(spaceId);
    console.log(newGame.currentPlayer);
    console.log(newGame.currentPlayer.spaces);
    newGame.switchPlayer();
  });

  $("form.chooseXO").submit(function(event) {
    event.preventDefault();
  });
 });


//Ideas - Use if, if else statements to determine if game is won?
// 1- a player uses the select box to choose whether to be an X or O
// 2- hide select box once option is selected and display "You are X's (or O's)"
// 3- randomly let the computer start the game???
// 4- click on what box you want to mark and that displays your mark
// 5- keep track of what cells are marked, not allowing them to be re-marked
// 6- use for loop or arrays to calculate value of X or Y coordinates to sum value, with each X and Y value being its coordinate value
// 6b- win cells X values down a column = 3
// 6c- win cells Y values across a row = 3
// 6d- win if diagonal X or Y values = 3
//
