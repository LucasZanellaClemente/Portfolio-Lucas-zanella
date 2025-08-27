const nome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");
const telefone = "5511989422080"
const texto = `Olá, me chamo ${nome}, ${mensagem}`

const msgFormatada = encodeURIComponent(texto) 

const url = `https://whatsa.me/5511989422080/?t=${msgformatada}`

window.open(url, '_blank')

