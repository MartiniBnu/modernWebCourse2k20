function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  //const comprarTv32 = !!(trabalho1 ^ trabalho2) // Ou Exclusivo, bitwise xor
  const comprarTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete // Operador un�rio

  return { sorvete: comprarSorvete, tv50: comprarTv50, tv32: comprarTv32, saudavel: manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))