// var nome = prompt("Escreve o Teu nome para uma melhor experiencia");
//       alert('Bem vindo ao meu site, ' + nome + '!')

function escreverNome() {
let nome = prompt('Escreve o teu nome')
let escreverNome = document.getElementById('nomePessoa')
    if(nome === null) {
        escreverNome.innerHTML = `ao meu portfolio`
    } else if (nome===''){
        escreverNome.innerHTML = `ao meu portfolio`
    } else {
        escreverNome.innerHTML = `${nome}`
    }

}
