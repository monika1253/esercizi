function addProduct() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim(); //(trim: toglie gli spazi all'inizio e alla fine; input.value: prende il testo scritto dall'utente)

  if (taskText === "") {
    alert("Inserisci un task valido!"); //se il campo è vuoto mostra un avviso o blocca la funzione
    return;
  }
  const ul = document.getElementById("taskList");
  const li = document.createElement("li"); //creo un nuovo elemento di lista <li> che contiene il task

  const checkbox = document.createElement("input"); //creo la checkbox
  checkbox.type = "checkbox";

  const span = document.createElement("span"); //crea lo span per il testo del task
  span.textContent = taskText;

  //aggiunge checkbox e testo al <li>
  li.appendChild(checkbox);
  li.appendChild(span);
  ul.appendChild(li);
  input.value = ""; //pulisce l'input dopo l'aggiunta
}
