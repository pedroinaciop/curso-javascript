var inicio = window.document.getElementById('txtinicio')
var fim = window.document.getElementById('txtfim')
var passo = window.document.getElementById('txtpasso')
var res = document.querySelector('div#res')

function limpar() {
    res.innerHTML = 'Contando: <br>'
    document.getElementById('res').value = ''
    document.getElementById('txtinicio').value = ''
    document.getElementById('txtfim').value = ''
    document.getElementById('txtpasso').value = ''
}

function contar() {
    var start = Number(inicio.value)
    var end = Number(fim.value)
    var pass = Number(passo.value)

    for (var c = start; c <= end; c += pass) {
        if (c == null || pass == null || end == null) {
            res.innerHTML = 'Impossível contar!'
            document.getElementById('res').reset()
        }
        document.querySelector('div#res').innerHTML += c + '<span>&#128073;&#127995;</span>'
    }
    document.querySelector('div#res').innerHTML += '<span>&#127987;</span>'
}



