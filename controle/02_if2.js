function teste1(num) {
    if (num > 7)
        console.log(num);

    console.log('Final');
}

 teste1(6); // final
 teste1(8); // 8 final

function teste2(num) {
    if (num > 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log(num);
    }
}

teste2(6); // 6
teste2(8); // 8