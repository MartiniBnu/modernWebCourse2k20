function teste1(num) {

  if (num > 7) {
    console.log(num)
  }
  console.log('Final')
}

teste1(6)
teste1(8)
teste1('9')

// o ; vai quebrar ali e não rodar o teste, na real o teste só irá valer até o ;
function teste2(num) {
  if (num > 7); {
    console.log(num)
  }
}

teste2(6)
teste2(8)