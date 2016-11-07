"use strict";

var RobotWars = (function (players){

	players.Player = function(name, robotType) {
		this.playerName = name || "Robot";
		this.robotType = robotType;
	};

	players.Player1 = {};


	players.Player2 = {};

	return players;
})(RobotWars || {});