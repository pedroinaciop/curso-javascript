function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] 01 - Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'child-boy.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'young-boy.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'man.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'old-man.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'child-girl.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'young-girl.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'woman.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'old-woman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}