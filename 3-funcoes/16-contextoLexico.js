const valor = 'Global'

function minhaFuncao() {
  console.log(valor)
}

function exec() {
  const valor = 'Local'
  minhaFuncao()
}

// Imprimi Global pq ele usa a que a minhaFuncao t� vendo, ou seja, a Global
exec()