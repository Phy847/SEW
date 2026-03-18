// Funktionen

// Mathematik
// f(x) = x²
// f(3) = 9

// JavaScript / Informatik

function f(x) {
    //befehl
    //befehl
    //befehl
    //...

    console.log("Starte Berechnung")
    berechnung = x*x
    console.log("Berechnung abgeschlossen")
    
    return berechnung
}

// Definition der Funktion, mit leerer Parameterliste
// "0" !== 0 (String & Numberd)
function onClickEvent() {
    console.log("Aktuelle Klick-Anzahl");
    const clickCountElement =
        document.querySelector("#clickCount");
    console.log(clickCountElement.textContent);
  //console.log(typeof clickCountElement.textContent);
    const klickString = clickCountElement.textContent;
    let
     klickZahl = parseInt(klickString)
        console.log(klickZahl)
    console.log(typeof klickZahl)
  //Erhöhung der Klick Zahl
    klickZahl++;

  //neue Klickzahl im HTML zuweisen
    clickCountElement.textContent = klickZahl;

    // return undifinded --> Standard return, wenn nicht anders angegeben
}

const counterBtn = document.querySelector("#counterBtn");

if (counterBtn !== null) {
    counterBtn.addEventListener("click", onClickEvent);
    // onClickEvent / onClickEvent() Unterschied --> bei () wird das Ergebnis ausgegeben
    // sonst wird die Funktion ansich ausgegeben
} else {
    console.error("Counter Button nicht gefunde")
}

const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoItems");

// Event für  Hinzufügen Button
function onTodoBtnClick() {
    // ToDo aus dem Tetxfeld auslesen
    const textFieldValue = todoInput.value;
    console.log(textFieldValue);
    // Element dem Local Storage zuweisen

    localStorage.setItem(localStorage.length, textFieldValue)

    //ToDo der Liste dazugeben
    const newTodoElement = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", deleteTodoItem)

    newTodoElement.textContent = textFieldValue;

    newTodoElement.appendChild(deleteButton)    

    //Es gibt auch remove Child :)
    todoList.appendChild(newTodoElement);
}

addTodoBtn.addEventListener("click", onTodoBtnClick);

function deleteTodoItem(evt) {
  evt.target.parentElement.remove();

  // Aus dem Local Storage löschen

  const clickedListItem = evt.target.parentNode;
  const allListItems = clickedListItem.parentNode.children;
  
  for (let i = 0; i < allListItems; i++) {
    const currentElement = allListItems [i];
    if (currentElement === clickedListItem) {
      localStorage.removeItem
    }
  }
}



function onPageLoaded() {
   for (let i of Object.keys(localStorage)) {
    const storedTodoItemText = localStorage.getItem(i)
    console.trace(storedTodoItemText);
    const storedTodoElement = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", deleteTodoItem)
    deleteButton.textContent = "x"

    storedTodoElement.textContent = storedTodoItemText;
    storedTodoElement.appendChild(deleteButton);
    todoList.appendChild(storedTodoElement);
   }
}

// Event wenn Seite neu geladen wird

window.addEventListener("load", onPageLoaded)