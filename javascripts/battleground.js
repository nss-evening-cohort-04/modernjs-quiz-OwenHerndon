"use strict";

var RobotWars = (function (battleground){

let selectedRobot = null;

let BattleGround = function() {
  this.player1 = null;
  this.player2 = null;
  this.battleText = [];
  this.player1InitialHealth = 0;
  this.player2InitialHealth = 0;
};

$(document).ready(function() {
	//attack function
	function attack() {
		Player1.totalDamage = this.baseDamage;
  		Player2.life -= Player1.totalDamage;
  		Player2.totalDamage = this.baseDamage;
  		Player1.life -= Player2.totalDamage;
  		console.log("damage", this.baseDamage);
  		$combatText.append(`<div>${battleGround.Player1.playerName} hits for ${battleGround.Player1.totalDamage} damage.</div>`);
  		$combatText.append(`<div>${battleGround.Player2.playerName} hits for ${battleGround.Player2.totalDamage} damage.</div>`);
  }

	$(".attackButton").click(function(e) {
    	attack();
  	});

  	function setupBattleGroundScreen() {
    	$player1Name.text(battleGround.Player1.toString());
    	$player2Name.text(battleGround.Player2.toString());
    	$('#player1Life').html(`${battleGround.player1.life}`);
    	$('#player2Life').html(`${battleGround.player2.life}`);
  	}


  $(document).on("click", ".robotList1", function(e) {
    let selectedRobot = $(this).text();
    let player1Name = $("#player1Name").val()
    
    console.log(`${selectedRobot} selected`);
    console.log("player1 name", player1Name);
    var selectedrobot = new RobotWars.Garage[selectedRobot];
	});

  $(document).on("click", ".robotList2", function(e) {
    let selectedRobot = $(this).text();
    let player2Name = $("#player2Name").val()
    
    console.log(`${selectedRobot} selected`);
    console.log("player2 name", player2Name);
    var selectedrobot = new RobotWars.Garage[selectedRobot];
	});




});

return battleground;
})(RobotWars || {});