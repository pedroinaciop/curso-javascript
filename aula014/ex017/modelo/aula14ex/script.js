var number = document.getElementById('txtnumber')
var list = document.getElementById('txtlist')
var res = document.querySelector('div#res')

function tabuada() {
    var numero = Number(number.value)


    document.getElementById('txtlist').value = (`
    ${numero} x 1 = ${numero * 1}
    ${numero} x 2 = ${numero * 2}
    ${numero} x 3 = ${numero * 3}
    ${numero} x 4 = ${numero * 4}
    ${numero} x 5 = ${numero * 5}
    ${numero} x 6 = ${numero * 6}
    ${numero} x 7 = ${numero * 7}
    ${numero} x 8 = ${numero * 8}
    ${numero} x 9 = ${numero * 9}
    ${numero} x 10 = ${numero * 10}`)
}