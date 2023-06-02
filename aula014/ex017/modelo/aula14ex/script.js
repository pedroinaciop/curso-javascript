function tabuada() {
    var number = document.getElementById('txtnumber')
    var tab = document.getElementById('seltab')

    if (number.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(number.value)
        var c = 1
        tab.innerHTML = ''
        for (c; c < 11; c++) {
            var item = document.createElement('option') 
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `tab${c}`  
            tab.appendChild(item)    
        }
    }
}