  function carregar() {
  let saudacao = document.getElementById('saudacaoo')
  let backCores = document.getElementById('headerCores')
  let horas = new Date()
  let h = horas.getHours()

   if (h > 6 && h < 13) {
    saudacao.innerHTML = `Bom dia, seja bem vindo`
    backCores.style.backgroundImage = 'linear-gradient(to top, black, rgb(118, 210, 238) 50%)'
   } else if (h >= 13 && h < 20) {
    saudacao.innerHTML = `Boa Tarde, seja bem vindo`
    backCores.style.backgroundImage = 'linear-gradient(to top, black, rgb(234, 97, 12) 50%)'
   } else if (h >= 20 && h < 23) {
    backCores.style.backgroundImage = 'linear-gradient(to top, black, rgb(47, 0, 98) 50%)'
     saudacao.innerHTML = `Boa noite, seja bem vindo`
   } else {
    backCores.style.backgroundImage = 'linear-gradient(to top, black, rgb(47, 0, 98) 50%)'
      saudacao.innerHTML = `Boa madrugada, seja bem vindo`
   }
}


