"use strict";

var RobotWars = (function (players){

	players.Player = function(name, robotType, weaponType) {
		this.playerName = name || "Robot";
		this.robotType = robotType;
		this.weaponType = weaponType;
	};

	players.Player1 = {};


	players.Player2 = {};

	return players;
})(RobotWars || {});