export const somar = function(...numeros){

  let s = 0
  for(let n of numeros){
      s = s + n
  }
console.log (s)
}

export const subtrair = function(...numeros){

  let s = 0
  for(let n of numeros){
      s = s - n
  }

console.log(s)
}

export const multiplicar = function(...numeros){

  let s = 0
  for(let n of numeros){
      s = s * n
  }
console.log(s)
}

export const dividir = function(...numeros){

  let s = 0
  for(let n of numeros){
    s  = s / n
  }
  console.log(s)
}

export default {

  somar,
  subtrair,
  multiplicar,
  dividir,
}
