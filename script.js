// JavaScript

document.getElementById("check1").addEventListener("click", f11)
document.getElementById("reset1").addEventListener("click", f12)

document.getElementById("check2").addEventListener("click", f21)
document.getElementById("reset2").addEventListener("click", f22)

document.getElementById("check3").addEventListener("click", f31)
document.getElementById("reset3").addEventListener("click", f32)

document.getElementById("check4").addEventListener("click", f41)
document.getElementById("reset4").addEventListener("click", f42)

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
    document.getElementById("message1").innerHTML = "Correct :)<br>Congrats!"
    }
    else {
    document.getElementById("message1").style.color = "red"
    document.getElementById("message1").innerHTML = "Wrong :(<br>Try again!"
    }
  }
  
function f12(){
  document.getElementById("a1").value = ""
  document.getElementById("b1").value = ""
  document.getElementById("sum").value = ""
  document.getElementById("message1").style.color = "black"
  document.getElementById("message1").innerHTML = "Сheck yourself!<br> When you are ready push on button!"
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
    document.getElementById("message2").innerHTML = "Correct :)<br>Congrats!"
    }
    else {
    document.getElementById("message2").style.color = "red"
    document.getElementById("message2").innerHTML = "Wrong :(<br>Try again!"
    }
  }
  
function f22(){
  document.getElementById("a2").value = ""
  document.getElementById("b2").value = ""
  document.getElementById("sub").value = ""
  document.getElementById("message2").style.color = "black"
  document.getElementById("message2").innerHTML = "Сheck yourself!<br> When you are ready push on button!"
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
    document.getElementById("message3").innerHTML = "Correct :)<br>Congrats!"
    }
    else {
    document.getElementById("message3").style.color = "red"
    document.getElementById("message3").innerHTML = "Wrong :(<br>Try again!"
    }
  }
  
function f32(){
  document.getElementById("a3").value = ""
  document.getElementById("b3").value = ""
  document.getElementById("mult").value = ""
  document.getElementById("message3").style.color = "black"
  document.getElementById("message3").innerHTML = "Сheck yourself!<br> When you are ready push on button!"
  }  
    

function f41(){

  let number1 = document.getElementById("a4")
  let number2 = document.getElementById("b4")
  let result = document.getElementById("res")

  let a = parseInt(number1.value)
  let b = parseInt(number2.value)
  let res = parseInt(result.value)

  let select = document.getElementById("oper"); // выбираем элемент select
  let oper = select.value; // получаем значение выбранного элемента

  if (oper == "add"){let summa = a + b
      if (res == summa){
      document.getElementById("message4").style.color = "green"
      document.getElementById("message4").innerHTML = "Correct :)<br>Congrats!"
      }
      else {
      document.getElementById("message4").style.color = "red"
      document.getElementById("message4").innerHTML = "Wrong :(<br>Try again!"
      }
  } else if (oper == "sub"){let substr = a - b
      if (res == substr){
      document.getElementById("message4").style.color = "green"
      document.getElementById("message4").innerHTML = "Correct :)<br>Congrats!"
      }
      else {
      document.getElementById("message4").style.color = "red"
      document.getElementById("message4").innerHTML = "Wrong :(<br>Try again!"
      }
  } else {let multip = a * b
      if (res == multip){
      document.getElementById("message4").style.color = "green"
      document.getElementById("message4").innerHTML = "Correct :)<br>Congrats!"
      }
      else {
      document.getElementById("message4").style.color = "red"
      document.getElementById("message4").innerHTML = "Wrong :(<br>Try again!"
      }
    }
} //end of f41
  
function f42(){
  document.getElementById("a4").value = ""
  document.getElementById("b4").value = ""
  document.getElementById("res").value = ""
  document.getElementById("message4").style.color = "black"
  document.getElementById("message4").innerHTML = "Сheck yourself!<br> When you are ready push on button!"
}  
    
