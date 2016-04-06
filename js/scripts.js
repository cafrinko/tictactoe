//business logic//
function Player (mark) {
  this.mark = mark;
}
function Space (horizontalCoordinate, verticalCoordinate, emptySquare) {
  this.horizontalCoordinate = horizontal;
  this.verticalCoordinate = vertical;
  this.emptySquare = [];
}
function Board (row, column, diagonal) {
  this.row = row;
  this.column = column;
  this.diagonal = diagonal;
}
function Game (turn, win) {
  this.turn = turn;
  this.win = win;
}


//user interface logic//
$(document).ready(function() {
  $("form.chooseXO").submit(function(event) {
    event.preventDefault();
    var X = $("option#X").val();
    var O = $("option#O").val();
//if an x is selected and only 1 box selected at a time
    if $(".selectXO") === X) {
      //populate the tic-tac-toe box with form fields that allow for only x user input
      for()//use Space function (defined better with X and Y) with coordinates to populate a table cell with the x user selected
    } else {
      //populate the tic-tac-toe box with form fields that allow for only O user input
    }
    }
  });
});


//Ideas - Use if, if else statements to determine if game is won?
//1- a player uses the select box to choose whether to be an X or O
// 2- hide select box once option is selected and display "You are X's"
// 3- randomly let the computer start the game?
// 4- click on what box you want to mark and that displays your mark
// 5- keep track of what cells are marked, not allowing them to be re-marked
// 6- use for loop or arrays to calculate value of X or Y coordinates to sum value, with each X and Y value being its coordinate value
// 6b- win cells X values down a column = 3
// 6c- win cells Y values across a row = 3
// 6d- win if diagonal X or Y values = 3
