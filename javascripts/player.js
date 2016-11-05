"use strict";

var RobotWars = (function (players){

player.Combatants.Player = function(name) {

  this.playerName = name || "Robot";
  this.health = Math.floor(Math.random() * 40 + 150);

  this.toString = function() {
    var output = this.playerName;
    
    return output;
  };
};

player.Combatants.Player1 = function() {
  this.playerName = name;
};
player.Combatants.Player1.prototype = new player.Combatants.Player();


player.Combatants.Player2 = function() {
	this.playerName = name;
};
player.Combatants.Player2.prototype = new player.Combatants.Player();

	return players;
})(RobotWars || {});