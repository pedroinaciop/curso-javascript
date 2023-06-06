let totnum = 5
let maiornum 
let menornum
let soma = 25
let media = 5.312515

function adicionar() {
    let tab = document.getElementById('seltab')
    let item = document.createElement('option') 
    var num = document.getElementById('inum')
    
    var num = Number(num.value)

     for (let i = 0; i < 10; i++) {
        let myArray = [i]
        item.text = `Valor ${myArray[i]} adicionado.` 
        item.value = `${myArray[i]}` 
        tab.appendChild(item)
     }

}

function finalizar() {
    var res = window.document.getElementById('res')

    res.innerHTML = `<p>Ao todo, temos ${totnum} números cadastrados
                    <p>O maior valor informado foi ${maiornum(Math.max(...myArray))}
                    <p>O menor valor informado foi ${menornum(Math.min(...myArray))}
                    <p>Somando todos os valores, temos ${soma}
                    <p>A média dos valores digitados é ${media}.</p>`
}

