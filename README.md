# Tic-Tac-Toe-Discord-Bot
Tic Tac Toe Game bot for Discord

## INTRODUCTION: 
Tic-tac-toe, noughts and crosses, or Xs and Os, is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. 
The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner. 
It is a solved game with a forced draw assuming best play from both players. 


## SETUP:
### Downloading this bot
You can clone this github page or download it as a .zip file and then extract it.

### Setting up your bot
1) Go to https://discord.com/developers/applications
2) Log in to your existing Discord account or create a new one.
3) Click on the “New Application” button.
4) Give the application a name and click “Create”.
5) Go to the “Bot” tab and then click “Add Bot”. You will have to confirm by clicking "Yes, do it!"
6) Your bot has been created. Now copy the token.
7) Navigate to the botconfig.json file and replace [INSERT TOKEN HERE] with the token you copied.
8) Save the botconfig.json file.

### Inviting your bot to your server
1) Go back to your discord application screen and click on your bot.
2) Go to the "OAuth2" tab . Then select "bot" under the "scopes" section.
3) Now choose the permissions you want for the bot. Administrator is recommended.
4) After selecting the appropriate permissions, click the 'copy' button above the permissions. 
That will copy a URL which can be used to add the bot to a server.
Paste the URL into your browser, choose a server to invite the bot to, and click “Authorize”.
To add the bot, your account needs "Manage Server" permissions.

### Starting your bot
1) Make sure you have node.js installed.
2) Open any kind of console (cmd/powershell).
3) Change your directory to the folder of your bot using the 'cd' command. (cd [PATH to your bot folder])
4) Launch the bot using 'node index.js', if everything went right, `[YOUR BOT NAME] is online!` should appear in the console.


## USAGE:
### Available commands:
#### !start --> This will start a game of Tic Tac Toe.
#### !x [INSERT NUMBER] --> When it is X's turn, this will insert an X in a tile of your choosing.
#### !o [INSERT NUMBER] --> When it is O's turn, this will insert an O in a tile of your choosing.
#### !reset --> This will reset the game.

##TIILEMAP:
### [1, 2, 3]
### [4, 5, 6]
### [7, 8 ,9]
