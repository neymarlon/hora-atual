function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sÃ£o ${hora} horas`
    var boa = window.document.getElementById('boa')
    
    if (hora >= 0 && hora < 12) {
        boa.innerHTML = `ð» bom dia ð»`
        img.src = 'morning.png'
        document.body.style.background = '#FFD700'

    } else if ( hora >= 12 && hora < 18) {
        boa.innerHTML = `ð boa tarde ð`
        img.src = 'sunset.png'
        document.body.style.background = '#FF8C00'

    } else {     
        boa.innerHTML = `ð boa noite ð`
        img.src = "night.png"
        document.body.style.background = '#4169E1'

    }
}