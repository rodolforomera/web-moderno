function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1); // Aprovado com 8.1'
soBoaNoticia(6.1); // 

function seForVerdadeEuFalo(valor) { 
    if (valor) {
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeEuFalo(); // 
seForVerdadeEuFalo(null); // 
seForVerdadeEuFalo(undefined); //
seForVerdadeEuFalo(NaN); // 
seForVerdadeEuFalo(''); // 
seForVerdadeEuFalo(0); // 
seForVerdadeEuFalo(-1); // É verdade... -1
seForVerdadeEuFalo(' '); // É verdade... 
seForVerdadeEuFalo('?'); // É verdade... ?
seForVerdadeEuFalo([]); // É verdade... 
seForVerdadeEuFalo([1, 2]); // É verdade... 1,2
seForVerdadeEuFalo({}); // É verdade... [object Object]
