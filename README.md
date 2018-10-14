# Tic Tac Toe Game

User Story

User Authorization

As a not signed in user, I want to be able to sign up with email, password, and password confirmation
  if they provide a unique email and password and password confirmation match then sign up successfully
  if they provide a not unique email then sign up fails
  if they provide a unique email but password and password confirmation do not match then sign up fails
As a not signed in user, I want to be able to sign in with email and password
As a signed in user, I want to be able to change my password
As a signed in user, I want to be able to sign out

Game Access

Game is playable only when user registered to the game and sign in
  - User will get a fresh game board to play.
  - If there is win it will show the winner is player X or player O
  - User is alowed to play new game anytime even before one game finish to start over.
  - User can get the record of how many games played
  - User have to sign out so that other user can play the game.
  - Game store all the games of each user who played the game.

## Wire Frame
   ('http://tenmediatech.com/tic-tac-toe/')

Steps followed in developing this single page game application

1) HTML
    - Created a simple page using the bootstrap
    - Created form for user to sign up, sign in, change password
    - Buttons to sign out, play new game, get the record of the games played
    - Each element in the HTML used div and class to provide event listeners using jQuery.
    - Created the footer which gives all the feedback with every event with the game.

2) Javascript
    - Created the game functionalilty in the game using the javascript functions.
    - All the event on the game board calls differnt javascript function which does differnt work.
      1) Functions to Sign Up a users
      2) Function to Sign In a user and store that user data in the store.js file to access later
      3) Function to change password using the data saved for that user in the store.js
      4) Function to Sign Out the user using the same information stored for that user.
      5) All the click on the game board calls the onClickBox function which act as on click updates the game by calling updateGame function which communicate with the api access the right index of the box and signed the value either X or O
      6) The finalWinner function is called on each event of click on the board and check for every possible win situation or if the game is tie.
      7) FunctioncreateGame  will let user great fresh new game anytime
      8) FunctiongetGame will get the information of the game the user signed in plays

3) jQuery
    - All the event on the board are handle by the jQuery functions.
      1) I used on('click') function on all the box when there are clied to update the game array in the api
      2) I use the jQuery methods to assign the right index to X or O that user choose
      3) I use the jQuery to set the class for these click to get the different css trigered
      4) jQuery is also used to populate all the differnt feedback on differnt event on during the games

4) AJAX
    - All the functions that are called during the event listerner trigered used the AJAX to communicate with the api to return the information back from api like user login informations
    - Every game user request does the AJAX call to get new game.
    - Finally AJAX calls to return the information of game played.

5) CSS
    - The game board is build using SCSS bootstrap.
    - The click changing the X or O uses the the css for its font-size, color and background
    - The entire board recieve its UI from the css file index.scss



Documentation

1) Repository on GitHub

2) Repository Description field and Website

3) Technologies used
  - HTML, CSS, Javascript, jQuery, Ajex, DOM, Crome
  - Google, Stack Overflow

Technical Specifications

  - Custom Tic Tac Toe game version 1 develop by Tenzin Migmar
  - Browser base single-page game application with no browser refresh.
  - Render a game board in the browser.
  - Player X is the starting player and than player O plays and there can switch back and forth.
  - Visually display which side won if a player gets three in a row or show a draw if neither wins.
  - User can play multiple game as long as signed in.
  - All the event on the game is hanbdle with jQuery for DOM manipulation.
  - All the request to API or posting to api is done through Ajax call.

Interection with API
  - Used the create game function to create every new game in API.
  - Each time user click on any box in the board it updates autometically storeing every move in the data which is stored in romote server hosting the API.
  - With Get game button on the game user can get records of the game he or she played.
  - Every move on the board will have feedback on the feedback panel on the footer.

Authentication Specifications
  - Signup with email, password, and password confirmation.
  - Login with email and password.
  - Logout when logged in.
  - Change password with current and new password.
  - Signup and Signin must only be available to not signed in users.
  - Logout and Change password must only be available to signed in users.
  - Give feedback to the user after each action's success or failure.
  - All forms must clear after submit success or failure

  Unsolved Problems
  1) More detail inforation for user's game when request for game information
  2) More interective User Interface
  3) Giving more informative feedback for users games
  4) Handle user request for forget email or password.
  5) Password validation to accept secure password. 
  List unsolved problems which would be fixed in future iterations.
