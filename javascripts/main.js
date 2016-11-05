"use strict";

var RobotWars = (function () {
  return null;
});

// let Gun = () =>{
//   this.damage = 10;
// } 

// let Flamethrower = () => {
//   this.damage = 400;
// }

// let Bubbles = () => {
//   this.damage = 10000;
// }

// let Robot = () => {
  // this.baseDamage = Math.floor(Math.random() * 10);
  // this.life = 100;
  // this.weapon = null;
// }

// let GroundRobot = () => {
//   this.attackType = "Ground Based";
// }
// GroundRobot.prototype = new Robot();

// let AerialRobot = () => {
//   this.type = "Flyer";
//   this.attackType = "Aerial";
// }
// AerialRobot.prototype = new Robot();

// let WalkerRobot = () => {
//   this.type = "Walker";
//   this.baseDamage += 5;
// }
// WalkerRobot.prototype = new GroundRobot();

// let ATVRobot = () => {
//   this.type = "Wheeled/Tracked";
//   this.baseDamage += 10;
// }
// ATVRobot.prototype = new GroundRobot();


// //The robot list

// let NinjaDrone = () => {
//   this.baseDamage += 10;
// }
// NinjaDrone.prototype = new AerialRobot();


// let Raptor = () => {
//   this.baseDamage += 20;
// }
// Raptor.prototype = new AerialRobot();


// let Hulk = () => {
//   this.baseDamage += 145;
// }
// Hulk.prototype = new WalkerRobot();


// let Bigfoot = () => {
//   this.baseDamage += 15;
// }
// BigFoot.prototype = new WalkerRobot();

// let Thor = () => {
//   this.baseDamage += 200;
// }
// Thor.prototype = new WalkerRobot();

// let DoomTurtle = () => {
//   this.baseDamage += 200;
// }
// DoomTurtle.prototype = new ATVRobot();

// let Warthog = () => {
//   this.baseDamage += 200;
// }
// Warthog.prototype = new ATVRobot();

// let Rover = () => {
//   this.baseDamage += 200;
// }
// Rover.prototype = new ATVRobot();


// //attack function
// let Robot.prototype.attack = (target) => {
//   this.totalDamage = this.baseDamage + this.weapon.damage;
//   target.life -= this.totalDamage;
// }

// let raptor = new Raptor();
// raptor.weapon = new Bubbles();
// console.log("raptor", raptor.life);

// let smaug = new Thor();
// smaug.weapon = new Flamethrower();
// smaug.attack(raptor);
// console.log("raptor", raptor.life);

// // let Battleground = () => {

// // }

// console.log("smaug", smaug);