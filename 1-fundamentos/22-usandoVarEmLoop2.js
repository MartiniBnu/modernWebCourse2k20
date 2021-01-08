const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function(){
    console.log('i=',i)
  })
}

// Vai usar sempre o valor de 10
funcs[2]()
funcs[8]()