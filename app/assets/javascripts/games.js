$(document).ready (function(){  
  if ($("body").attr("id") === "games"){
    try {
      var boardArray = JSON.parse( $("#game_board").first().val() );
    } catch(err) {
      var boardArray = ["","","","","","","","",""];
    }
    
    var currentPlayer = "X";
    
    refreshScreen();
    console.log("Board: " + boardArray);
  
    function swapPlayer (){
      if (currentPlayer === "X"){
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      $("#player").first().text(currentPlayer);
    }
  
    function markSquare (element){
      var myIndex = parseInt($(element).index());
    
      if (boardArray[myIndex] === ""){
        $(element).text(currentPlayer);
        boardArray[myIndex] = currentPlayer;
        swapPlayer();
      }
    }
    
    function refreshScreen (){
      $(".square").each(function () {
        console.log("board: " + boardArray);
        console.log($(this).index());
        console.log(boardArray[$(this).index()])
        if (boardArray[$(this).index()] === "X"){
          $(this).text("X");
        } else if (boardArray[$(this).index()] === "O"){
          $(this).text("O");
        } else {
          $(this).text("")
        }
      });
      console.log("board: " + boardArray)
    }
    
    function winner() {
      var winner = false;
    
      if (boardArray[0] !== "" && boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2]){
        winner = true;
      } else if (boardArray[3] !== "" && boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5]) {
        winner = true;
      } else if (boardArray[6] !== "" && boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8]) {
        winner = true;
      } else if (boardArray[0] !== "" && boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6]) {
        winner = true;
      } else if (boardArray[1] !== "" && boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7]) {
        winner = true;
      } else if (boardArray[2] !== "" && boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8]) {
        winner = true;
      } else if (boardArray[0] !== "" && boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]) {
        winner = true;
      } else if (boardArray[2] !== "" && boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6]) {
        winner = true;
      }
    
      return winner;
    }
  
    $(".square").on("click", function (){
      if ($("#game_won").first().prop('checked') !== true){
        markSquare(this);
    
        if (winner() === true) {
          swapPlayer();
          $("#player").first().text(currentPlayer + " WINS!");
          $("#game_board").first().val(JSON.stringify( boardArray ));
          $("#game_won").first().prop('checked', true);
          if ( currentPlayer === "X"){
            $("#game_winner").first().val("Player");
          } else {
            $("#game_winner").first().val("Computer");
          }
        }
      }
    });
  }
});