require('./12_global')

console.log(global.MinhaApp.saudacao()) // Estou em todos os lugares!
console.log(MinhaApp.saudacao()) // Estou em todos os lugares!

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) // Sistema Legal! (Pois foi usado o Object.freeze no 12_global.js)