$(document).ready (function(){  
  if ($("body").attr("id") === "games"){
    try {
      var boardArray = JSON.parse( $("#game_board").first().val() );
    } catch(err) {
      var boardArray = ["","","","","","","","",""];
    }
    
    var currentPlayer = "X";
    
    refreshScreen();
  
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
        $("#game_board").first().val(JSON.stringify( boardArray ));
        if (winner(boardArray) !== true){
          swapPlayer();
          if (currentPlayer === "O"){
            comp_play();
          }
        }
      }
    }
    
    function comp_play(){
      var comp_position;
      // Try to win by adding a computer position
      comp_position = simulate("O");
      
      // Try to block by detecting where a player might play to win
      if (comp_position === undefined){
        comp_position = simulate("X");
      }
      
      if (comp_position === undefined){
        comp_position = random();
      }
      
      markSquare($(".square:nth-of-type(" + (comp_position + 1) + ")"));
    }
    
    function random(){
      for(var i=0; i<=8; i++){
        if (isOpen(i) === true){
          return i;
        }
      }
    }
    
    function simulate(player){
      var tmp_array = boardArray.slice(0);
      var position;
      
      for(var i=0; i<=8; i++){
        if ( isOpen(i) === true ){
          tmp_array[i] = player;
          if (winner(tmp_array) === true){
            position = i;
            break;
          } else {
            tmp_array[i] = "";
          }
        }
      }
      return position;
    }
    
    function isOpen(position){
      if (boardArray[position] === ""){
        return true;
      }
      return false;
    }
    
    
    function refreshScreen (){
      $(".square").each(function () {
        if (boardArray[$(this).index()] === "X"){
          $(this).text("X");
        } else if (boardArray[$(this).index()] === "O"){
          $(this).text("O");
        } else {
          $(this).text("")
        }
      });
    }
    
    function winner(myArray) {
      var winner = false;
    
      if (myArray[0] !== "" && myArray[0] === myArray[1] && myArray[1] === myArray[2]){
        winner = true;
      } else if (myArray[3] !== "" && myArray[3] === myArray[4] && myArray[4] === myArray[5]) {
        winner = true;
      } else if (myArray[6] !== "" && myArray[6] === myArray[7] && myArray[7] === myArray[8]) {
        winner = true;
      } else if (myArray[0] !== "" && myArray[0] === myArray[3] && myArray[3] === myArray[6]) {
        winner = true;
      } else if (myArray[1] !== "" && myArray[1] === myArray[4] && myArray[4] === myArray[7]) {
        winner = true;
      } else if (myArray[2] !== "" && myArray[2] === myArray[5] && myArray[5] === myArray[8]) {
        winner = true;
      } else if (myArray[0] !== "" && myArray[0] === myArray[4] && myArray[4] === myArray[8]) {
        winner = true;
      } else if (myArray[2] !== "" && myArray[2] === myArray[4] && myArray[4] === myArray[6]) {
        winner = true;
      }
    
      return winner;
    }
  
    $(".square").on("click", function (){
      if ($("#game_won").first().prop('checked') !== true){
        markSquare(this);
    
        if (winner(boardArray) === true) {
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