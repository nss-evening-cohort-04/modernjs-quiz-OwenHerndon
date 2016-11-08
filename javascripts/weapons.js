"use strict";

var RobotWars = (function (weaponChoice){

weaponChoice.Armory = {};

weaponChoice.Armory.WeaponType = function() {
  this.weapon = "";
  this.damage = 0;
};

weaponChoice.Armory.WeaponType.Gun = function() {
  this.weapon = "Gun";
  this.damage = 100;
};
weaponChoice.Armory.WeaponType.Gun.prototype = new weaponChoice.Armory.WeaponType();

weaponChoice.Armory.WeaponType.Napalm = function () {
  this.weapon = "Napalm";
  this.damage = 400;
};
weaponChoice.Armory.WeaponType.Napalm.prototype = new weaponChoice.Armory.WeaponType();

weaponChoice.Armory.WeaponType.Torpedo = function() {
  this.weapon = "Torpedo";
  this.damage = 600;
};
weaponChoice.Armory.WeaponType.Torpedo.prototype = new weaponChoice.Armory.WeaponType();

weaponChoice.Armory.WeaponType.Cannon = function () {
  this.weapon = "Cannon";
  this.damage = 300;
};
weaponChoice.Armory.WeaponType.Cannon.prototype = new weaponChoice.Armory.WeaponType();

weaponChoice.Armory.WeaponType.Nuke = function () {
  this.weapon = "Nuke";
  this.damage = 1000000;
};
weaponChoice.Armory.WeaponType.Nuke.prototype = new weaponChoice.Armory.WeaponType();

return weaponChoice;
})(RobotWars || {});






