let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global); // true

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global); // false
comparaComThis(obj); // true

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global); // false
comparaComThisArrow(module.exports); // true

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // false - Não é possivel mudar a arrow function utilizando o bind. Não é possivel mudar o contexto da arrow function
comparaComThisArrow(module.exports); // true