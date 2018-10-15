Steps followed in developing this single page game application

1) HTML
– Created a simple page using the bootstrap
– Created form for user to sign up, sign in, change password
– Buttons to sign out, play new game, get the record of the games played
– Each element in the HTML used div and class to provide event listeners using jQuery.
– Created the footer which gives all the feedback with every event with the game.

2) Javascript
– Created the game functionality in the game using the javascript functions.
– All the event on the game board calls different javascript function which does different work.
1) Functions to Sign Up a users
2) Function to Sign In a user and store that user data in the store.js file to access later
3) Function to change password using the data saved for that user in the store.js
4) Function to Sign Out the user using the same information stored for that user.
5) All the click on the game board calls the onClickBox function which act as on click updates the game by calling updateGame function which communicate with the api access the right index of the box and signed the value either X or O
6) The finalWinner function is called on each event of click on the board and check for every possible win situation or if the game is tie.
7) FunctioncreateGame will let user great fresh new game anytime
8) FunctiongetGame will get the information of the game the user signed in plays

3) jQuery
– All the event on the board are handle by the jQuery functions.
1) I used on(‘click’) function on all the box when there are clicked to update the game array in the api
2) I use the jQuery methods to assign the right index to X or O that user choose
3) I use the jQuery to set the class for these click to get the different css triggered
4) jQuery is also used to populate all the different feedback on different event on during the games

4) AJAX
– All the functions that are called during the event listener triggered used the AJAX to communicate with the api to return the information back from api like user login informations
– Every game user request does the AJAX call to get new game.
– Finally AJAX calls to return the information of game played.

5) CSS
– The game board is build using SCSS bootstrap.
– The click changing the X or O uses the the css for its font-size, color and background
– The entire board receive its UI from the css file index.scss

Documentation

1) Repository on GitHub: https://tenmediatech.github.io/tictactoe/

2) Repository Description: Single page browser game application |  Website: http://tenmediatech.com/tic-tac-toe/

3) Technologies used
– HTML, CSS, Javascript, jQuery, AJEX, DOM, Crome
– Google, Stack Overflow

Technical Specifications

– Custom Tic Tac Toe game version 1 develop by Tenzin Migmar
– Browser base single-page game application with no browser refresh.
– Render a game board in the browser.
– Player X is the starting player and than player O plays and there can switch back and forth.
– Visually display which side won if a player gets three in a row or show a draw if neither wins.
– User can play multiple game as long as signed in.
– All the event on the game is hanbdle with jQuery for DOM manipulation.
– All the request to API or posting to api is done through Ajax call.

Interaction with API
– Used the create game function to create every new game in API.
– Each time user click on any box in the board it updates automatically storing every move in the data which is stored in remote server hosting the API.
– With Get game button on the game user can get records of the game he or she played.
– Every move on the board will have feedback on the feedback panel on the footer.

Authentication Specifications
– Signup with email, password, and password confirmation.
– Login with email and password.
– Logout when logged in.
– Change password with current and new password.
– Signup and Sign-in must only be available to not signed in users.
– Logout and Change password must only be available to signed in users.
– Give feedback to the user after each action’s success or failure.
– All forms must clear after submit success or failure

Unsolved problems which would be fixed in future iterations.
1) User Authentication control for password recovery features.
2) User password to pass required validation for security standard.
3) Implementing more fun User Interface to have better experience of game.
4) Include more detail information of game when user request for game information.
5) Include social sharing of the game.

Changes made in the game application.

Documentation Listed unsolved problems which would be fixed in future iterations.
Technical Specifications Support playing multiple games, one at a time.
Displayed only relevant buttons to user sign in or for user not registered.
Displayed at all times After each click on the box gives feedback of next player turn message of changed Password Failure.
Do Not Have no any user-facing bugs.
Game is not defaults to tie when user triple clicks on the same square Only functional button for right user
No non-functional New Game and Get Game buttons before user sign in No displaying debugging messages in the console.

Single page game application build by Tenzin Migmar.
