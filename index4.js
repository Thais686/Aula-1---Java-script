alert("Calculadora")

var operacoes= prompt("Digite: \n 1 - Calculo de adição \n 2- Calculo de subtracao\n 3- Calculo de multiplicacao \n 4- Calculo da divisao")

if(operacoes==1) {


   var num1= Number(prompt("Digite o primeiro numero"))
   var num2= Number( prompt("Digite o segundo numero"))


   var adicao= num1+num2

   alert(adicao)

}

else if(operacoes==2) {


    var num1= Number(prompt("Digite o primeiro numero"))
    var num2= Number( prompt("Digite o segundo numero"))
 
 
    var subtracao= num1-num2
 
    alert(subtracao)
 
 }

 else if(operacoes==3) {


    var num1= Number(prompt("Digite o primeiro numero"))
    var num2= Number( prompt("Digite o segundo numero"))
 
 
    var multiplicacao= num1*num2
 
    alert(multiplicacao)
 
 }

  else if(operacoes==4) {


    var num1= Number(prompt("Digite o primeiro numero"))
    var num2= Number( prompt("Digite o segundo numero"))
 
 
    var divisao= num1/num2
 
    alert(divisao)
 
 }

else{


    alert("Numero invalido ")


}
 