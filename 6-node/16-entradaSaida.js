const anonimo = process.argv.indexOf('-a') !== -1 

if (anonimo) {
    process.stdout.write('fala anonimo!\n')
    process.exit()
}else {
  process.stdout.write('Informe o seu nome: ')
  // Pega teclado
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n','')
    process.stdout.write(`Fala ${nome}!!\n`)
    process.exit()
  }) 
}
