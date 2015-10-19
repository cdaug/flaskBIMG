function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


var TICTACTOE = (function() {

  $(document).keydown(function (e) {
      if (e.keyCode == 82) {
        window.location.reload(true);
      }
    });

  var Evt = new EventEmitter2();

  var square1, square2, square3, square4, square5, square6, square7, square8, square9, msgBoard, checkedSquare, gameBoard_el, gameBoard, coordinateY, coordinateX, computerSquare, move, computerWinMessage;

  computerWinMessage = "The Computer Wins! That was expected so much, I was loaded ahead of time to say this.";
  move = "playerOne";
  square1 = $('.square1');
  square2 = $('.square2');
  square3 = $('.square3');
  square4 = $('.square4');
  square5 = $('.square5');
  square6 = $('.square6');
  square7 = $('.square7');
  square8 = $('.square8');
  square9 = $('.square9');
  gameBoard_el = $('#gameBoard');

  gameBoard = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]]
  ]

  msgBoard = $('.messageboard');
  msgBoard.text("Welcome to Tic Tac Toe. To begin, click a square.");

  function computerMove() {
    //Computer AI. It will block player one from winning 9/10. If it can't block anyone it places a square randomly.
    //Blocking Corners
    if (gameBoard[0][0] === "X" && gameBoard[0][1] === "X" && gameBoard[0][2] !== "O" && gameBoard[0][2] !== "X" || gameBoard[2][2] === "X" && gameBoard[1][2] === "X" && gameBoard[0][2] !== "O" && gameBoard[0][2] !== "X" || gameBoard[2][0] === "X" && gameBoard[1][1] === "X" && gameBoard[0][2] !== "O" && gameBoard[0][2] !== "X") {
      console.log("Computer: Took Square 3");
      computerSquare = square3;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[0][1] === "X" && gameBoard[0][2] === "X" && gameBoard[0][0] !== "O" && gameBoard[0][0] !== "X" || gameBoard[2][0] === "X" && gameBoard[1][0] === "X" && gameBoard[0][0] !== "O" && gameBoard[0][0] !== "X" || gameBoard[2][2] === "X" && gameBoard[1][1] === "X" && gameBoard[0][0] !== "O" && gameBoard[0][0] !== "X") {
      console.log("Computer: Took Square 1");
      computerSquare = square1;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[0][0] === "X" && gameBoard[1][0] === "X" && gameBoard[2][0] !== "O" && gameBoard[2][0] !== "X" || gameBoard[2][2] === "X" && gameBoard[2][1] === "X" && gameBoard[2][0] !== "O" && gameBoard[2][0] !== "X" || gameBoard[0][2] === "X" && gameBoard[1][1] === "X" && gameBoard[2][0] !== "O" && gameBoard[2][0] !== "X") {
      console.log("Computer: Took Square 7");
      computerSquare = square7;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[0][0] === "X" && gameBoard[1][1] === "X" && gameBoard[2][2] !== "O" && gameBoard[2][2] !== "X" || gameBoard[0][2] === "X" && gameBoard[1][2] === "X" && gameBoard[2][2] !== "O" && gameBoard[2][2] !== "X" || gameBoard[2][0] === "X" && gameBoard[2][1] === "X" && gameBoard[2][2] !== "O" && gameBoard[2][2] !== "X") {
      console.log("Computer: Took Square 9");
      computerSquare = square9;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    //Blocking Middles
    else if (gameBoard[0][0] === "X" && gameBoard[2][0] === "X" && gameBoard[1][0] !== "O" && gameBoard[1][0] !== "X" || gameBoard[1][2] === "X" && gameBoard[1][1] === "X" && gameBoard[1][0] !== "O" && gameBoard[1][0] !== "X") {
      console.log("Computer: Took Square 4");
      computerSquare = square4;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[0][2] === "X" && gameBoard[2][2] === "X" && gameBoard[1][2] !== "O" && gameBoard[1][2] !== "X" || gameBoard[1][0] === "X" && gameBoard[1][1] === "X" && gameBoard[1][2] !== "O" && gameBoard[1][2] !== "X") {
      console.log("Computer: Took Square 6");
      computerSquare = square6;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[2][0] === "X" && gameBoard[2][2] === "X" && gameBoard[2][1] !== "O" && gameBoard[2][1] !== "X" || gameBoard[0][1] === "X" && gameBoard[1][1] === "X" && gameBoard[2][1] !== "O" && gameBoard[2][1] !== "X") {
      console.log("Computer: Took Square 8");
      computerSquare = square8;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[0][0] === "X" && gameBoard[0][2] === "X" && gameBoard[0][1] !== "O" && gameBoard[0][1] !== "X" || gameBoard[2][1] === "X" && gameBoard[1][1] === "X" && gameBoard[0][1] !== "O" && gameBoard[0][1] !== "X") {
      console.log("Computer: Took Square 2");
      computerSquare = square2;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    //Begin Actual Moves
    //Computer AI for moving without blocking player one. It hardly ever gets fired but when it does, it needs to be here.
    else if (gameBoard[1][1] !== "X" && gameBoard[1][1] !== "O") {
      console.log("Computer: Took Square 5");
      computerSquare = square5;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[1][1] === "X" && gameBoard[1][1] !== "O" && gameBoard[2][2] !== "X" && gameBoard[2][2] !== "O") {
      console.log("Computer: Took Square 9");
      computerSquare = square9;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[0][2] !== "X" && gameBoard[0][2] !== "O") {
      console.log("Computer: Took Square 3");
      computerSquare = square3;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[1][0] !== "X" && gameBoard[1][0] !== "O") {
      console.log("Computer: Took Square 4");
      computerSquare = square4;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[1][2] !== "X" && gameBoard[1][2] !== "O") {
      console.log("Computer: Took Square 6");
      computerSquare = square6;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[0][1] !== "X" && gameBoard[0][1] !== "O") {
      console.log("Computer: Took Square 2");
      computerSquare = square2;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[2][0] !== "X" && gameBoard[2][0] !== "O") {
      console.log("Computer: Took Square 7");
      computerSquare = square7;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else if (gameBoard[2][1] !== "X" && gameBoard[2][1] !== "O") {
      console.log("Computer: Took Square 8");
      computerSquare = square8;
      move = "playerTwo";
      Evt.emit('updatedState', computerSquare);
    }
    else {
      msgBoard.text("No one wins! It's a tie! Good job, that's what almost everyone gets.");
      checkScore();
    }
  }

  function checkScore() {
    //player one is only able to win if they start in the corners and do the little trick thing were they win no matter what. so i'll check for that. There is another way for the player to win by going through the center. Never thought I would have to change winning conditions for the player, but it looks like I do.
    if (gameBoard[0][0] === "X" && gameBoard[0][1] === "X" && gameBoard[0][2] === "X") {
      msgBoard.text("Player One Wins! I must add this winning condition to my database... It is the first time it has happened!");
      Evt.removeAllListeners('updatedState');
    }
    else if (gameBoard[0][0] === "X" && gameBoard[1][0] === "X" && gameBoard[2][0] === "X") {
      msgBoard.text("Player One Wins! Huzzah!");
      Evt.removeAllListeners('updatedState');
    }
    else if (gameBoard[2][0] === "X" && gameBoard[2][1] === "X" && gameBoard[2][2] === "X") {
      msgBoard.text("Player One Wins! It's a miracle!");
      Evt.removeAllListeners('updatedState');
    }
    else if (gameBoard[0][2] === "X" && gameBoard[1][2] === "X" && gameBoard[2][2] === "X") {
      msgBoard.text("Player One Wins! That was completely unexpected!");
      Evt.removeAllListeners('updatedState');
    }
    else if (gameBoard[1][1] === "X" && gameBoard[0][1] === "X" && gameBoard[2][1] === "X" || gameBoard[1][1] === "X" && gameBoard[1][0] === "X" && gameBoard[1][2] === "X") {
      msgBoard.text("You have found one of the hardest to find win conditions. Congratulations. You are a true master of tic tac toe.");
      Evt.removeAllListeners('updatedState');
    }
    //player two check
    if (
      gameBoard[0][0] === "O" && gameBoard[0][1] === "O" && gameBoard[0][2] === "O" ||
      gameBoard[1][0] === "O" && gameBoard[1][1] === "O" && gameBoard[1][2] === "O" ||
      gameBoard[2][0] === "O" && gameBoard[2][1] === "O" && gameBoard[2][2] === "O" ||
      gameBoard[0][0] === "O" && gameBoard[1][0] === "O" && gameBoard[2][0] === "O" ||
      gameBoard[0][1] === "O" && gameBoard[1][1] === "O" && gameBoard[2][1] === "O" ||
      gameBoard[0][2] === "O" && gameBoard[1][2] === "O" && gameBoard[2][2] === "O" ||
      gameBoard[0][0] === "O" && gameBoard[1][1] === "O" && gameBoard[2][2] === "O" ||
      gameBoard[0][2] === "O" && gameBoard[1][1] === "O" && gameBoard[2][0] === "O"
    ) {
      msgBoard.text(computerWinMessage);
      Evt.removeAllListeners('updatedState');
    }
  }

  function updateSquareState(e) {
    checkedSquare = $(e.target);
    console.log(checkedSquare);
    console.log("Sent the square.");
    Evt.emit('updatedState', checkedSquare);
  }

  function updateViewedGameBoard(y) {
    if (move === "playerOne") {
      if (!y.hasClass("playerTwo") && !y.hasClass("playerOne")) {
        coordinateY = y.data("y");
        coordinateX = y.data("x");
        gameBoard[coordinateY][coordinateX] = "X";
        console.log(gameBoard);
        y.addClass("playerOne");
        y.attr("src", "static/img/tttX.png");
        msgBoard.text("Good move player one!");
        checkScore();
        computerMove();
      }
      else {
        msgBoard.text("Invalid Move! Someone has already captured that square!")
      }
    }
    else if (move === "playerTwo") {
      if (!y.hasClass("playerOne")) {
        coordinateY = y.data("y");
        coordinateX = y.data("x");
        gameBoard[coordinateY][coordinateX] = "O";
        console.log(gameBoard);
        y.addClass("playerTwo");
        y.attr("src", "static/img/tttO.png");
        move = "playerOne";
        checkScore();
      }
      else {
        msgBoard.text("Somehow the computer messed up and tried to capture your square. I'll fix that.");
        computerMove();
      }
    }
    else {
      msgBoard.text("FAILURE-- SOMETHING HORRIBLE HAPPENED");
      alert("Shutting Down Tic Tac Toe...");
      Evt.removeAllListeners('updatedState');
    }
  }

  function init() {
    gameBoard_el.on('click', updateSquareState);
    Evt.addListener('updatedState', updateViewedGameBoard);
  }

  return {
    init : init,
  };

})();

ready(TICTACTOE.init);
