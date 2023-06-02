function contar() {

    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {   
        res.innerHTML = 'Impossível contar'
    } else {
        var start = Number(inicio.value)
        var end = Number(fim.value)
        var pass = Number(passo.value)
        if (pass <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            pass = 1
        }

        res.innerHTML = 'Contando: <br>'
        document.getElementById('res').value = ''
        document.getElementById('txtinicio').value = ''
        document.getElementById('txtfim').value = ''
        document.getElementById('txtpasso').value = ''

        if (start < end) { //Crescente
            for (var c = start; c <= end; c += pass) {
                res.innerHTML += c + '<span>&#128073;&#127995;</span>'
            }
        } else { //Decrescente
            for (var c = start; c >= end; c -= pass) {
                res.innerHTML += c + '<span>&#128073;&#127995;</span>'
            }
        }
        res.innerHTML += '<span>&#127987;</span>'
    }
}



