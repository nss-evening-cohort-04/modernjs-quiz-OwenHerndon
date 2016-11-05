"use strict";

var RobotWars = (function (players){

players.Combatants.Player = function(name) {

  this.playerName = name || "Robot";
  //this.robotType = robotType;
  };
};

players.Combatants.Player1 = function(player1Name, robotType) {
  this.playerName = player1Name;
  this.robotType = robotselected;
};
players.Combatants.Player1.prototype = new players.Combatants.Player();


players.Combatants.Player2 = function(player2Name, robotType) {
	this.playerName =player2Name;
	this.robotType = robotselected;

};
players.Combatants.Player2.prototype = new players.Combatants.Player();

	return players;
})(RobotWars || {});