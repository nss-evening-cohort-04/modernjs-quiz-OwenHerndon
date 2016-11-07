"use strict";

var RobotWars = (function (robotChoice){

robotChoice.Garage = {};

robotChoice.Garage.RobotType = function() {
  this.name = "";
  //this.baseDamage = Math.floor(Math.random() * 100) + this.weapon.damage;
  this.baseDamage = Math.floor(Math.random() * 100);
  //this.life = Math.floor(Math.random() * 5000);
  this.life = 5000;
  this.weapon = null;

  this.toString = function() {
    return this.name;
  };
};

//three types to edit in!

robotChoice.Garage.RobotType.AerialRobot = function() {
  this.type = "Flying";
};
robotChoice.Garage.RobotType.AerialRobot.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.RobotType.GroundRobot = function () {
  this.type = "Tank";
};
robotChoice.Garage.RobotType.GroundRobot.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.RobotType.WaterRobot = function() {
  this.type = "WaterBased";
};
robotChoice.Garage.RobotType.WaterRobot.prototype = new robotChoice.Garage.RobotType();


//air type
robotChoice.Garage.Mustang = function() {
  	this.baseDamage += 10;
  	this.name = "Mustang";
  	this.life += 150;
  	//this.weapon = new Nuke();
};
robotChoice.Garage.Mustang.prototype = new robotChoice.Garage.RobotType.AerialRobot();

robotChoice.Garage.B52 = function() {
  	this.baseDamage += 20;
   	this.name = "B52";
   	this.life += 300;
};
robotChoice.Garage.B52.prototype = new robotChoice.Garage.RobotType.AerialRobot();

robotChoice.Garage.Zero = function() {
  	this.baseDamage += 50;
   	this.name = "Zero";
   	this.life += 250;
};
robotChoice.Garage.Zero.prototype = new robotChoice.Garage.RobotType.AerialRobot();

//ground type
robotChoice.Garage.Sherman = function() {
  	this.baseDamage += 150;
   	this.name = "Sherman";
   	this.life += 150;
};
robotChoice.Garage.Sherman.prototype = new robotChoice.Garage.RobotType.GroundRobot();

robotChoice.Garage.Tiger = function() {
  	this.baseDamage += 200;
   	this.name = "Tiger";
   	this.life += 250;
};
robotChoice.Garage.Tiger.prototype = new robotChoice.Garage.RobotType.GroundRobot();

robotChoice.Garage.IS7 = function() {
  	this.baseDamage += 300;
   	this.name = "IS7";
   	this.life += 450;
};
robotChoice.Garage.IS7.prototype = new robotChoice.Garage.RobotType.GroundRobot();

//water type
robotChoice.Garage.Destroyer = function() {
  	this.baseDamage += 100;
   	this.name = "Destroyer";
   	this.life += 100;
};
robotChoice.Garage.Destroyer.prototype = new robotChoice.Garage.RobotType.WaterRobot();

robotChoice.Garage.Cruiser = function() {
  	this.baseDamage += 500;
   	this.name = "Cruiser";
   	this.life += 400;
};
robotChoice.Garage.Cruiser.prototype = new robotChoice.Garage.RobotType.WaterRobot();

robotChoice.Garage.Battleship = function() {
  	this.baseDamage += 500;
   	this.name = "Battleship";
   	this.life += 500;
};
robotChoice.Garage.Battleship.prototype = new robotChoice.Garage.RobotType.WaterRobot();


//weapons to add
function Gun () {
  this.damage = 100;
}

function Napalm () {
  this.damage = 400;
}

function Torpedo () {
  this.damage = 600;
}

function Cannon () {
  this.damage = 300;
}

function Nuke () {
  this.damage = 1000000;
}

return robotChoice;
})(RobotWars || {});