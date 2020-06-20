






var inputNum1 = document.getElementById('teste-1')
var inputNum2 = document.getElementById('teste-2')
var inputNum3 = document.getElementById('teste-3')
var resultado = document.getElementById('resultado')


//Aqui está a variável onde iremos colocar o histórico:
var store = ""


document.getElementById('btn').addEventListener('click', function(){
  var inputVal1 = parseInt(inputNum1.value)
  var inputVal2 = parseInt(inputNum2.value)
  var inputVal3 = parseInt(inputNum3.value)


  

  if(inputVal1 == inputVal2 - 1 && inputVal1 == inputVal3 - 2){

    // aqui eu adiciono a variável store o resultado e adiciono ao final todos os outros
    // resultados antes dessa operação.

    store =  "<div class='alert alert-success'><p style='width: 300px'> Os 3 valores: "+
     
     inputVal1 +", "+
     inputVal2+" e "+
     inputVal3
     
     +" são consecutivos e estão em ordem crescente! </p></div>" 
     +  store 
  }
  else{
    // aqui eu adiciono a variável store o resultado e adiciono ao final todos os outros
    // resultados antes dessa operação.

    store =   "<div class='alert alert-danger'><p> Valores: "
    + 
     
     inputVal1 +", "+
     inputVal2+" e "+
     inputVal3
     
     +" invalidos, tente novamente. </p></div>"
     + store 
  }

  // Aqui eu escrevo no código html através do innerHTML
  resultado.innerHTML = store

  // Lógica para definir quem são os inteiros consecutivos.
  // x - parametro
  // x+1 - (parametro - 1)
  // x+2 - (parametro - 2)

})