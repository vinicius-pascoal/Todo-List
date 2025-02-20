// TODO adicionar salvamento de tarefas com localStorage

//get tarefas 
function getTarefas() {
  var tarefasArmazenadas = JSON.parse(localStorage.getItem("tarefas"))
  return tarefasArmazenadas
}
//add tarefas
function addTarefas(tarefaNova) {
  var tarefasArmazenadas = getTarefas()
  tarefasArmazenadas.push(tarefaNova)
  localStorage.setItem("tarefas", JSON.stringify(tarefasArmazenadas));
}

//remove tarefaz

//coletar lista do localStorage
var tarefasArmazenadas = getTarefas()
console.log(tarefasArmazenadas)
for (let i = 0; i < tarefasArmazenadas.length; i++) {
  var li = document.createElement("li");
  var inputValue = tarefasArmazenadas[i];
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

}

//testes
var names = [];
names[0] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names));

var storedNames = JSON.parse(localStorage.getItem("names"));
console.log(storedNames[0])

//faz o enter adicionar elementos a lista
var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

// adiciona o botao de fechar em todos os elementos da lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// funcionalidade do botao de fechar
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// adiciona o checkmark quando o item e marcado como comcluido
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// adiciona elementos a lista 
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  addTarefas(inputValue)
}
