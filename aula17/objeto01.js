let amigo = {nome: 'José', 
sexo: 'M', 
peso: 59.3,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`) 