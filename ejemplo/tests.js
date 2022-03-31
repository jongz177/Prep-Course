/*function descendingOrder (n){
    var numberSplit = n.toString().split(``); // Split the
    var sorting = numberSplit.sort(function(a, b){
        return b-a;
    })
    var joinArray = sorting.join(``);
    var finalDigits = parseInt(joinArray);
    return finalDigits;
}*/

//console.log(descendingOrder(145263));


  //Best practices solution
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }
/*
 function descendingOrder(n) {
    return parseInt(n.toString().split("").sort().reverse().join(""));
  }*/

  

  //_______Exercise 2_________



function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var signo = "!";
  return str + signo;
}
console.log(agregarSimboloExclamacion("hola"));