// JavaScript

// console.log ("hellow")

document.getElementById("estim").addEventListener("input", checkall)
document.getElementById("check").addEventListener("click", f1)
document.getElementById("reset").addEventListener("click", f2)

  let number1 = document.getElementById("a")
  let number2 = document.getElementById("b")
  let estimated = document.getElementById("estim")
  let select = document.getElementById("oper") // выбираем элемент select


function checkall(){
  let a = parseInt(number1.value)
  let b = parseInt(number2.value)
  let estim = parseInt(estimated.value)
  let oper = select.value // получаем значение выбранного элемента
  if (Number.isInteger(a) && Number.isInteger(b)
  && Number.isInteger(estim) && oper != "define")
  {document.getElementById("check").removeAttribute("disabled")
  }
}

function f1(){
  let a = parseInt(number1.value)
  let b = parseInt(number2.value)
  let estim = parseInt(estimated.value)
  let oper = select.value // получаем значение выбранного элемента

  switch (oper) {
    case "add":
      res = a + b
    break;
    case "sub":
      res = a - b
    break;
    case "mult":
      res = a * b
    break;
  }

  if (estim == res){
    document.getElementById("message").style.color = "green"
    document.getElementById("message").innerHTML = "Correct :)<br>Congrats!"
    }
    else {
    document.getElementById("message").style.color = "red"
    document.getElementById("message").innerHTML = "Wrong :(<br>Try again!"
    }
} //end of f1
  
function f2(){
  document.getElementById("a").value = ""
  document.getElementById("b").value = ""
  document.getElementById("estim").value = ""
  document.getElementById("oper").value = "define"
  document.getElementById("message").style.color = "black"
  document.getElementById("message").innerHTML = "Сheck yourself!<br> When you are ready push on button!"
  document.getElementById("check").setAttribute("disabled", true)
}  
    
