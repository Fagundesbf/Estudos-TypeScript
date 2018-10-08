"use strict";
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------USANDO FUNÇÕES------------- ---------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
exports.__esModule = true;
// let message: string = "Me ajude, Obi-Wan Kenobi. Voces São meus only hope"
// console.log(message)
// let episode: number = 4
// console.log("Este é o episodio " + 4)
// episode = episode + 1
// console.log("Proximo episode é " + episode)
// let favoriteDroid: string
// favoriteDroid = 'BB-8'
// console.log("Meu Android Favorito é " + favoriteDroid)
// //9- AULA 
// //USANDO FUNÇÕES 
// let isEnoughToBeatMF = function (parsecs: number): boolean {
//     return parsecs < 12
// }
// let distance = 11 
// console.log(`Is ${distance} parsecs enough to beat Millennium Falcon ? ${isEnoughToBeatMF(distance) ? 'YES' :'NO'}`)
// let call = (name:string) => console.log(`Do you copy,${name}?`)
// call('R2')
// //PARAMETROS PADROES 
// function inc (speed:number, inc:number = 1):number{
//     return speed + inc
// }
// //MODELO 1
// console.log(`inc (5,1) = ${inc(5,1)}`)
// //MODELO 2
// console.log(`inc (5) = ${inc (5)}`)
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------USANDO CLASSES E INTERFACES ---------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples,", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 1; };
console.log("is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
