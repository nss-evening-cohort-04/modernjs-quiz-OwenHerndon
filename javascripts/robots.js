"use strict";

var RobotWars = (function (robotChoice){

robotChoice.Garage = {};

robotChoice.Garage.RobotType = function() {
  this.name = "";
  this.baseDamage = Math.floor(Math.random() * 10);
  this.life = 1000;

  this.toString = function() {
    return this.name;
  };
};

//air type
robotChoice.Garage.Mustang = function() {
  this.baseDamage += 10;
};
robotChoice.Garage.Mustang.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.B52 = function() {
  this.baseDamage += 20;
};
robotChoice.Garage.B52.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Zero = function() {
  this.baseDamage += 50;
};
robotChoice.Garage.Zero.prototype = new robotChoice.Garage.RobotType();

//ground type
robotChoice.Garage.Sherman = function() {
  this.baseDamage += 150;
};
robotChoice.Garage.Sherman.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Tiger = function() {
  this.baseDamage += 200;
};
robotChoice.Garage.Tiger.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.IS7 = function() {
  this.baseDamage += 300;
};
robotChoice.Garage.IS7.prototype = new robotChoice.Garage.RobotType();

//water type
robotChoice.Garage.Destroyer = function() {
  this.baseDamage += 100;
};
robotChoice.Garage.Destroyer.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Cruiser = function() {
  this.baseDamage += 500;
};
robotChoice.Garage.Cruiser.prototype = new robotChoice.Garage.RobotType();

robotChoice.Garage.Battleship = function() {
  this.baseDamage += 1000;
};
robotChoice.Garage.Battleship.prototype = new robotChoice.Garage.RobotType();


return robotChoice;
})(RobotWars || {});