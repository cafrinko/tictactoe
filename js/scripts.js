//business logic//
function Player (mark) {
  this.mark = mark;
}
function Space (horizontalCoordinate, verticalCoordinate, emptySquare) {
  this.horizontalCoordinate = horizontal;
  this.verticalCoordinate = vertical;
  this.emptySquare = [];
}
function Board (row, column) {
  this.row = row;
  this.column = column;
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
      forEach()
    } else {
      //populate the tic-tac-toe box with form fields that allow for only O user input
    }
    }
  });
});
