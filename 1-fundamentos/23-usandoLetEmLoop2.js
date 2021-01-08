const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function(){
    console.log('i=',i)
  })
}

// Ler vai respeitar o valor atual
funcs[2]()
funcs[8]()