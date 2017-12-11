//declare global vars

//create game obj
var crystalCol = {
	gameStarted: false,
	target_Score: 0,
	player_Score: 0,
	wins: 0,
	losses: 0,
	amethystVal: 0,
	blueVal: 0,
	flouriteVal: 0,
	rareVal: 0,
	roundResult:"",

	//method for game start condition



	//method for assigning rdm target score
	newTarget: function() {
		this.target_Score = Math.floor((Math.random()*120) + 19);
		console.log(this.target_Score);
		$("#targetScore").text(this.target_Score);
	},

	//method for assigning rdm crysral vals
	crystalVals: function() {
		//set amethyst
		this.amethystVal = Math.floor((Math.random()*12) + 1);
		console.log("Amethyst = "+this.amethystVal);
		//set blue
		this.blueVal = Math.floor((Math.random()*12) + 1);
		console.log("Blue = "+this.blueVal);
		//set flourite
		this.flouriteVal = Math.floor((Math.random()*12) + 1);
		console.log("Flourite = "+this.flouriteVal);
		//set rare
		this.rareVal = Math.floor((Math.random()*12) + 1);
		console.log("Rare = "+this.rareVal);
	},

	//amethyst click
	amethystClick: function() {
		console.log("amethyst clicked");
		//calc new player_Score
		this.player_Score = this.player_Score + this.amethystVal;
		console.log(this.player_Score);
		//display on screen
		$("#yourScore").text(this.player_Score);
		//call checkScores method
		this.checkScores();
	},

	//blue click
	blueClick: function() {
		console.log("blue clicked");
		//calc new player_Score
		this.player_Score = this.player_Score + this.blueVal;
		console.log(this.player_Score);
		//display on screen
		$("#yourScore").text(this.player_Score);
		//call checkScores method
		this.checkScores();
	},

	//flourite click
	flouriteClick: function(){
		console.log("flourite clicked");
		//calc new player_Score
		this.player_Score = this.player_Score + this.flouriteVal;
		console.log(this.player_Score);
		//display on screen
		$("#yourScore").text(this.player_Score);
		//call checkScores method
		this.checkScores();
	},

	//rare click
	rareClick: function () {
		console.log("rare clicked");
		//calc new player_Score
		this.player_Score = this.player_Score + this.rareVal;
		console.log(this.player_Score);
		//display on screen
		$("#yourScore").text(this.player_Score);
		//call checkScores method
		this.checkScores();
	},


	//check round win or lose condition
	checkScores: function() {
		console.log("Method call checkScores");
		//round win condition
		if (this.player_Score === this.target_Score) {//if playerScore === targetScore call assign win
			//method for assigining wins
			console.log("won round");
			this.roundResult = "won";
			this.wins ++;
			$("#wins").text(this.wins);
			console.log(this.wins);			
			this.gameCheck();
			 
		} else if (this.player_Score > this.target_Score) { //round lost condition
			console.log("lost round");
			this.roundResult = "lost";
			this.losses ++;
			$("#losses").text(this.losses);
			console.log(this.losses);
			this.gameCheck();
		} 
					
	},
		
	//check game win or lose condition
	gameCheck: function() {
		console.log("round over. checking game win/loss conditions");
		if (this.wins === 5 && this.losses < 5) {//game win condition check
				alert("Congratulations!! You won the game!!");				
				this.newGame(); //call game reset
			} else if (this.losses === 5 && this.wins < 5) {
				alert("Sorry. You lost!!");
				this.newGame(); //call game reset
			} else {
				alert("You " + this.roundResult + " this round. Get ready for the next one!");
				this.roundReset();//game still active. reset round
				console.log("game still active. reseting for new round");
			}
	},


	//method for round reset
	roundReset: function() {
		this.player_Score = 0;//reset player_Score to 0
		$("#yourScore").text(this.player_Score);
		this.newTarget();//call newTarget() for a new target score 
		this.crystalVals();//call crystalVals() for new crystal values
	},
		

	//method for game reset
	newGame: function() {
		$("#startBtn").text("START");//reset start button to say start
		//reset all game properties
		this.gameStarted = false;
		this.target_Score = 0;
		this.player_Score = 0;
		this.wins = 0;
		this.losses = 0;
		this.amethystVal = 0;
		this.blueVal= 0;
		this.flouriteVal = 0;
		this.rareVal = 0;
		this.roundResult = "";
		alert("press START to play again!");
		$("#yourScore").text(this.player_Score);
		$("#wins").text(this.wins);
		$("#losses").text(this.losses);
		$("#targetScore").text(this.target_Score);
	}
		

}//end game obj


//===========================
//game logic and method calls

//start button click to begin game sets the initial game values
	$("#startBtn").click(function(){
		//check gameStarted flag === false to ensure
		//a game that is already in session is not
		//reset by mistake		
		if (crystalCol.gameStarted === false) {
			//change flag to true since a game will begin
			crystalCol.gameStarted = true;
			//change start button name to "Now Playing"
			$("#startBtn").text("Now Playing");
		}
		
		console.log(crystalCol.gameStarted);

		//call method for new target score
		crystalCol.newTarget();
		//call method to set crystal vals
		crystalCol.crystalVals();
	});
		
	//amethyst click method calls
	$("#amethyst").click(function(){
		crystalCol.amethystClick();
	});


	//blue click method calls
	$("#blue").click(function(){
		crystalCol.blueClick();
	});

	//flourite click method calls
	$("#flourite").click(function(){
		crystalCol.flouriteClick();
	});

	//rare click method calls
	$("#rare").click(function(){
		crystalCol.rareClick();
	});