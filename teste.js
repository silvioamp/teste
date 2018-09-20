const texto = "Coder santos"

console.log(texto.substring(0,3))
console.log(texto.charAt(3))
console.log(texto.indexOf('santos'))


var exibir = function(){
    var texto = "santos";
    console.log(texto);
}

exibir();

const pessoa = {
    nome:'Ana',
    idade: 5,
}

const {nome, idade} = pessoa
console.log(nome,idade)
