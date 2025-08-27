function enviarwhats(event) {

    event.preventDefault()
    debugger
    const nome = document.getElementById("Nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5511989422080"
    const texto = `Olá, me chamo ${nome}, ${mensagem}`

    const msgFormatada = encodeURIComponent(texto)
    debugger
    const url = `https://wa.me/${telefone}/?text=${msgFormatada}`

    window.open(url, '_blank')

}
