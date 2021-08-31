const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar(); // Bom dia!
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO (undefined)

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // Bom dia!