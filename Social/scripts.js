  function carregar() {
  let saudacao = document.getElementById('saudacaoo')
  let backCores = document.getElementById('headerCores')
  let horas = new Date()
  let h = horas.getHours()
   if (h > 6 && h < 13) {
    saudacao.innerHTML = `Bom dia, seja bem vindo`
    backCores.style.backgroundImage = 'linear-gradient(186deg, yellow, rgb(96, 191, 223), black, black)'
   } else if (h >= 13 && h < 20) {
    saudacao.innerHTML = `Boa Tarde, seja bem vindo`
    backCores.style.backgroundImage = 'linear-gradient(186deg, rgb(255, 153, 0), rgb(63, 94, 182), black, black)'
   } else if (h >= 20 && h <= 23) {
    backCores.style.backgroundImage = 'linear-gradient(186deg, rgb(14, 0, 14), rgb(49, 0, 49), black, black)'
     saudacao.innerHTML = `Boa noite, seja bem vindo`
   } else {
    backCores.style.backgroundImage = 'linear-gradient(186deg, rgb(34, 0, 34), rgb(20, 0, 20), black, black)'
      saudacao.innerHTML = `Boa madrugada, seja bem vindo`
   }
}

function mostrarFuncao() {
  let mFuncao = document.getElementById('funcao')
  mFuncao.innerHTML = ('function nuncaDesistir (Daniel) {<br><br> let foco = 0<br> let determinacao = 0<br> let ambicao = 0<br><br> for (let i = 0; i <= infity; i++){ <br> foco++<br>determinacao++ <br> ambicao++ <br> }<br> }')
}

function esconderFuncao() {
  let mFuncao = document.getElementById('funcao')
  mFuncao.innerHTML = ''
}


