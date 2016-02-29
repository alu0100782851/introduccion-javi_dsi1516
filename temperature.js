"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^(\s)*([-+]?\d+(?:\.\d*)?([e][-+]?\d+)?)\s*((f(a(h(r(e(n(h(e(i(t)?)?)?)?)?)?)?)?)?)|(c(e(l(s(i(u(s)?)?)?)?)?)?))\s*$/i;
  
  var m = temp.match(regexp);
  
  if (m) {
    var num = m[2];   // Se guarda el valor
    var type = m[4];  // Se guarda el tipo
    num = parseFloat(num);
    
    // Hay que cambiarlo para revisar el primer caracter de la cadena,
    // con charAt() ya que ahora podemos definir el tipo no sólo por 
    // la inicial de la unidad de medida
    if (type.charAt(0) == 'c' || type.charAt(0) == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
   return false;
}