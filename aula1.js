





var input = document.getElementById("input-1")
var btn = document.getElementById("form-btn")

btn.addEventListener('click', function(){

  var inputVal= input.value
  
 function somaMaisCinco(a){ 
   
  var somaInput = parseInt(a) + 5

  return somaInput
 }
  console.log(somaMaisCinco(inputVal))


})



