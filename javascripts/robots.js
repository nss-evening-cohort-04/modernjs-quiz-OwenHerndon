"use strict";

var RobotWars = (function (robotChoice){

robotChoice.Garage = {};

robotChoice.Garage.RobotType = function() {
  this.name = "";
  this.baseDamage = Math.floor(Math.random() * 100);
  this.life = 1000;

  this.toString = function() {
    return this.name;
  };
};

//air type
robotChoice.Garage.Mustang = function() {
  	this.baseDamage += 10;
  	this.name = "Mustang";
};
robotChoice.Garage.Mustang.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.B52 = function() {
  	this.baseDamage += 20;
   	this.name = "B52";
};
robotChoice.Garage.B52.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Zero = function() {
  	this.baseDamage += 50;
   	this.name = "Zero";
};
robotChoice.Garage.Zero.prototype = new robotChoice.Garage.RobotType();

//ground type
robotChoice.Garage.Sherman = function() {
  	this.baseDamage += 150;
   	this.name = "Sherman";
};
robotChoice.Garage.Sherman.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Tiger = function() {
  	this.baseDamage += 200;
   	this.name = "Tiger";
};
robotChoice.Garage.Tiger.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.IS7 = function() {
  	this.baseDamage += 300;
   	this.name = "IS7";
};
robotChoice.Garage.IS7.prototype = new robotChoice.Garage.RobotType();

//water type
robotChoice.Garage.Destroyer = function() {
  	this.baseDamage += 100;
   	this.name = "Destroyer";
};
robotChoice.Garage.Destroyer.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Cruiser = function() {
  	this.baseDamage += 500;
   	this.name = "Cruiser";
};
robotChoice.Garage.Cruiser.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Battleship = function() {
  	this.baseDamage += 1000;
   	this.name = "Battleship";
};
robotChoice.Garage.Battleship.prototype = new robotChoice.Garage.RobotType();


return robotChoice;
})(RobotWars || {});