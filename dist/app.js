var message = "Me ajude, Obi-Wan Kenobi. Voces São meus only hope";
console.log(message);
var episode = 4;
console.log("Este é o episodio " + 4);
episode = episode + 1;
console.log("Proximo episode é " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("Meu Android Favorito é " + favoriteDroid);
// AULA USANDO FUNÇÕES 
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
// TEMPLETE STRING ACTION SCRIPT, NAO SE USA"" E SIM A CRAZE `   ` DOLLAR E CHAVE 
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon ? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
