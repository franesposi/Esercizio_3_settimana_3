// tre cose 
// 1. funzione che fa addTask
// 2. funzione che gestisce attachComplete (riga sbarrata)
// 3. una funzione che attachDelete (cancella)
const handleSubmit = function addTask(e) {
    e.preventDefault()              // evita il comportamento di default 
    addTask()
    attachComplete()
    attachDelete()
}

// 1
    // agganciare gli elementi html come fatto stamattina 
    // stampare l'html necessario per aggiungere il value del mio campo input inputField.value
    // ogni task che aggiungo aggiunge html -> +=
    const addTask = function () {
        let tasks = document.querySelector('#tasks')
        let inputField = document.querySelector('#newTask input')
        let newTask = `
            <div class="task">
                <span id="taskname">
                    ${inputField.value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `
        tasks.innerHTML += newTask
        inputField.value = ''
      }


// 2
    // aggancia gli elementi html
    // li ciclo ad esempio con for
    // all'elemento che seleziono aggiunge|toglie una classe (toggle)
    // https://www.w3schools.com/js/js_this.asp this per leggere il contenuto
    // css ->   text-decoration: line-through;
    const attachComplete = function () {
        let allTasks = document.querySelectorAll('.task')
        for ( let i = 0; i < allTasks.length; i++ ) {
          allTasks[i].addEventListener('click', function () {
            this.classList.toggle('completed')
          })
        }
      }

// 3
    // aggancia gli elementi html
    // ciclo for
    // metodo per rimuovere qualcosa .remove
    const attachDelete = function () {
        let allDeleteButtons = document.querySelectorAll('.delete')
        for ( let i = 0; i < allDeleteButtons.length; i++ ) {
          allDeleteButtons[i].addEventListener('click', function () {
            this.parentNode.remove()
          })
        }
      }

window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}