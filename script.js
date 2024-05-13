// JavaScript

document.getElementById("check").addEventListener("click", f1)
document.getElementById("reset").addEventListener("click", f2)

function f1(){

  let number1 = document.getElementById("a")
  let number2 = document.getElementById("b")
  let result = document.getElementById("res")

  let a = parseInt(number1.value)
  let b = parseInt(number2.value)
  let res = parseInt(result.value)

  let select = document.getElementById("oper"); // выбираем элемент select
  let oper = select.value; // получаем значение выбранного элемента

  if (oper == "add"){let summa = a + b
      if (res == summa){
      document.getElementById("message").style.color = "green"
      document.getElementById("message").innerHTML = "Correct :)<br>Congrats!"
      }
      else {
      document.getElementById("message").style.color = "red"
      document.getElementById("message").innerHTML = "Wrong :(<br>Try again!"
      }
  } else if (oper == "sub"){let substr = a - b
      if (res == substr){
      document.getElementById("message").style.color = "green"
      document.getElementById("message").innerHTML = "Correct :)<br>Congrats!"
      }
      else {
      document.getElementById("message").style.color = "red"
      document.getElementById("message").innerHTML = "Wrong :(<br>Try again!"
      }
  } else {let multip = a * b
      if (res == multip){
      document.getElementById("message").style.color = "green"
      document.getElementById("message").innerHTML = "Correct :)<br>Congrats!"
      }
      else {
      document.getElementById("message").style.color = "red"
      document.getElementById("message").innerHTML = "Wrong :(<br>Try again!"
      }
    }
} //end of f1
  
function f2(){
  document.getElementById("a").value = ""
  document.getElementById("b").value = ""
  document.getElementById("res").value = ""
  document.getElementById("message").style.color = "black"
  document.getElementById("message").innerHTML = "Сheck yourself!<br> When you are ready push on button!"
}  
    
