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
