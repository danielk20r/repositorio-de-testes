// var nome = prompt("Escreve o Teu nome para uma melhor experiencia");
//       alert('Bem vindo ao meu site, ' + nome + '!')

// function mudouTamanho (){
//     if (window.innerWidth >= 768) {
//         itens.style.display = 'block'
//     } else {
//         itens.style.display = 'none'
//     }
// }

// function clickMenu () {
//     if (itens.style.display == 'block') {
//         itens.style.display = 'none'
//         } else {
//             itens.style.display = 'block'
//         }
// }


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

function mostrarContactos() {
        contactos.style.display = 'block'
}

function ocultar() {
    contactos.style.display = 'none'
}
