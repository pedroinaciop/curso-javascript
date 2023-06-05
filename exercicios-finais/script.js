let array

function adicionar() {
    let tab = document.getElementById('seltab')
    let item = document.createElement('option') 
    var num = document.getElementById('inum')
    
    var num = Number(num.value)
    
    for (array = 0; array < 10 ; array++) {
        item.text = `Valor ${num} adicionado.` 
        item.value = `${num[array]}` 
        tab.appendChild(item)
    }      
}

function finalizar() {
    var res = window.document.getElementById('res')

    res.innerHTML = `Ao todo, temos 7 números cadastrados.`
    res.innerHTML = `O maior valor informado foi`
    res.innerHTML = `O menor valor informado foi `
    res.innerHTML = `A soma de todos os valores foi`
    res.innerHTML = `A média dos valores digitados é ` 
}

