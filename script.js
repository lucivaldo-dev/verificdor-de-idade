function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/crianca-mno.png')
                genero = 'uma Criança menino'
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-h.png')
                genero = 'um Jovem homem'
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto.png')
                genero = 'um Adulto'
            } else {
                img.setAttribute('src', 'img/idoso.png')
                genero = 'um Idoso'
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/crianca-mna.png')
                genero = 'uma Criança menina'
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-m.png')
                genero = 'uma Jovem mulher'
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulta.png')
                genero = 'uma adulta'
            } else {
                img.setAttribute('src', 'img/idosa.png')
                genero = 'uma Idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}