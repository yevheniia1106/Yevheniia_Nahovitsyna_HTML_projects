// JavaScript

document.getElementById("check1").addEventListener("click", f11)
document.getElementById("reset1").addEventListener("click", f12)

document.getElementById("check2").addEventListener("click", f21)
document.getElementById("reset2").addEventListener("click", f22)

document.getElementById("check3").addEventListener("click", f31)
document.getElementById("reset3").addEventListener("click", f32)

function f11(){

  let number1 = document.getElementById("a1")
  let number2 = document.getElementById("b1")
  let result = document.getElementById("sum")

  let a = parseInt(number1.value)
  let b = parseInt(number2.value)
  let sum = parseInt(result.value)
  let summa = a + b

    if (sum == summa){
    document.getElementById("message1").style.color = "green"
    document.getElementById("message1").innerHTML = "Correct :)"
    }
    else {
    document.getElementById("message1").style.color = "red"
    document.getElementById("message1").innerHTML = "Wrong :("
    }
  }
  
function f12(){
  document.getElementById("a1").value = ""
  document.getElementById("b1").value = ""
  document.getElementById("sum").value = ""
  document.getElementById("message1").style.color = "black"
  document.getElementById("message1").innerHTML = "Try again!"
  }
  
function f21(){

  let number1 = document.getElementById("a2")
  let number2 = document.getElementById("b2")
  let result = document.getElementById("sub")

  let a = parseInt(number1.value)
  let b = parseInt(number2.value)
  let sub = parseInt(result.value)
  let substr = a - b

    if (sub == substr){
    document.getElementById("message2").style.color = "green"
    document.getElementById("message2").innerHTML = "Correct :)"
    }
    else {
    document.getElementById("message2").style.color = "red"
    document.getElementById("message2").innerHTML = "Wrong :("
    }
  }
  
function f22(){
  document.getElementById("a2").value = ""
  document.getElementById("b2").value = ""
  document.getElementById("sub").value = ""
  document.getElementById("message2").style.color = "black"
  document.getElementById("message2").innerHTML = "Try again!"
  }  
  
function f31(){

  let number1 = document.getElementById("a3")
  let number2 = document.getElementById("b3")
  let result = document.getElementById("mult")

  let a = parseInt(number1.value)
  let b = parseInt(number2.value)
  let mult = parseInt(result.value)
  let multip = a * b

    if (mult == multip){
    document.getElementById("message3").style.color = "green"
    document.getElementById("message3").innerHTML = "Correct :)"
    }
    else {
    document.getElementById("message3").style.color = "red"
    document.getElementById("message3").innerHTML = "Wrong :("
    }
  }
  
function f32(){
  document.getElementById("a3").value = ""
  document.getElementById("b3").value = ""
  document.getElementById("mult").value = ""
  document.getElementById("message3").style.color = "black"
  document.getElementById("message3").innerHTML = "Try again!"
  }  
    
