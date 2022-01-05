const contadorA = require('./09_instanciaUnica')
const contadorB = require('./09_instanciaUnica')

const contadorC = require('./10_instanciaNova')()
const contadorD = require('./10_instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // 3 3

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // 3 1