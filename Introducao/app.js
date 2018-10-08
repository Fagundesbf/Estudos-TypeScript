var message = "Me ajude, Obi-Wan Kenobi. Voces São meus only hope";
console.log(message);
var episode = 4;
console.log("Este é o episodio " + 4);
episode = episode + 1;
console.log("Proximo episode é " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("Meu Android Favorito é " + favoriteDroid);
//9- AULA 
//USANDO FUNÇÕES 
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon ? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy," + name + "?"); };
call('R2');
//PARAMETROS PADROES 
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
//MODELO 1
console.log("inc (5,1) = " + inc(5, 1));
//MODELO 2
console.log("inc (5) = " + inc(5));
