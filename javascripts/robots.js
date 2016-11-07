"use strict";

var RobotWars = (function (robotChoice){

robotChoice.Garage = {};

robotChoice.Garage.RobotType = function() {
  this.name = "";
  this.baseDamage = Math.floor(Math.random() * 100);
  this.life = Math.floor(Math.random() * 5000);

  this.toString = function() {
    return this.name;
  };
};

//three types to edit in!

// robotChoice.Garage.RobotType.GroundRobot = () => {
//   this.attackType = "Ground Based";
//   //this.baseDamage += 10;
// };
// robotChoice.GroundRobot.prototype = new robotChoice.Garage.RobotType();

// robotChoice.Garage.RobotType.AerialRobot = () => {
//   //this.type = "Flyer";
//   this.attackType = "Aerial";
// };
// robotChoice.AerialRobot.prototype = new robotChoice.Garage.RobotType();

// robotChoice.Garage.RobotType.WaterRobot = () => {
//   this.attackType = "Water";
//   //this.baseDamage += 5;
// };
// robotChoice.WaterRobot.prototype = new robotChoice.Garage.RobotType();


//air type
robotChoice.Garage.Mustang = function() {
  	this.baseDamage += 10;
  	this.name = "Mustang";
  	this.life += 50;
  	this.type = "Flyer";
};
robotChoice.Garage.Mustang.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.B52 = function() {
  	this.baseDamage += 20;
   	this.name = "B52";
   	this.life += 300;
   	this.type = "Flyer";
};
robotChoice.Garage.B52.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Zero = function() {
  	this.baseDamage += 50;
   	this.name = "Zero";
   	this.life += 150;
   	this.type = "Flyer";
};
robotChoice.Garage.Zero.prototype = new robotChoice.Garage.RobotType();

//ground type
robotChoice.Garage.Sherman = function() {
  	this.baseDamage += 150;
   	this.name = "Sherman";
   	this.life += 150;
   	this.type = "Tank";
};
robotChoice.Garage.Sherman.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Tiger = function() {
  	this.baseDamage += 200;
   	this.name = "Tiger";
   	this.life += 250;
   	this.type = "Tank";
};
robotChoice.Garage.Tiger.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.IS7 = function() {
  	this.baseDamage += 300;
   	this.name = "IS7";
   	this.life += 450;
   	this.type = "Tank";
};
robotChoice.Garage.IS7.prototype = new robotChoice.Garage.RobotType();

//water type
robotChoice.Garage.Destroyer = function() {
  	this.baseDamage += 100;
   	this.name = "Destroyer";
   	this.life += 100;
   	this.type = "Ship";
};
robotChoice.Garage.Destroyer.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Cruiser = function() {
  	this.baseDamage += 500;
   	this.name = "Cruiser";
   	this.life += 400;
   	this.type = "Ship";
};
robotChoice.Garage.Cruiser.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Battleship = function() {
  	this.baseDamage += 500;
   	this.name = "Battleship";
   	this.life += 500;
   	this.type = "Ship";
};
robotChoice.Garage.Battleship.prototype = new robotChoice.Garage.RobotType();


//weapons to add
function Gun () {
  this.damage = 10;
}

function Flamethrower () {
  this.damage = 400;
}

function Torpedo () {
  this.damage = 600;
}

function Cannon () {
  this.damage = 300;
}

function Bomb () {
  this.damage = 250;
}

return robotChoice;
})(RobotWars || {});