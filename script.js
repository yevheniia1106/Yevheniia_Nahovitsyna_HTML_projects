// JavaScript

document.getElementById("check4").addEventListener("click", f1)
document.getElementById("reset4").addEventListener("click", f2)

function f1(){

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
  
function f2(){
  document.getElementById("a4").value = ""
  document.getElementById("b4").value = ""
  document.getElementById("res").value = ""
  document.getElementById("message4").style.color = "black"
  document.getElementById("message4").innerHTML = "Сheck yourself!<br> When you are ready push on button!"
}  
    
