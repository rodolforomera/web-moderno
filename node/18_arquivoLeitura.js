const fs = require('fs')

const caminho = __dirname + '/17_arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) // localhost:5432
})

const config = require('./17_arquivo.json');
console.log(config.db) // { host: 'localhost', port: 5432, user: 'usuario', pass: '123456' }

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})