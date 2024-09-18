alert("Calculo IMC")

var peso= Number(prompt("Digite seu peso"))
var altura= Number(prompt("Digite sua altura"))

var quadrado= altura*altura

var imc= peso/quadrado

if(imc<18.5){

    alert("Magreza")
}

else if(imc>=18.5 && imc<=24.9){

    alert("Normal")

}

else if(imc>=25.0 && imc<=29.9){

alert("Sobrepeso")

}

else if(imc>=30.0 && imc<=39.9){

alert("Obesidade")

}

else{

alert("Obesidade grave ")


}