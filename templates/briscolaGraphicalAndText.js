$(function() {
  //reload function for quick reloads. Press 'R'
    $(document).keydown(function (e) {
        if (e.keyCode == 82) {
          window.location.reload(true);
        }
      });
    //select which version you want to play. Text or Graphical
    var whichVersion = prompt("Which version of the game would you like to play?\nAvailable-- Graphical or Text"),
    multiplayer = prompt("Would you like to play multiplayer?\nNot Supported in Graphical version."),
    msgBoard = $('.messageboard');
    msgBoard.text("Something failed, press 'R' to reload.");
    
  if (whichVersion === 'Graphical' | whichVersion === 'graphical' | whichVersion === 'Graphical ' | whichVersion === 'graphical ' | whichVersion === 'g') {
    msgBoard.text("I'm a helping message board! If you accidentally selected graphical you can restart at anytime by pressing 'R'. Have fun!");
      var cards = [
      {id: 1, suit: 'sw', name: 'aceofswords.png', rank: 10},
      {id: 2, suit: 'sw', name: 'twoswords.png', rank: 1},
      {id: 3, suit: 'sw', name: 'threeswords.png', rank: 9},
      {id: 4, suit: 'sw', name: 'fourswords.png', rank: 2},
      {id: 5, suit: 'sw', name: 'fiveswords.png', rank: 3},
      {id: 6, suit: 'sw', name: 'sixswords.png', rank: 4},
      {id: 7, suit: 'sw', name: 'sevenswords.png', rank: 5},
      {id: 8, suit: 'sw', name: 'knightofswords.png', rank: 6},
      {id: 9, suit: 'sw', name: 'jackofswords.png', rank: 7},
      {id: 10, suit: 'sw', name: 'kingofswords.png', rank: 8},
      {id: 11, suit: 'cl', name: 'aceofclubs.png', rank: 10},
      {id: 12, suit: 'cl', name: 'twoclubs.png', rank: 1},
      {id: 13, suit: 'cl', name: 'threeclubs.png', rank: 9},
      {id: 14, suit: 'cl', name: 'fourclubs.png', rank: 2},
      {id: 15, suit: 'cl', name: 'fiveclubs.png', rank: 3},
      {id: 16, suit: 'cl', name: 'sixclubs.png', rank: 4},
      {id: 17, suit: 'cl', name: 'sevenclubs.png', rank: 5},
      {id: 18, suit: 'cl', name: 'knightofclubs.png', rank: 6},
      {id: 19, suit: 'cl', name: 'jackofclubs.png', rank: 7},
      {id: 20, suit: 'cl', name: 'kingofclubs.png', rank: 8},
      {id: 21, suit: 'co', name: 'aceofcoins.png', rank: 10},
      {id: 22, suit: 'co', name: 'twocoins.png', rank: 1},
      {id: 23, suit: 'co', name: 'threecoins.png', rank: 9},
      {id: 24, suit: 'co', name: 'fourcoins.png', rank: 2},
      {id: 25, suit: 'co', name: 'fivecoins.png', rank: 3},
      {id: 26, suit: 'co', name: 'sixcoins.png', rank: 4},
      {id: 27, suit: 'co', name: 'sevencoins.png', rank: 5},
      {id: 28, suit: 'co', name: 'knightofcoins.png', rank: 6},
      {id: 29, suit: 'co', name: 'jackofcoins.png', rank: 7},
      {id: 30, suit: 'co', name: 'kingofcoins.png', rank: 8},
      {id: 31, suit: 'cu', name: 'aceofcups.png', rank: 10},
      {id: 32, suit: 'cu', name: 'twocups.png', rank: 1},
      {id: 33, suit: 'cu', name: 'threecups.png', rank: 9},
      {id: 34, suit: 'cu', name: 'fourcups.png', rank: 2},
      {id: 35, suit: 'cu', name: 'fivecups.png', rank: 3},
      {id: 36, suit: 'cu', name: 'sixcups.png', rank: 4},
      {id: 37, suit: 'cu', name: 'sevencups.png', rank: 5},
      {id: 38, suit: 'cu', name: 'knightofcups.png', rank: 6},
      {id: 39, suit: 'cu', name: 'jackofcups.png', rank: 7},
      {id: 40, suit: 'cu', name: 'kingofcups.png', rank: 8}
      ],
      whoseMove = 0,
      availableCards = _.shuffle(cards.slice(0)),
      PlayerOneCardOne = availableCards.pop(),
      PlayerOneCardTwo = availableCards.pop(),
      PlayerOneCardThree = availableCards.pop(),
      PlayerTwoCard = availableCards.pop(),
      trump = availableCards.pop(),
      playerOneTrump = "",
      playerTwoTrump = "",
      higherValue = [],
      higherValueTwo = [],
      scoreOne = 0,
      scoreTwo = 0, 
      Trump,
      button = $('#getCards'),
      cheats = 0,
      debugMode = 0;
      
      if (multiplayer === 'yes' | multiplayer === 'Yes') {
        multiplayer = 1;
        console.log("Multiplayer is turned on.");
      }
      else if (multiplayer === 'no' | multiplayer === 'No' | multiplayer === "") {
        multiplayer = 0;
        console.log("Multiplayer is turned off.");
      }
      
      if (multiplayer === 1) {
        var PlayerTwoCardOne = availableCards.pop(),
        PlayerTwoCardTwo = availableCards.pop(),
        PlayerTwoCardThree = availableCards.pop();
      }
      
      // Set Trump and display Player Scores
      Trump = $('.trump');
      $(Trump).velocity({'opacity': '-25'}, {duration: "slow"});
      $(Trump).velocity({'opacity': '1'}, {duration: "slow"});
      $(Trump).attr("src", "img/"+trump.name);
      $('.scoreOne').text("Player One's Score is: "+scoreOne);
      $('.scoreTwo').text("Player Two's Score is: "+scoreTwo);
      
      //Start the game
      button.on('click', function() {
        var card1, card2, card3, card4, card5, card6;
        $(this).velocity({'opacity': '-25'}, {duration: "slow"});
        msgBoard.text("Game is starting! You go first!");
        card1 = $('.card1');
        card2 = $('.card2');
        card3 = $('.card3');
        card4 = $('.card4');
        card5 = $('.card5');
        card6 = $('.card6');
        card1.attr("src", "img/"+PlayerOneCardOne.name);
        card2.attr("src", "img/"+PlayerOneCardTwo.name);
        card3.attr("src", "img/"+PlayerOneCardThree.name);
        if (multiplayer === 1) {
          card4.attr("src", "img/"+PlayerTwoCardOne.name);
          card5.attr("src", "img/"+PlayerTwoCardTwo.name);
          card6.attr("src", "img/"+PlayerTwoCardThree.name);
        }
        
        //Allow clicking on cards.
        card1.on('click', function() {
          $('.playerOnePlayerCard').attr("src", "img/blank.png");
          $('.playerTwoPlayerCard').attr("src", "img/blank.png");
          $(this).velocity({'opacity': '-25'}, {duration: "slow"});
          $('.playerOnePlayerCard').attr("src", "img/"+PlayerOneCardOne.name);
          $(this).velocity({'opacity': '1'}, {duration: "slow"});
          higherValue = PlayerOneCardOne.rank;
          playerOneTrump = PlayerOneCardOne.suit;
          PlayerOneCardOne = availableCards.pop();
          console.log("This card has been clicked.");
          if (PlayerOneCardOne === undefined) {
            $(this).attr("src", "img/backofbriscolacard.jpg");
          }
          else {
            $(this).attr("src", "img/"+PlayerOneCardOne.name);
            $(this).data('id', PlayerOneCardOne.id);
          }
          if (PlayerOneCardOne === undefined && PlayerOneCardTwo === undefined && PlayerOneCardThree === undefined) {
            endGame();
          }
          if (whoseMove === 1) {
            writeScore();
          }
          else if (whoseMove === 0) {
          computerMove();
          }
        });
        
        card2.on('click', function() {
          $('.playerOnePlayerCard').attr("src", "img/blank.png");
          $('.playerTwoPlayerCard').attr("src", "img/blank.png");
                  $(this).velocity({'opacity': '-25'}, {duration: "slow"});
          $('.playerOnePlayerCard').attr("src", "img/"+PlayerOneCardTwo.name);
          $(this).velocity({'opacity': '1'}, {duration: "slow"});
          higherValue = PlayerOneCardTwo.rank;
          playerOneTrump = PlayerOneCardTwo.suit;
          PlayerOneCardTwo = availableCards.pop();
          console.log("This card has been clicked.");
          if (PlayerOneCardTwo === undefined) {
            $(this).attr("src", "img/backofbriscolacard.jpg");
          }
          else {
            $(this).attr("src", "img/"+PlayerOneCardTwo.name);
            $(this).data('id', PlayerOneCardTwo.id);
          }
          if (PlayerOneCardOne === undefined && PlayerOneCardTwo === undefined && PlayerOneCardThree === undefined) {
            endGame();
          }
          if (whoseMove === 1) {
            writeScore();
          }
          else if (whoseMove === 0) {
          computerMove();
          }
        });
        
        card3.on('click', function() {
          $('.playerOnePlayerCard').attr("src", "img/blank.png");
          $('.playerTwoPlayerCard').attr("src", "img/blank.png");
          $(this).velocity({'opacity': '-25'}, {duration: "slow"});
          $('.playerOnePlayerCard').attr("src", "img/"+PlayerOneCardThree.name);
          $(this).velocity({'opacity': '1'}, {duration: "slow"});
          higherValue = PlayerOneCardThree.rank;
          playerOneTrump = PlayerOneCardThree.suit;
          PlayerOneCardThree = availableCards.pop();
          console.log("This card has been clicked.");
          if (PlayerOneCardThree === undefined) {
            $(this).attr("src", "img/backofbriscolacard.jpg");
          }
          else {
            $(this).attr("src", "img/"+PlayerOneCardThree.name);
            $(this).data('id', PlayerOneCardThree.id);
          }
          if (PlayerOneCardOne === undefined && PlayerOneCardTwo === undefined && PlayerOneCardThree === undefined) {
            endGame();
          }
          if (whoseMove === 1) {
            writeScore();
          }
          else if (whoseMove === 0) {
          computerMove();
          }
        });
        
        //Computer AI. In other words all it does is places a card. But at the same time it checks for game ending scenarios.
        function computerMove() {
          if (multiplayer === 1) {
            msgBoard.text("PlayerTwo's Turn");
            card4.on('click', function() {
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              $(this).velocity({'opacity': '-25'}, {duration: "slow"});
              $('.playerTwoPlayerCard').attr("src", "img/"+PlayerTwoCardOne.name);
              $(this).velocity({'opacity': '1'}, {duration: "slow"});
              higherValueTwo = PlayerTwoCardOne.rank;
              playerTwoTrump = PlayerTwoCardOne.suit;
              PlayerTwoCardOne = availableCards.pop();
              console.log("PlayerTwo's card has been clicked.");
              if (PlayerTwoCardOne === undefined) {
                $(this).attr("src", "img/backofbriscolacard.jpg");
              }
              else {
                $(this).attr("src", "img/"+PlayerTwoCardOne.name);
                $(this).data("id", PlayerTwoCardOne.id);
              }
              if (PlayerTwoCardOne === undefined && PlayerTwoCardTwo === undefined && PlayerTwoCardThree === undefined) {
                endGame();
              }
              if (whoseMove === 0) {
                writeScore();
              }
            });
            card5.on('click', function() {
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              $(this).velocity({'opacity': '-25'}, {duration: "slow"});
              $('.playerTwoPlayerCard').attr("src", "img/"+PlayerTwoCardTwo.name);
              $(this).velocity({'opacity': '1'}, {duration: "slow"});
              higherValueTwo = PlayerTwoCardTwo.rank;
              playerTwoTrump = PlayerTwoCardTwo.suit;
              PlayerTwoCardTwo = availableCards.pop();
              console.log("PlayerTwo's card has been clicked.");
              if (PlayerTwoCardTwo === undefined) {
                $(this).attr("src", "img/backofbriscolacard.jpg");
              }
              else {
                $(this).attr("src", "img/"+PlayerTwoCardTwo.name);
                $(this).data("id", PlayerTwoCardTwo.id);
              }
              if (PlayerTwoCardOne === undefined && PlayerTwoCardTwo === undefined && PlayerTwoCardThree === undefined) {
                endGame();
              }
              if (whoseMove === 0) {
                writeScore();
              }
            });
            card6.on('click', function() {
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              $(this).velocity({'opacity': '-25'}, {duration: "slow"});
              $('.playerTwoPlayerCard').attr("src", "img/"+PlayerTwoCardThree.name);
              $(this).velocity({'opacity': '1'}, {duration: "slow"});
              higherValueTwo = PlayerTwoCardThree.rank;
              playerTwoTrump = PlayerTwoCardThree.suit;
              PlayerTwoCardThree = availableCards.pop();
              console.log("PlayerTwo's card has been clicked.");
              if (PlayerTwoCardThree === undefined) {
                $(this).attr("src", "img/backofbriscolacard.jpg");
              }
              else {
                $(this).attr("src", "img/"+PlayerTwoCardThree.name);
                $(this).data("id", PlayerTwoCardThree.id);
              }
              if (PlayerTwoCardOne === undefined && PlayerTwoCardTwo === undefined && PlayerTwoCardThree === undefined) {
                endGame();
              }
              if (whoseMove === 0) {
                writeScore();
              }
            });
          }
          else if (multiplayer === 0) {
            if (whoseMove === 1) {
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              msgBoard.text("The Computer has moved first.");
              $('.playerTwoPlayerCard').attr("src", "img/"+PlayerTwoCard.name);
              higherValueTwo = PlayerTwoCard.rank;
              playerTwoTrump = PlayerTwoCard.suit;
              PlayerTwoCard = availableCards.pop();
            }
            else if (whoseMove === 0) {
              $('.playerTwoPlayerCard').attr("src", "img/"+PlayerTwoCard.name);
              higherValueTwo = PlayerTwoCard.rank;
              playerTwoTrump = PlayerTwoCard.suit;
              PlayerTwoCard = availableCards.pop();
              if (PlayerTwoCard === undefined) {
                if (PlayerOneCardOne === undefined && PlayerOneCardTwo === undefined && PlayerOneCardThree === undefined) {
                  endGame();
                }
                writeScore();
              }
              else {
                if (PlayerOneCardOne === undefined && PlayerOneCardTwo === undefined && PlayerOneCardThree === undefined) {
                  endGame();
                }
                writeScore();
              }
            }
          }
        }
        
        
        //Write the score down, settle trump disputes
        function writeScore() {
          console.log(higherValue);
          console.log(higherValueTwo);
          
          if (PlayerOneCardOne === undefined && PlayerOneCardTwo === undefined && PlayerOneCardThree === undefined) {
            endGame();
          }
          else {
            if (cheats === 1) {
              scoreOne += higherValue + higherValueTwo;
              whoseMove = 0;
              $('.scoreOne').text("Player One's Score is: "+scoreOne);
              $('.scoreTwo').text("Player Two's Score is: "+scoreTwo);
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              higherValue = 0;
              higherValueTwo = 0;
              msgBoard.text("You move first.");
            }
            else if (playerOneTrump === trump.suit) {
              scoreOne += higherValue + higherValueTwo;
              whoseMove = 0;
              $('.scoreOne').text("Player One's Score is: "+scoreOne);
              $('.scoreTwo').text("Player Two's Score is: "+scoreTwo);
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              higherValue = 0;
              higherValueTwo = 0;
              msgBoard.text("You move first.");
            }
            else if (playerTwoTrump === trump.suit) {
              scoreTwo += higherValue + higherValueTwo;
              whoseMove = 1;
              $('.scoreOne').text("Player One's Score is: "+scoreOne);
              $('.scoreTwo').text("Player Two's Score is: "+scoreTwo);
              console.log("Player Two had a trump");
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              higherValue = 0;
              higherValueTwo = 0;
              if (multiplayer === 0) {
                computerMove();
              }
            }
            else if (playerOneTrump === trump.suit && playerTwoTrump === trump.suit && higherValue > higherValueTwo) {
              scoreOne += higherValue + higherValueTwo;
              whoseMove = 0;
              $('.scoreOne').text("Player One's Score is: "+scoreOne);
              $('.scoreTwo').text("Player Two's Score is: "+scoreTwo);
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              higherValue = 0;
              higherValueTwo = 0;
              msgBoard.text("You move first.");
            }
            else if (playerOneTrump === trump.suit && playerTwoTrump === trump.suit && higherValueTwo > higherValue) {
              scoreTwo += higherValue + higherValueTwo;
              whoseMove = 1;
              $('.scoreOne').text("Player One's Score is: "+scoreOne);
              $('.scoreTwo').text("Player Two's Score is: "+scoreTwo);
              console.log("Player Two had a trump that was higher");
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              higherValue = 0;
              higherValueTwo = 0;
              if (multiplayer === 0) {
                computerMove();
              }
            }
            else if (higherValue > higherValueTwo) {
              scoreOne += higherValue + higherValueTwo;
              whoseMove = 0;
              $('.scoreOne').text("Player One's Score is: "+scoreOne);
              $('.scoreTwo').text("Player Two's Score is: "+scoreTwo);
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              higherValue = 0;
              higherValueTwo = 0;
              msgBoard.text("You move first.");
            }
            else if (higherValueTwo > higherValue) {
              scoreTwo += higherValue + higherValueTwo;
              whoseMove = 1;
              $('.scoreOne').text("Player One's Score is: "+scoreOne);
              $('.scoreTwo').text("Player Two's Score is: "+scoreTwo);
              $('.playerOnePlayerCard').attr("src", "img/blank.png");
              $('.playerTwoPlayerCard').attr("src", "img/blank.png");
              higherValue = 0;
              higherValueTwo = 0;
              if (multiplayer === 0) {
                computerMove();
              }
            }
          }
        }
        
        // End the game and ask if the player wants to play again.
        function endGame() {
          if (scoreOne > scoreTwo) {
            var playAgain = prompt("Player One Wins with the score being-\nPlayerOne: "+scoreOne+"\nPlayerTwo: "+scoreTwo+"\nPlay again?");
            if (playAgain === 'Yes' | playAgain === 'yes') {
              window.location.reload(false);
            }
            else if (playAgain === 'No' | playAgain === 'no') {
              window.location.close;
            }
          }
          else if (scoreOne < scoreTwo) {
            playAgain = prompt("Player Two Wins with the score being-\nPlayerOne: "+scoreOne+"\nPlayerTwo: "+scoreTwo+"\nPlay again?");
            if (playAgain === 'Yes' | playAgain === 'yes') {
              window.location.reload(false);
            }
            else if (playAgain === 'No' | playAgain === 'no') {
              window.location.close;
            }
          }
          else {
            playAgain = prompt("No one Wins with the score being-\nPlayerOne: "+scoreOne+"\nPlayerTwo: "+scoreTwo+"\nPlay again?");
            if (playAgain === 'Yes' | playAgain === 'yes') {
              window.location.reload(false);
            }
            else if (playAgain === 'No' | playAgain === 'no') {
              window.location.close;
            }
          }
        }
        
        //Random things that don't effect gameplay
        $(document).keydown(function (e) {
          if (e.keyCode == 39) {
            if (cheats === 1) {
              msgBoard.text("Wow... Just wow. Player One has CHEATED!!! (For the wrong person)");
              scoreTwo += 100;
              $('.scoreTwo').text("Player Two's Score is: "+scoreTwo);
            }
          }
        });
        
        $(document).keydown(function (e) {
          if (e.keyCode == 37) {
            if (cheats === 1) {
              msgBoard.text("Wow... Just wow. Player One has CHEATED!!!");
              scoreOne += 100;
              $('.scoreOne').text("Player One's Score is: "+scoreOne);
            }
          }
        });
        
        $(document).keydown(function (e) {
          if (e.keyCode == 40) {
            if (cheats === 1) {
              msgBoard.text("Resetting Score...");
              scoreOne = 0;
              scoreTwo = 0;
              $('.scoreOne').text("Player One's Score is: "+scoreOne);
              $('.scoreTwo').text("Player Two's Score is: "+scoreTwo);
            }
          }
        });
        
        $(document).keydown(function (e) {
          if (e.keyCode == 67) {
            if (cheats === 0) {
              msgBoard.text("Cheats are currently enabled. Click 'b' to disable.");
              cheats = 1;
            }
          }
        });
        
        $(document).keydown(function (e) {
          if (e.keyCode == 66) {
            if (cheats === 1) {
              msgBoard.text("Cheats are currently disabled.");
              cheats = 0;
            }
          }
        });
        
        $(document).keydown(function (e) {
          if (e.keyCode == 68) {
            if (debugMode === 0) {
              msgBoard.text("Debug Mode Enabled. Click 'x' to exit.");
              debugMode = 1;
            }
          }
        });
        
        $(document).keydown(function (e) {
          if (e.keyCode == 84) {
            if (debugMode === 1) {
              var customMsgBoard = prompt("-Edit Message Board-");
              msgBoard.text(customMsgBoard);
            }
          }
        });
        
        $(document).keydown(function (e) {
          if (e.keyCode == 88) {
            if (debugMode === 1) {
              msgBoard.text("Debug disabled.");
              debugMode = 0;
            }
          }
        });
      });
  }
  
  else if (whichVersion === 'Text' | whichVersion === 'text' | whichVersion === 'Text ' | whichVersion === 'text ' | whichVersion === 't') {
          var Player = {
    
      startGame: function() {
            var playingCards =
            [[10,'sw','Ace of Clubs','ace of clubs','aceofclubs'],
            [1,'sw','Two Clubs','two clubs','twoclubs'],
            [9,'sw','Three Clubs','three clubs','threeclubs'],
            [2,'sw','Four Clubs','four clubs','fourclubs'],
            [3,'sw','Five Clubs','five clubs','fiveclubs'],
            [4,'sw','Six Clubs','six clubs','sixclubs'],
            [5,'sw','Seven Clubs','seven clubs','sevenclubs'],
            [6,'sw','Knight of Clubs','knight of clubs','knightofclubs'],
            [7,'sw','Jack of Clubs','jack of clubs','jackofclubs'],
            [8,'sw','King of Clubs','king of clubs','kingofclubs'],
            [10,'sw','Ace of Swords','ace of swords','aceofswords'],
            [1,'sw','Two Swords','two swords','twoswords'],
            [9,'sw','Three Swords','three swords','threeswords'],
            [2,'sw','Four Swords','four swords','fourswords'],
            [3,'sw','Five Swords','five swords','fiveswords'],
            [4,'sw','Six Swords','six swords','sixswords'],
            [5,'sw','Seven Swords','seven swords','sevenswords'],
            [6,'sw','Knight of Swords','knight of swords','knightofswords'],
            [7,'sw','Jack of Swords','jack of swords','jackofswords'],
            [8,'sw','King of Swords','king of swords','kingofswords'],
            [10,'sw','Ace of Cups','ace of cups','aceofcups'],
            [1,'sw','Two Cups','two cups','twocups'],
            [9,'sw','Three Cups','three cups','threecups'],
            [2,'sw','Four Cups','four cups','fourcups'],
            [3,'sw','Five Cups','five cups','fivecups'],
            [4,'sw','Six Cups','six cups','sixcups'],
            [5,'sw','Seven Cups','seven cups','sevencups'],
            [6,'sw','Knight of Cups','knight of cups','knightofcups'],
            [7,'sw','Jack of Cups','jack of cups','jackofcups'],
            [8,'sw','King of Cups','king of cups','kingofcups'],
            [10,'sw','Ace of Coins','ace of coins','aceofcoins'],
            [1,'sw','Two Coins','two coins','twocoins'],
            [9,'sw','Three Coins','three coins','threecoins'],
            [2,'sw','Four Coins','four coins','fourcoins'],
            [3,'sw','Five Coins','five coins','fivecoins'],
            [4,'sw','Six Coins','six coins','sixcoins'],
            [5,'sw','Seven Coins','seven coins','sevencoins'],
            [6,'sw','Knight of Coins','knight of coins','knightofcoins'],
            [7,'sw','Jack of Coins','jack of coins','jackofcoins'],
            [8,'sw','King of Coins','king of coins','kingofcoins']],
    
            availableCards = _.shuffle(playingCards.slice(0)),
            playerOneCardOne = availableCards.pop(),
            playerOneCardTwo = availableCards.pop(),
            playerOneCardThree = availableCards.pop(),
            playerTwoCardOne = availableCards.pop(),
            playerTwoCardTwo = availableCards.pop(),
            playerTwoCardThree = availableCards.pop(),
            trump = availableCards.pop(),
            stagingArea = [],
            stagingAreaTwo = [],
            higherValue = [],
            higherValueTwo = [],
            playerOneScore = 0,
            playerTwoScore = 0,
            whoFirst = "Error-- Unable to retrieve data...",
            cardPlayed = "Unknown",
            scoreOne = 0,
            scoreTwo = 0;
    
        console.log("Loading Briscola...");
        msgBoard.text("Briscola is loaded. Open your dev console. If something went wrong, click 'R' and it will reload.");
        playerOne();
    
        function itQuit() {
          console.log("You have quit the game");
          alert("You have quit the game");
          //Non existent function to quit the game. Since there is a weird loop glitch.
          blank();
        }
    
        function playerOne() {
          if (playerOneCardOne === 'None' && playerOneCardTwo === 'None' && playerOneCardThree === 'None') {
            console.log("Out of Cards!!! Final Score Coming...");
            finalScore();
          }
          console.log("-----------------\nNew Move\n-----------------\nTrump Card: "+trump[2]+"\n-----------------\nScore\nPlayer One: "+scoreOne+"\nPlayer Two: "+scoreTwo+"\n-----------------\nPlayer One\n-----------------\nCards currently in your hand\n"+playerOneCardOne[2]+"\n"+playerOneCardTwo[2]+"\n"+playerOneCardThree[2]+"\n-----------------");

          var playerOneMove = prompt("--Player One--\nWhich card would you like to play?\n\nTrump Card: "+trump[2]+"\n"+playerOneCardOne[2]+"\n"+playerOneCardTwo[2]+"\n"+playerOneCardThree[2]+"\n\nScore--\nPlayer One: "+scoreOne+"\nPlayer Two: "+scoreTwo+"\n\nWho played first--"+whoFirst+"\nWhat card they played-"+cardPlayed);
          if (playerOneMove === 'n') {
              alert("Invalid Answer. None means there are no cards there silly.");
              playerOne();
            }
          else if (playerOneMove === playerOneCardOne[2] | playerOneMove === playerOneCardOne[3] | playerOneMove === playerOneCardOne[4]) {
            console.log("Playing the " + playerOneCardOne[2] + " and getting a new card.");
            stagingArea = playerOneCardOne[1];
            higherValue = playerOneCardOne[0];
            playerOneCardOne = availableCards.pop();
            if (playerOneCardOne === undefined) {
              playerOneCardOne = 'None';
              playerTwo();
            }
            else {
              console.log("Player One's new card is " + playerOneCardOne[2]);
              playerTwo();
            }
          }
          else if (playerOneMove === playerOneCardTwo[2] | playerOneMove === playerOneCardTwo[3] | playerOneMove === playerOneCardTwo[4]) {
            console.log("Playing the " + playerOneCardTwo[2] + " and getting a new card.");
            stagingArea = playerOneCardTwo[1];
            higherValue = playerOneCardTwo[0];
            playerOneCardTwo = availableCards.pop();
            if (playerOneCardTwo === undefined) {
              playerOneCardTwo = 'None';
              playerTwo();
            }
            else {
              console.log("Player One's new card is " + playerOneCardTwo[2]);
              playerTwo();
            }
          }
          else if (playerOneMove === playerOneCardThree[2] | playerOneMove === playerOneCardThree[3] | playerOneMove === playerOneCardThree[4]) {
            console.log("Playing the " + playerOneCardThree[2] + " and getting a new card.");
            stagingArea = playerOneCardThree[1];
            higherValue = playerOneCardThree[0];
            playerOneCardThree = availableCards.pop();
            if (playerOneCardThree === undefined) {
              playerOneCardThree = 'None';
              playerTwo();
            }
            else {
              console.log("Player One's new card is " + playerOneCardThree[2]);
              playerTwo();
            }
          }
          else if (playerOneMove === 'quit') {
            itQuit();
          }
          else {
            console.log("Invalid move, try again");
            playerOne();
        }
    
        function playerTwo() {
          if (playerTwoCardOne === 'None' && playerTwoCardTwo === 'None' && playerTwoCardThree === 'None') {
            console.log("Out of Cards!!! Final Score Coming...");
            finalScore();
          }
          if (playerTwoCardOne === 'None' && playerTwoCardTwo === 'None' && playerTwoCardThree === 'None') {
              console.log("Out of Cards!!! Final Score Coming...");
              finalScore();
            }

          if (multiplayer === 'yes' | multiplayer === 'Yes') {
            console.log("-----------------\nNew Move\n-----------------\nTrump Card: "+trump[2]+"\n-----------------\nScore\nPlayer One: "+scoreOne+"\nPlayer Two: "+scoreTwo+"\n-----------------\nPlayer Two\n-----------------\nCards currently in your hand\n"+playerTwoCardOne[2]+"\n"+playerTwoCardTwo[2]+"\n"+playerTwoCardThree[2]+"\n-----------------");
  
            var playerTwoMove = prompt("--Player Two--\nWhich card would you like to play?");
            if (playerTwoMove === 'n') {
              alert("Invalid Answer. None means there are no cards there silly.\n If all three of your cards say 'n' then type in 'AllDone'");
              playerTwo();
            }
            else if (playerTwoMove === 'AllDone') {
              console.log("All cards are gone! Checking Final Score...");
              finalScore();
            }
            else if (playerTwoMove === playerTwoCardOne[2]) {
              console.log("Playing the " + playerTwoCardOne[2] + " and getting a new card.");
              stagingAreaTwo = playerTwoCardOne.pop();
              stagingAreaTwo = playerTwoCardOne.pop();
              higherValueTwo = playerTwoCardOne.pop();
              playerTwoCardOne = availableCards.pop();
              if (playerTwoCardOne === undefined) {
                playerTwoCardOne = 'None';
                cardChecker();
              }
              else {
                console.log("Player Two's new card is " + playerTwoCardOne[2]);
                cardChecker();
              }
            }
            else if (playerTwoMove === playerTwoCardTwo[2]) {
              console.log("Playing the " + playerTwoCardTwo[2] + " and getting a new card.");
              stagingAreaTwo = playerTwoCardTwo.pop();
              stagingAreaTwo = playerTwoCardTwo.pop();
              higherValueTwo = playerTwoCardTwo.pop();
              playerTwoCardTwo = availableCards.pop();
              if (playerTwoCardTwo === undefined) {
                playerTwoCardTwo = 'None';
                cardChecker();
              }
              else {
                console.log("Player Two's new card is " + playerTwoCardTwo[2]);
                cardChecker();
              }
            }
            else if (playerTwoMove === playerTwoCardThree[2]) {
              console.log("Playing the " + playerTwoCardThree[2] + " and getting a new card.");
              stagingAreaTwo = playerTwoCardThree.pop();
              stagingAreaTwo = playerTwoCardThree.pop();
              higherValueTwo = playerTwoCardThree.pop();
              playerTwoCardThree = availableCards.pop();
              if (playerTwoCardThree === undefined) {
                playerTwoCardThree = 'None';
                cardChecker();
              }
              else {
                console.log("Player Two's new card is " + playerTwoCardThree[2]);
                cardChecker();
              }
            }
            else if (playerTwoMove === 'quit') {
              itQuit();
            }
            else {
              console.log("Invalid move, try again");
              playerTwo();
            }
          }
          else if (multiplayer === 'no' | multiplayer === 'No' | multiplayer === "") {
            if (playerTwoCardOne === undefined) {
              playerTwoCardOne = 'None';
              cardChecker();
            }
            if (playerTwoCardTwo === undefined) {
              playerTwoCardTwo = 'None';
              cardChecker();
            }
            if (playerTwoCardThree === undefined) {
              playerTwoCardThree = 'None';
              cardChecker();
            }
            if (playerTwoCardOne[1] === trump[1]) {
              //Automatically plays the trump card for the best points.
              console.log("[Computer] Playing "+playerTwoCardOne[2]);
              cardPlayed = playerTwoCardOne[2];
              stagingAreaTwo = playerTwoCardOne[1];
              higherValueTwo = playerTwoCardOne[0];
              playerTwoCardOne = availableCards.pop();
              cardChecker();
            }
            else if (playerTwoCardTwo[1] === trump[1]) {
              //Automatically plays the trump card for the best points.
              console.log("[Computer] Playing "+playerTwoCardTwo[2]);
              cardPlayed = playerTwoCardTwo[2];
              stagingAreaTwo = playerTwoCardTwo[1];
              higherValueTwo = playerTwoCardTwo[0];
              playerTwoCardTwo = availableCards.pop();
              cardChecker();
            }
            else if (playerTwoCardThree[1] === trump[1]) {
              //Automatically plays the trump card for the best points.
              console.log("[Computer] Playing "+playerTwoCardThree[2]);
              cardPlayed = playerTwoCardThree[2];
              stagingAreaTwo = playerTwoCardThree[1];
              higherValueTwo = playerTwoCardThree[0];
              playerTwoCardThree = availableCards.pop();
              cardChecker();
            }
            else if (playerTwoCardOne[0] > higherValue) {
              console.log("[Computer] Playing "+playerTwoCardOne[2]);
              cardPlayed = playerTwoCardOne[2];
              stagingAreaTwo = playerTwoCardOne[1];
              higherValueTwo = playerTwoCardOne[0];
              playerTwoCardOne = availableCards.pop();
              cardChecker();
            }
            else if (playerTwoCardTwo[0] > higherValue) {
              console.log("[Computer] Playing "+playerTwoCardTwo[2]);
              cardPlayed = playerTwoCardTwo[2];
              stagingAreaTwo = playerTwoCardTwo[1];
              higherValueTwo = playerTwoCardTwo[0];
              playerTwoCardTwo = availableCards.pop();
              cardChecker();
            }
            else if (playerTwoCardThree[0] > higherValue) {
              console.log("[Computer] Playing "+playerTwoCardThree[2]);
              cardPlayed = playerTwoCardThree[2];
              stagingAreaTwo = playerTwoCardThree[1];
              higherValueTwo = playerTwoCardThree[0];
              playerTwoCardThree = availableCards.pop();
              cardChecker();
            }
            else {
              if (playerTwoCardOne === 'None') {
                if (playerTwoCardTwo === 'None') {
                  console.log("[Computer] Playing "+playerTwoCardThree[2]);
                  cardPlayed = playerTwoCardThree[2];
                  stagingAreaTwo = playerTwoCardThree[1];
                  higherValueTwo = playerTwoCardThree[0];
                  playerTwoCardThree = availableCards.pop();
                  cardChecker();
                }
                console.log("[Computer] Playing "+playerTwoCardTwo[2]);
                cardPlayed = playerTwoCardTwo[2];
                stagingAreaTwo = playerTwoCardTwo[1];
                higherValueTwo = playerTwoCardTwo[0];
                playerTwoCardTwo = availableCards.pop();
                cardChecker();
              }
              else {
                console.log("[Computer] Playing "+playerTwoCardOne[2]);
                cardPlayed = playerTwoCardOne[2];
                stagingAreaTwo = playerTwoCardOne[1];
                higherValueTwo = playerTwoCardOne[0];
                playerTwoCardOne = availableCards.pop();
                cardChecker();
              }
            }
          }
        }

        function cardChecker() {
          if (playerTwoCardOne === 'None' && playerTwoCardTwo === 'None' && playerTwoCardThree === 'None') {
            console.log("Out of Cards!!! Final Score Coming...");
            finalScore();
          }
          else if (stagingArea === trump[1] && stagingAreaTwo === trump[1]) {
            console.log("Both players have a trump card, checking which is higher.");
            if (higherValue > higherValueTwo) {
              console.log("Player One's trump card is higher, player one gets the cards.");
              checkScore();
            }
            else if (higherValueTwo > higherValue) {
              console.log("Player Two's trump card is higher, player two gets the cards.");
              checkScoreTwo();
            }
            else if (higherValue === higherValueTwo) {
              console.log("No points to either side, same number cards.");
              playerOne();
            }
            else {
              console.log("Failure--- Unknown Cards");
              itQuit();
            }
          }
          else if (stagingArea === trump[1]) {
            console.log("Player One has a trump card, auto win.");
            checkScore();
          }
          else if (stagingAreaTwo === trump[1]) {
            console.log("Player Two has a trump card, auto win.");
            checkScoreTwo();
          }
    
          console.log("No Trump Cards, checking which is higher value.");
    
          if (higherValue > higherValueTwo) {
            console.log("Player One's card is higher, player one gets the cards.");
            checkScore();
          }
          else if (higherValueTwo > higherValue) {
            console.log("Player Two's card is higher, player two gets the cards.");
            checkScoreTwo();
          }
          else if (higherValue === higherValueTwo) {
            console.log("No points to either side, same number cards.");
            playerOne();
          }
          else {
            console.log("Failure-- Unrecognizable Cards");
            itQuit();
          }
        }
    
        function checkScore() {
          scoreOne += playerOneScore + higherValue + higherValueTwo;
          console.log(scoreOne);
          console.log(scoreTwo);
          whoFirst = "You";
          playerOne();
        }
    
        function checkScoreTwo() {
          scoreTwo += playerTwoScore + higherValue + higherValueTwo;
          console.log(scoreOne);
          console.log(scoreTwo);
          whoFirst = "Computer";
          playerOne();
        }
    
        function finalScore() {
          console.log(scoreOne);
          console.log(scoreTwo);
          if (scoreOne > scoreTwo) {
            console.log("Player One Wins!");
          }
          else if (scoreTwo > scoreOne) {
            console.log("Player Two Wins!");
          }
          else {
            console.log("No one won! It's a draw!");
          }
          itQuit();
        }
      }
      }
    };
    
    Player.startGame();
  }
  else if (whichVersion === 'abcdefghijklmnopqrstuvwxyz' | whichVersion === 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    msgBoard.text("Something failed, press 'R' to reload.");
    alert("Yeah... You shouldn't have done that. Check your dev console.");
    var count = 0;
    while (count < 500) {
      console.log("A");
      console.log("AB");
      console.log("ABC");
      console.log("ABCD");
      console.log("ABCDE");
      console.log("ABCDEF");
      console.log("ABCDEFG");
      console.log("ABCDEFGH");
      console.log("ABCDEFGHI");
      console.log("ABCDEFGHIJ");
      console.log("ABCDEFGHIJK");
      console.log("ABCDEFGHIJKL");
      console.log("ABCDEFGHIJKLM");
      console.log("ABCDEFGHIJKLMN");
      console.log("ABCDEFGHIJKLMNO");
      console.log("ABCDEFGHIJKLMNOP");
      console.log("ABCDEFGHIJKLMNOPQ");
      console.log("ABCDEFGHIJKLMNOPQR");
      console.log("ABCDEFGHIJKLMNOPQRS");
      console.log("ABCDEFGHIJKLMNOPQRST");
      console.log("ABCDEFGHIJKLMNOPQRSTU");
      console.log("ABCDEFGHIJKLMNOPQRSTUV");
      console.log("ABCDEFGHIJKLMNOPQRSTUVW");
      console.log("ABCDEFGHIJKLMNOPQRSTUVWX");
      console.log("ABCDEFGHIJKLMNOPQRSTUVWXY");
      console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      console.log("ABCDEFGHIJKLMNOPQRSTUVWXY");
      console.log("ABCDEFGHIJKLMNOPQRSTUVWX");
      console.log("ABCDEFGHIJKLMNOPQRSTUVW");
      console.log("ABCDEFGHIJKLMNOPQRSTUV");
      console.log("ABCDEFGHIJKLMNOPQRSTU");
      console.log("ABCDEFGHIJKLMNOPQRST");
      console.log("ABCDEFGHIJKLMNOPQRS");
      console.log("ABCDEFGHIJKLMNOPQR");
      console.log("ABCDEFGHIJKLMNOPQ");
      console.log("ABCDEFGHIJKLMNOP");
      console.log("ABCDEFGHIJKLMNO");
      console.log("ABCDEFGHIJKLMN");
      console.log("ABCDEFGHIJKLM");
      console.log("ABCDEFGHIJKL");
      console.log("ABCDEFGHIJK");
      console.log("ABCDEFGHIJ");
      console.log("ABCDEFGHI");
      console.log("ABCDEFGH");
      console.log("ABCDEFG");
      console.log("ABCDEF");
      console.log("ABCDE");
      console.log("ABCD");
      console.log("ABC");
      console.log("AB");
      count += 1;
    }
  }
  else if (whichVersion === "\\o/") {
    alert("*Super Awesome Music Comes on As You Check the Dev Console*");
    console.log("\\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\"+"\n"+" \\o/\n  |  \n / \\"+"\n"+"  o/\n /|  \n / \\"+"\n"+"  o \n /|\\  \n / \\"+"\n"+" \\o \n  |\\  \n / \\");
    msgBoard.text("Yeah mobile users... You've missed out on a dance party. Of stickmen. You can reload the page now. Nothing will work unless you do.");
  }
});
