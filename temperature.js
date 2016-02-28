"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*((f(a(h(r(e(n(h(e(i(t)?)?)?)?)?)?)?)?)?)|(c(e(l(s(i(u(s)?)?)?)?)?)?))\s*$/i;
  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var e = m[2];
    var type = m[3];
    num = parseFloat(num);
    if(m[2]!==undefined){

      e = parseInt(e);
      var final;
          
      if(e<0){
        e = -e;
        final = num / (10*e);
      }
      else{
        final = num * (10*e);
      }

      
      if (type.charAt(0) == 'c' || type.charAt(0) == 'C') {
        result = (final * 9/5)+32;
        result = result.toFixed(1)+" Farenheit"
      }
      else {
        result = (final - 32)*5/9;
        result = result.toFixed(1)+" Celsius"
      }
    }
      
    else{
      if (type.charAt(0) == 'c' || type.charAt(0) == 'C') {
        result = (num * 9/5)+32;
        result = result.toFixed(1)+" Farenheit"
      }
      else {
        result = (num - 32)*5/9;
        result = result.toFixed(1)+" Celsius"
      }
    }
    
    
    converted = alert(result);
  }
  else {
    converted = alert("ERROR! Prueba con algo como esto '-4.2C' ");
  }
}