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

Game.prototype.win = function () {
  var winningArrays = [["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]];



  for (var row = 0; row < winningArrays.length; row++) {
    var winningArrays2 = winningArrays.toString();
    // console.log("start " + this.currentPlayer.spaces);
    console.log(winningArrays2);
    // console.log(this.currentPlayer);
    console.log(this.currentPlayer.spaces.toString());

    if (this.currentPlayer.spaces.toString() === winningArrays.toString()) {
      // console.log(this.currentPlayer.spaces);
      // console.log(this.playerOne.spaces);
      // console.log(this.playerTwo.spaces);
      alert("hi");
    }
  }
}


// function Board (number) { //unsure if this is needed or not???//
//   var number = 2;
//   var board = [];
//   for (var x = 0; x <= number; x++);
//     board.push([], [], []);
//     for (var y = 0; y <= number; y++);
//       board.push([], [], []);
//   return board;
//   console.log(board);
// }

//user interface logic//
$(document).ready(function() {
  var playerOne = new Player("X"); //instantiate a new instance of the Player object
  var playerTwo = new Player("O");

  var newGame = new Game(playerOne, playerTwo); //instantiate a new instance of the Game object


  $("#gameBoard td").one("click", function(event) {
    var spaceId = $(this).attr('id'); //using the table ID and each table cell ID to allow for click functions//
    newGame.currentPlayer.spaces.push(spaceId); //pushes the table cell value of clicked cell to current players array//
    newGame.win();
    if (newGame.currentPlayer === playerOne) {
      $("#" + spaceId).text(playerOne.mark); //prints out X or O to game board//
    } else {
      $("#" + spaceId).text(playerTwo.mark);
    }
    newGame.switchPlayer(); //switches player to alternate turns//



    // if (playerOne.mark)
  });

  $("form.chooseXO").submit(function(event) {
    event.preventDefault();
  });
 });


//Determine if there is a win
  //Remember to check for wins after each mark in either business or user interface
//Incorporate computer play
