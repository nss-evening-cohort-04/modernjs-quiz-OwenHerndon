"use strict";

var RobotWars = (function (battleground){

$(document).ready(function() {
		// //attack function
		let Robot.prototype.attack = (target) => {
  			this.totalDamage = this.baseDamage + this.weapon.damage;
  			target.life -= this.totalDamage;
		}

		
});

return battleground;
})(RobotWars || {});