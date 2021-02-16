const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({
	disableEveryone: true
});

/*
									GLOBAL VARIABLES
*/

let row1;
let row2;
let row3;
let output1;
let output2;
let output3;
let coords;
let counter;
let random;
let xRole;
let oRole;

/*
									BOTS PROFILE
*/

bot.on('ready', () => {
	console.log(`${bot.user.username} is online!`);
	bot.user.setActivity("Playing Tic Tac Toe!");
});

/*
									COMMANDS
*/

bot.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];

	if (cmd === `${prefix}start`) {
		startGame();
	} else if (cmd === `${prefix}x`) {
		if (xRole === 1 && oRole === 0) {
			posX();
		} else {
			message.channel.send("It is not your turn!");
		}
	} else if (cmd === `${prefix}o`) {
		if (xRole === 0 && oRole === 1) {
			posO();
		} else {
			message.channel.send("It is not your turn!");
		}
	} else if (cmd === `${prefix}reset`) {
		resetGame();
		message.channel.send("Game has been reset!")
	}

	/*
										FUNCTIONS
	*/

	function startGame() {
		resetGame();
		role();
		messageSend();
	}


	function resetGame() {
		coords = [".", ".", ".", ".", ".", ".", ".", ".", "."];
		row1 = [coords[0], coords[1], coords[2]];
		row2 = [coords[3], coords[4], coords[5]];
		row3 = [coords[6], coords[7], coords[8]];
	}


	function messageSend() {
		row1 = [coords[0], coords[1], coords[2]];
		row2 = [coords[3], coords[4], coords[5]];
		row3 = [coords[6], coords[7], coords[8]];
		output1 = row1.join(" ");
		output2 = row2.join(" ");
		output3 = row3.join(" ");
		message.channel.send(output1);
		message.channel.send(output2);
		message.channel.send(output3);
	}


	function posX() {
		posX = Math.round(messageArray[1]);

		if (posX > 0 && posX < 10) {
			placeX();
		} else {
			message.channel.send("That is not possible")
		}
	}


	function posO() {
		posO = Math.round(messageArray[1]);

		if (posO > 0 && posO < 10) {
			placeO();
		} else {
			message.channel.send("That is not possible")
		}
	}


	function placeX() {
		if (coords[posX - 1] === '.') {
			coords[posX - 1] = "X";
			messageSend();
			roleSwitch();
			winCheck();
			lostCheck();
		} else {
			message.channel.send("This place has already been used");
		}
	}


	function placeO() {
		if (coords[posO - 1] === '.') {
			coords[posO - 1] = "O";
			messageSend();
			roleSwitch();
			winCheck();
			lostCheck();
		} else {
			message.channel.send("This place has already been used");
		}
	}


	function wonX() {
		message.channel.send("Player X has won the game!");
		resetGame();
	}


	function wonO() {
		message.channel.send("Player O has won the game!");
		resetGame();
	}


	function role() {
		random = Math.round(Math.random());
		if (random === 0) {
			xRole = 1;
			oRole = 0;
			message.channel.send("Player X can start the game!")
		} else if (random === 1) {
			xRole = 0;
			oRole = 1;
			message.channel.send("Player O can start the game!")
		}
	}


	function roleSwitch() {
		if (xRole === 1) {
			xRole = 0;
			oRole = 1;
		} else if (oRole === 1) {
			xRole = 1;
			oRole = 0;
		}
	}


	function lostCheck() {
		counter = 0;
		for (i = 0; i < 9; i++) {
			if (coords[i] === ".") {
				counter++;
			}
		}
		if (counter === 0) {
			message.channel.send("Nobody won the game");
			resetGame();
		}
	}


	function winCheck() {
		/*
									CHECK WIN FOR X (CHECKS EVERY POSSIBLE COMBINATION TO WIN FOR X)
		*/
		if (coords[0] === "X" && coords[1] === "X" && coords[2] === "X") {
			wonX();
		} else if (coords[3] === "X" && coords[4] === "X" && coords[5] === "X") {
			wonX();
		} else if (coords[6] === "X" && coords[7] === "X" && coords[8] === "X") {
			wonX();
		}
		//HORIZONTALLY EQUAL
		else if (coords[0] === "X" && coords[3] === "X" && coords[6] === "X") {
			wonX();
		} else if (coords[1] === "X" && coords[4] === "X" && coords[7] === "X") {
			wonX();
		} else if (coords[2] === "X" && coords[5] === "X" && coords[8] === "X") {
			wonX();
		}
		//VERTICALLY EQUAL 
		else if (coords[0] === "X" && coords[4] === "X" && coords[8] === "X") {
			wonX();
		} else if (coords[2] === "X" && coords[4] === "X" && coords[6] === "X") {
			wonX();
		}
		//SLOPES EQUAL

		/*
									CHECK WIN FOR O (CHECKS EVERY POSSIBLE COMBINATION TO WIN FOR O)
		*/
		else if (coords[0] === "O" && coords[1] === "O" && coords[2] === "O") {
			wonO();
		} else if (coords[3] === "O" && coords[4] === "O" && coords[5] === "O") {
			wonO();
		} else if (coords[6] === "O" && coords[7] === "O" && coords[8] === "O") {
			wonO();
		}
		//HORIZONTALLY EQUAL
		else if (coords[0] === "O" && coords[3] === "O" && coords[6] === "O") {
			wonO();
		} else if (coords[1] === "O" && coords[4] === "O" && coords[7] === "O") {
			wonO();
		} else if (coords[2] === "O" && coords[5] === "O" && coords[8] === "O") {
			wonO();
		}
		//VERTICALLY EQUAL 
		else if (coords[0] === "O" && coords[4] === "O" && coords[8] === "O") {
			wonO();
		} else if (coords[2] === "O" && coords[4] === "O" && coords[6] === "O") {
			wonO();
		}
		//SLOPES EQUAL
	}
});

bot.login(botconfig.token);
