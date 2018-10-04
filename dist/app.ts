let message: string = "Me ajude, Obi-Wan Kenobi. Voces São meus only hope"
console.log(message)

let episode: number = 4


console.log("Este é o episodio " + 4)
episode = episode + 1
console.log("Proximo episode é " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("Meu Android Favorito é " + favoriteDroid)

//9- AULA 
//USANDO FUNÇÕES 

let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}

let distance = 11 
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon ? ${isEnoughToBeatMF(distance) ? 'YES' :'NO'}`)


let call = (name:string) => console.log(`Do you copy,${name}?`)
call('R2')

//PARAMETROS PADROES 
function inc (speed:number, inc:number = 1):number{
    return speed + inc
}
//MODELO 1
console.log(`inc (5,1) = ${inc(5,1)}`)
//MODELO 2
console.log(`inc (5) = ${inc (5)}`)

