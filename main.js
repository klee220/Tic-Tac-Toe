// Arrays for XOs
var XArray = new Array();
var OArray = new Array();

// Bool for game over
var over = false;
//bool for valid time to switch game modes
var validSwitch = true;
//bool for game mode
var aiMode = false;

// Bool for if cell has been clicked 
var [oned, twod, threed, fourd, fived, sixd, sevend, eightd, nined] = [false, false, false, false, false, false, false, false, false];
var tttArr = [false, false, false, false, false, false, false, false, false];
var AIchoice = ['pone','ptwo','pthree','pfour','pfive','psix','pseven','peight','pnine'];
var ai = true;


//scores
var XScore = 0;
var OScore = 0;

function newGame() {
	//reset all game variables
	XArray = [];
	OArray = [];
	over = false;
	[oned, twod, threed, fourd, fived, sixd, sevend, eightd, nined] = [false, false, false, false, false, false, false, false, false];	
	tttArr = [false, false, false, false, false, false, false, false, false];
	
	//update scoreboard and set player's turn to X
	document.getElementById("display_player").innerHTML = "Your turn, X";
	document.getElementById("p1_score").innerHTML = XScore;
	document.getElementById("p2_score").innerHTML = OScore;

	//wipe board clean for new game
	document.getElementById("choice1").textContent = "";
	document.getElementById("choice2").textContent = "";
	document.getElementById("choice3").textContent = "";
	document.getElementById("choice4").textContent = "";
	document.getElementById("choice5").textContent = "";
	document.getElementById("choice6").textContent = "";
	document.getElementById("choice7").textContent = "";
	document.getElementById("choice8").textContent = "";
	document.getElementById("choice9").textContent = "";
}
function reset() {
	//reset all game variables
	XArray = [];
	OArray = [];
	over = false;
	validSwitch = true;
	[oned, twod, threed, fourd, fived, sixd, sevend, eightd, nined] = [false, false, false, false, false, false, false, false, false];
	tttArr = [false, false, false, false, false, false, false, false, false];
	ai = true;


	//reset scoreboard to 0 and set player's turn to X
	document.getElementById("display_player").innerHTML = "Your turn, X";
	document.getElementById("p1_score").innerHTML = 0;
	document.getElementById("p2_score").innerHTML = 0;

	//reset score variables to 0
	XScore = 0;
	OScore = 0;

	//wipe board clean for new game
	document.getElementById("choice1").textContent = "";
	document.getElementById("choice2").textContent = "";
	document.getElementById("choice3").textContent = "";
	document.getElementById("choice4").textContent = "";
	document.getElementById("choice5").textContent = "";
	document.getElementById("choice6").textContent = "";
	document.getElementById("choice7").textContent = "";
	document.getElementById("choice8").textContent = "";
	document.getElementById("choice9").textContent = "";
}

function dummyAI() {
	console.log("dummyai");
	let AImove = Math.floor(Math.random() * 9);
	while (tttArr[AImove] == true) {
		AImove = Math.floor(Math.random() * 9);
	}
	tttArr[AImove] = true;	
	play(AIchoice[AImove]);
}

function computerMultiplayer() {
	if (validSwitch == true) {
		if (aiMode == true) {
			aiMode = false;
			document.getElementById("display_play_mode").innerHTML = "Mode: Multiplayer";
			document.getElementById("play_mode_button").innerHTML = "Play Against AI";
		}
		else {
			aiMode = true;
			document.getElementById("display_play_mode").innerHTML = "Mode: AI";
			document.getElementById("play_mode_button").innerHTML = "Play Against Friend";
		}
	}
}

function play(userChoice) {
	validSwitch = false;
	var goAI= false;
	// X starts the game
	// Put X where user clicks every other turn
	if (over == false){
		if (((XArray.length+OArray.length) % 2 == 0) || ((XArray.length+OArray.length) == 0)){
			if (userChoice == "pone" && oned == false) {
				document.getElementById("choice1").innerHTML = "X";
				document.getElementById("choice1").style.background = "salmon";
				XArray.push(1); 
				document.getElementById("display_player").innerHTML = "Your turn, O";
				oned = true;
				tttArr[0] = true;
				goAI= true;
			}	if (userChoice == "ptwo" && twod == false) {
				document.getElementById("choice2").innerHTML = "X";
				document.getElementById("choice2").style.background = "salmon";
				XArray.push(2);
				twod = true;
				tttArr[1] = true;
				document.getElementById("display_player").innerHTML = "Your turn, O";
				goAI= true;
			}	if (userChoice == "pthree"  && threed == false) {
				document.getElementById("choice3").innerHTML = "X";
				document.getElementById("choice3").style.background = "salmon";
				XArray.push(3);
				document.getElementById("display_player").innerHTML = "Your turn, O";
				threed = true;
				tttArr[2] = true;
				goAI= true;
			}	if (userChoice == "pfour" && fourd == false) {
				document.getElementById("choice4").innerHTML = "X";
				document.getElementById("choice4").style.background = "salmon";
				XArray.push(4);
				document.getElementById("display_player").innerHTML = "Your turn, O";
				fourd = true;
				tttArr[3] = true;
				goAI= true;
			}	if (userChoice == "pfive" && fived == false) {
				document.getElementById("choice5").innerHTML = "X";
				document.getElementById("choice5").style.background = "salmon";
				XArray.push(5);
				document.getElementById("display_player").innerHTML = "Your turn, O";
				fived = true;
				tttArr[4] = true;
				goAI= true;
			}	if (userChoice == "psix" && sixd == false) {
				document.getElementById("choice6").innerHTML = "X";
				document.getElementById("choice6").style.background = "salmon";
				XArray.push(6);
				document.getElementById("display_player").innerHTML = "Your turn, O";
				sixd = true;
				tttArr[5] = true;
				goAI= true;
			}	if (userChoice == "pseven" && sevend == false) {
				document.getElementById("choice7").innerHTML = "X";
				document.getElementById("choice7").style.background = "salmon";
				XArray.push(7);
				document.getElementById("display_player").innerHTML = "Your turn, O";
				sevend = true;
				tttArr[6] = true;
				goAI= true;
			}	if (userChoice == "peight" && eightd == false) {
				document.getElementById("choice8").innerHTML = "X";
				document.getElementById("choice8").style.background = "salmon";
				XArray.push(8);
				document.getElementById("display_player").innerHTML = "Your turn, O";
				eightd = true;
				tttArr[7] = true;
				goAI= true;
			}	if (userChoice == "pnine" && nined == false) {
				document.getElementById("choice9").innerHTML = "X";
				document.getElementById("choice9").style.background = "salmon";
				XArray.push(9);
				document.getElementById("display_player").innerHTML = "Your turn, O";
				nined = true;
				tttArr[8] = true;
				goAI= true;
			}

		}

		// Put O where user clicks every other turn
		else{
			if (userChoice == "pone" && oned == false) {
				document.getElementById("choice1").innerHTML = "O";
				document.getElementById("choice1").style.background = "salmon";
				OArray.push(1);
				document.getElementById("display_player").innerHTML = "Your turn, X";
				oned = true;
			}	if (userChoice == "ptwo" && twod == false) {
				document.getElementById("choice2").innerHTML = "O";
				document.getElementById("choice2").style.background = "salmon";
				OArray.push(2);
				document.getElementById("display_player").innerHTML = "Your turn, X";
				twod = true;
			}	if (userChoice == "pthree" && threed == false) {
				document.getElementById("choice3").innerHTML = "O";
				document.getElementById("choice3").style.background = "salmon";
				OArray.push(3);
				document.getElementById("display_player").innerHTML = "Your turn, X";
				threed = true;
			}	if (userChoice == "pfour" && fourd == false) {
				document.getElementById("choice4").innerHTML = "O";
				document.getElementById("choice4").style.background = "salmon";
				OArray.push(4);
				document.getElementById("display_player").innerHTML = "Your turn, X";
				fourd = true;
			}	if (userChoice == "pfive" && fived == false) {
				document.getElementById("choice5").innerHTML = "O";
				document.getElementById("choice5").style.background = "salmon";
				OArray.push(5);
				document.getElementById("display_player").innerHTML = "Your turn, X";
				fived = true;
			}	if (userChoice == "psix" && sixd == false) {
				document.getElementById("choice6").innerHTML = "O";
				document.getElementById("choice6").style.background = "salmon";
				OArray.push(6);
				document.getElementById("display_player").innerHTML = "Your turn, X";
				sixd = true;
			}	if (userChoice == "pseven" && sevend == false) {
				document.getElementById("choice7").innerHTML = "O";
				document.getElementById("choice7").style.background = "salmon";
				OArray.push(7);
				document.getElementById("display_player").innerHTML = "Your turn, X";
				sevend = true;
			}	if (userChoice == "peight" && eightd == false) {
				document.getElementById("choice8").innerHTML = "O";
				document.getElementById("choice8").style.background = "salmon";
				OArray.push(8);
				document.getElementById("display_player").innerHTML = "Your turn, X";
				eightd = true;
			}	if (userChoice == "pnine" && nined == false) {
				document.getElementById("choice9").innerHTML = "O";
				document.getElementById("choice9").style.background = "salmon";
				OArray.push(9);
				document.getElementById("display_player").innerHTML = "Your turn, X";
				nined = true;
			}		
			
		}

		/* Checks to see if there are any wins */

		var i, j, k;
		if (over == false){
		// Looking for Xs in cells [1, 4, 7], [2, 5, 8], [3, 6, 9]
			for (i = 0; i < XArray.length; i++) {
				if(XArray[i] ==  "1" || XArray[i] == "2" || XArray[i] == "3"){
					for (j = 0; j < XArray.length; j++) {
						if(XArray[j] == XArray[i]+3){
							for (k = 0; k < XArray.length; k++) {
								if(XArray[k] == XArray[j]+3){
									//update score
									XScore++;
									document.getElementById("p1_score").innerHTML = XScore;
									document.getElementById("display_player").innerHTML = "X wins";
									over = true;
								}
							}	
						}
					}
				}
			}
		}

		// Looking for Xs in cells [1, 2, 3], [4, 5, 6], [7, 8, 9]
		if (over == false){
			for (i = 0; i < XArray.length; i++) {
				if(XArray[i] ==  "1" || XArray[i] == "4" || XArray[i] == "7"){
					for (j = 0; j < XArray.length; j++) {
						if(XArray[j] == XArray[i]+1){
							for (k = 0; k < XArray.length; k++) {
								if(XArray[k] == XArray[j]+1){
									//update score
									XScore++;
									document.getElementById("p1_score").innerHTML = XScore;
									document.getElementById("display_player").innerHTML = "X wins";
									over = true;
								}
							}	
						}
					}
				}
			}
		}

		// Looking for Xs in cells [1, 5, 9]
		if (over == false){
			for (i = 0; i < XArray.length; i++) {
				if(XArray[i] ==  "1"){
					for (j = 0; j < XArray.length; j++) {
						if(XArray[j] == XArray[i]+4){
							for (k = 0; k < XArray.length; k++) {
								if(XArray[k] == XArray[j]+4){
									//update score
									XScore++;
									document.getElementById("p1_score").innerHTML = XScore;
									document.getElementById("display_player").innerHTML = "X wins";
									over = true;
								}
							}	
						}
					}
				}
			}
		}

		// Looking for Xs in cells [3, 5, 7]
		if (over == false){
			for (i = 0; i < XArray.length; i++) {
				if(XArray[i] == "3"){
					for (j = 0; j < XArray.length; j++) {
						if(XArray[j] == XArray[i]+2){
							for (k = 0; k < XArray.length; k++) {
								if(XArray[k] == XArray[j]+2){
									//update score
									XScore++;
									document.getElementById("p1_score").innerHTML = XScore;
									document.getElementById("display_player").innerHTML = "X wins";
									over = true;
								}
							}	
						}
					}
				}
			}
		}

		// Looking for Os in cells [1, 4, 7], [2, 5, 8], [3, 6, 9]
		if (over == false) {
			for (i = 0; i < OArray.length; i++) {
				if(OArray[i] ==  "1" || OArray[i] == "2" || OArray[i] == "3"){
					for (j = 0; j < OArray.length; j++) {
						if(OArray[j] == OArray[i]+3){
							for (k = 0; k < OArray.length; k++) {
								if(OArray[k] == OArray[j]+3){
									//update score
									OScore++;
									document.getElementById("p2_score").innerHTML = OScore;
									document.getElementById("display_player").innerHTML = "O wins";
									over = true;
								}
							}	
						}
					}
				}
			}
		}

		// Looking for Os in cells [1, 2, 3], [4, 5, 6], [7, 8, 9]
		if (over == false){
			for (i = 0; i < OArray.length; i++) {
				if(OArray[i] ==  "1" || OArray[i] == "4" || OArray[i] == "7"){
					for (j = 0; j < OArray.length; j++) {
						if(OArray[j] == OArray[i]+1){
							for (k = 0; k < OArray.length; k++) {
								if(OArray[k] == OArray[j]+1){
									//update score
									OScore++;
									document.getElementById("p2_score").innerHTML = OScore;
									document.getElementById("display_player").innerHTML = "O wins";
									over = true;
								}
							}	
						}
					}
				}
			}	
		}
		
		// Looking for Os in cells [1, 5, 9]
		if (over == false){
			for (i = 0; i < OArray.length; i++) {
				if(OArray[i] ==  "1"){
					for (j = 0; j < OArray.length; j++) {
						if(OArray[j] == OArray[i]+4){
							for (k = 0; k < OArray.length; k++) {
								if(OArray[k] == OArray[j]+4){
									//update score
									OScore++;
									document.getElementById("p2_score").innerHTML = OScore;
									document.getElementById("display_player").innerHTML = "O wins";
									over = true;
								}
							}	
						}
					}
				}
			}
		}

		// Looking for Os in cells [3, 5, 7]
		if (over == false){
			for (i = 0; i < OArray.length; i++) {
				if(OArray[i] ==  "3"){
					for (j = 0; j < OArray.length; j++) {
						if(OArray[j] == OArray[i]+2){
							for (k = 0; k < OArray.length; k++) {
								if(OArray[k] == OArray[j]+2){
									//update score
									OScore++;
									document.getElementById("p2_score").innerHTML = OScore;
									document.getElementById("display_player").innerHTML = "O wins";
									over = true;
								}
							}	
						}
					}
				}
			}
		}
	}

	// Checks to see if all spots on the board have been filled. If so, the game is a tie. 
	var sum = (XArray.length+OArray.length);

	if (aiMode == true) {
		if(ai == true && goAI == true){
			OArray.push("dummy");
		}

		if (ai == true && sum != 9 && goAI == true){
			OArray.pop();
			ai = false;
			dummyAI();
			ai = true;
		}
	}
	
	if (sum == 9 && over == false){
		document.getElementById("display_player").innerHTML = "Tie";
		over = true;
	}
}
