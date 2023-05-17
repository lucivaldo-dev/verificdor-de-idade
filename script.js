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
                img.setAttribute('src', 'img/criancamenino.png')
                genero = 'Criança menina'
            } else if (idade < 21) {
                // Falta coletar imagem do jovem
                genero = 'Jovem Homem'
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homemadulto.png')
                genero = 'Adulto'
            } else {
                img.setAttribute('src', 'img/idoso.png')
                genero = 'Idoso'
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/criancamenina.png')
                genero = 'Criança menina'
            } else if (idade < 21) {
                // Falta coletar imagem de jovem
                img.setAttribute('src', '')
                genero = 'Jovem mulher'
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulheradulta.png')
                genero = 'adulta'
            } else {
                img.setAttribute('src', 'img/idosa.png')
                genero = 'Idosa'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}