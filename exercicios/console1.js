let cpf = '395.640.248-03'
let cpfatualizado = cpf.replace(/\D+/g, '').replace('-','')
console.log(cpfatualizado)