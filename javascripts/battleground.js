"use strict";

var RobotWars = (function (battleGround){

let selectedRobot = null;

let BattleGround = function() {
  this.player1 = null;
  this.player2 = null;
  this.battleText = [];
  this.player1InitialHealth = 0;
  this.player2InitialHealth = 0;
};

$(document).ready(function() {

	const $player1Name = $('#robot1Name');
	const $player2Name = $('#robot2Name');
	const $combatText = $('#combatText');

	//attack function
	function attack() {
		battleGround.Player1.robotType.totalDamage = battleGround.Player1.robotType.baseDamage + Math.floor(Math.random() * 500) + 25;
  		battleGround.Player2.robotType.totalDamage = battleGround.Player2.robotType.baseDamage + Math.floor(Math.random() * 500) + 25;
  		
  		battleGround.Player1.robotType.life -= battleGround.Player2.robotType.totalDamage;
  		battleGround.Player2.robotType.life -= battleGround.Player1.robotType.totalDamage;
  		//console.log("damage", baseDamage);
  		$combatText.append(`<div>${battleGround.Player1.playerName} hits for ${battleGround.Player1.robotType.totalDamage} damage.</div>`);
  		$combatText.append(`<div>${battleGround.Player2.playerName} hits for ${battleGround.Player2.robotType.totalDamage} damage.</div>`);

  		$('#player1Life').html(`${battleGround.Player1.robotType.life}` - `${battleGround.Player2.robotType.totalDamage}`);
  		$('#player2Life').html(`${battleGround.Player2.robotType.life}` - `${battleGround.Player1.robotType.totalDamage}`);
  		//setInterval();
  		if(battleGround.Player1.robotType.life <= 0){
  			$combatText.append(`<div><h1>${battleGround.Player2.playerName}'s ${battleGround.Player2.robotType.type} ${battleGround.Player2.robotType.name} defeats ${battleGround.Player1.playerName}'s ${battleGround.Player1.robotType.type} ${battleGround.Player1.robotType.name}!</h1></div>`);
  		}
  		if(battleGround.Player2.robotType.life <= 0){
  			$combatText.append(`<div><h1>${battleGround.Player1.playerName}'s ${battleGround.Player1.robotType.type} ${battleGround.Player1.robotType.name} defeats ${battleGround.Player2.playerName}'s ${battleGround.Player2.robotType.type} ${battleGround.Player2.robotType.name}!</h1></div>`);
  		}
  	}

  	//fades combat text
  	setInterval(() => {
    	$('#combatText').children().first().fadeOut(1000).remove();
  	}, 3000);

  	//call attack function
	$(".attackButton").click(function(e) {
    	attack();
  	});

	//called upon fight click
  	function setupBattleGroundScreen() {
  		$combatText.text("");
    	$player1Name.text(battleGround.Player1.playerName);
    	$player2Name.text(battleGround.Player2.playerName);
    	$('#robot1Type').html(`${battleGround.Player1.robotType.name}`);
    	$('#robot2Type').html(`${battleGround.Player2.robotType.name}`);
    	$('#player1Life').html(`${battleGround.Player1.robotType.life}`);
    	$('#player2Life').html(`${battleGround.Player2.robotType.life}`);
  	}

  	//click event for selecting robot 1
  	$(document).on("click", ".robotList1", function(e) {
    	let selectedRobot = $(this).text();
    	let player1Name = $("#player1Name").val();
    
    	var selectedrobot = new RobotWars.Garage[selectedRobot]();

    	RobotWars.Player1 = new RobotWars.Player(player1Name,selectedrobot);

    	$('#weaponList1').html(`${battleGround.Player1.robotType.name} Selected
    		<div class="dropdown">
  				<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" 	
  					data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    						Choose a Weapon
    				<span class="caret"></span>
  				</button>
  				<ul class="dropdown-menu" id="player1weapondropdown" aria-labelledby="dropdownMenu1">
    				<li><a href="#" class="weaponList1">Napalm</a></li>
    				<li><a href="#" class="weaponList1">Nuke</a></li>
   				<li><a href="#" class="weaponList1">Cannon</a></li>
   				<li><a href="#" class="weaponList1">Gun</a></li>
   				<li><a href="#" class="weaponList1">Torpedo</a></li>
  				</ul>
			</div><div id="weapon1Selected"></div>`);
			$(document).on("click", ".weaponList1", function(e){
				let selectedWeapon = $(this).text();
				var selectedweapon = new RobotWars.Armory[selectedWeapon]();

				RobotWars.weaponType = new selectedweapon();

				$('#weapon1Selected').html(`${battleGround.Player1.weaponType.weapon}`);				
			});

	});

  	//click event for selecting robot 2
  	$(document).on("click", ".robotList2", function(e) {
    	let selectedRobot = $(this).text();
    	let player2Name = $("#player2Name").val();
    
    	var selectedrobot = new RobotWars.Garage[selectedRobot]();
    	RobotWars.Player2 = new RobotWars.Player(player2Name,selectedrobot);

    	$('#weaponList2').html(`${battleGround.Player2.robotType.name} Selected 
    		<div class="dropdown">
  				<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" 	
  					data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    						Choose a Weapon
    				<span class="caret"></span>
  				</button>
  				<ul class="dropdown-menu" id="player2weapondropdown" aria-labelledby="dropdownMenu1">
    				<li><a href="#" class="weaponList2">Napalm</a></li>
    				<li><a href="#" class="weaponList2">Nuke</a></li>
   					<li><a href="#" class="weaponList2">Cannon</a></li>
   					<li><a href="#" class="weaponList2">Gun</a></li>
   					<li><a href="#" class="weaponList2">Torpedo</a></li>
  				</ul>
			</div>`);
			$(document).on("click", ".weaponList2", function(e){
				//select weapon code for player 2
			});

   	});

  	//click event for fight setup
  	$('#fightButton').on('click' , function(){

		$('#player-setup').addClass('hide');
		$('#battleground').removeClass('hide');
		setupBattleGroundScreen();

	});

  	
  	//reset button
	$('#resetButton').on('click' , function(){

		$('#battleground').addClass('hide');
		$('#player-setup').removeClass('hide');

	});



});

return battleGround;
})(RobotWars || {});