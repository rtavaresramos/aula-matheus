






var inputNum1 = document.getElementById('teste-1')

var resultado = document.getElementById('resultado')


//Aqui está a variável onde iremos colocar o histórico:
var store = ""
var verifica1 = 0
var verifica2 = 0

document.getElementById('btn').addEventListener('click', function(){
  var cpf = parseInt(inputNum1.value)
  var Digito1 = parseInt(inputNum1.value.slice(0,1))
  var Digito2 = parseInt(inputNum1.value.slice(1,2))
  var Digito3 = parseInt(inputNum1.value.slice(2,3))
  var Digito4 = parseInt(inputNum1.value.slice(3,4))
  var Digito5 = parseInt(inputNum1.value.slice(4,5))
  var Digito6 = parseInt(inputNum1.value.slice(5,6))
  var Digito7 = parseInt(inputNum1.value.slice(6,7))
  var Digito8 = parseInt(inputNum1.value.slice(7,8))
  var Digito9 = parseInt(inputNum1.value.slice(8,9))
  var Digito10 = parseInt(inputNum1.value.slice(9,10))
  var Digito11 = parseInt(inputNum1.value.slice(10))
  
  
  var valida1 = Digito1 * 10
  var valida2 = Digito2 * 9
  var valida3 = Digito3 * 8
  var valida4 = Digito4 * 7
  var valida5 = Digito5 * 6
  var valida6 = Digito6 * 5
  var valida7 = Digito7 * 4
  var valida8 = Digito8 * 3
  var valida9 = Digito9 * 2

  var resultado1 = valida1 + valida2 + valida3 + valida4 + valida5 +
  valida6 + valida7 + valida8 + valida9 

  function validaDigito10(valor){
    if(valor%11 == 0 || valor%11 ==1){
      verifica1 = 0
    }else{
      verifica1 = 11 - valor%11
    }
  }
  
  validaDigito10(resultado1)
  console.log(verifica1)

  validaDigito1 = Digito1 * 11
  validaDigito2 = Digito2 * 10
  validaDigito3 = Digito3 * 9
  validaDigito4 = Digito4 * 8
  validaDigito5 = Digito5 * 7
  validaDigito6 = Digito6 * 6
  validaDigito7 = Digito7 * 5
  validaDigito8 = Digito8 * 4
  validaDigito9 = Digito9 * 3
  validaDigito10 = Digito10 * 2

  var resultado2 = validaDigito1 + validaDigito2 + validaDigito3 + validaDigito4 + validaDigito5 +
  validaDigito6 + validaDigito7 + validaDigito8 + validaDigito9 + validaDigito10

  function validaDigito11(valor){
    if(valor%11 == 0 || valor%11 ==1){
      verifica2 = 0
    }else{
      verifica2 = 11 - valor%11
    }
  }
  validaDigito11(resultado2)





  // resultado.innerHTML = Digito1
  // resultado.innerHTML = Digito2
  // resultado.innerHTML = Digito3
  // resultado.innerHTML = Digito4
  // resultado.innerHTML = Digito5
  // resultado.innerHTML = Digito6
  // resultado.innerHTML = Digito7
  // resultado.innerHTML = Digito8
  // resultado.innerHTML = Digito9
  // resultado.innerHTML = Digito10
  // resultado.innerHTML = Digito11



  if(Digito10 == verifica1 && Digito11 == verifica2 ){

    // aqui eu adiciono a variável store o resultado e adiciono ao final todos os outros
    // resultados antes dessa operação.

    store =  "<div class='alert alert-success'><p style='width: 300px'> O cpf: "+
     
     cpf 
     +" é valido! </p></div>" 
     +  store 
  }
  else{
    // aqui eu adiciono a variável store o resultado e adiciono ao final todos os outros
    // resultados antes dessa operação.

    store =   "<div class='alert alert-danger'><p> O cpf: "+
     
    cpf 
    +" não é valido! </p></div>" 
    +  store 
  }

  // Aqui eu escrevo no código html através do innerHTML
  resultado.innerHTML = store

  // Lógica para definir quem são os inteiros consecutivos.
  // x - parametro
  // x+1 - (parametro - 1)
  // x+2 - (parametro - 2)
    
})