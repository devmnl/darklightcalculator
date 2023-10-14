let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let clearBtn = document.getElementById("clear"); // Selecionando o botão de limpar pelo ID
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML === "=") {
      // Verifique se o botão clicado é "="
      value.innerHTML = calculateExpression(value.innerHTML);
    } else if (this === clearBtn) {
      // Use o botão de limpar diretamente
      value.innerHTML = "";
    } else {
      value.innerHTML += this.innerHTML;
    }
  });
}

function calculateExpression(expression) {
  try {
    return eval(expression); // Avaliar a expressão
  } catch (error) {
    return "Erro"; // Manipule erros de avaliação
  }
}

toggleBtn.onclick = function () {
  body.classList.toggle("dark");
};


// Interação com o teclado fisico -----------------------------------
document.addEventListener("keydown", function (event) {
    const key = event.key;
  
    // Verifique se a tecla pressionada é um número, operador ou Enter
    if (/[\d\+\-\*\/]/.test(key)) {
      value.innerHTML += key;
    } else if (key === "Enter" || key === "=") {
      value.innerHTML = calculateExpression(value.innerHTML);
    }
  
    // Verifique se a tecla "Backspace" foi pressionada para apagar
    if (key === "Backspace") {
      value.innerHTML = value.innerHTML.slice(0, -1);
    }
  });
  //-----------------------------------------------------------------
