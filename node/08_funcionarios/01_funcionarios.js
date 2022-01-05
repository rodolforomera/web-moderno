const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func: funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //Mulher chinesa com o menor salário? 
    /*const menorSalario = (previousValue, currentValue) => {
        if(currentValue.salario < previousValue.salario) previousValue = currentValue
        return previousValue
    }

    console.log(
        funcionarios
            .filter(r => r.pais === 'China' && r.genero === 'F')
            .reduce(menorSalario));*/
    
   const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)
})

