function q (selector) {
    return document.querySelector(selector)
}

function qs (selector) {
    return document.querySelectorAll(selector)
}


function addNewTodo(event) {
    let todoField = q('#new-todo-field') //it gets the new-todo-field
    let newTodo = todoField.value //sets new-todo-field to newTodo
    console.log(newTodo) //shows us that the clicks are working
    let todoList = q('#todo-list') //it gets the todo list with querySelector
    let newListItem = document.createElement('li') //creates a new element li
    newListItem.classList.add('todo') //it adds todo to its class list
    newListItem.innerText = newTodo //sets the inner text to what came from todoField.value
    todoList.appendChild(newListItem) //it appends it to todoList
    todoField.value = '' //sets the field to empty after click
}

q('#add-todo').addEventListener('click', addNewTodo)
q('#new-todo-field').addEventListener('keyup', function(event){
    console.log(event)
    if (event.keyCode === 13) { //found this using console keycode something about browsers 
        addNewTodo() //really cool takes the info from function here nice
    }
})

// q('#add-todo').addEventListener('click', function (event,) { //this whole freaking thing happens when we click the event listener 
//     let todoField = q('#new-todo-field') //it gets the new-todo-field
//     let newTodo = todoField.value //sets new-todo-field to newTodo
//     console.log(newTodo) //shows us that the clicks are working
//     let todoList = q('#todo-list') //it gets the todo list with querySelector
//     let newListItem = document.createElement('li') //creates a new element li
//     newListItem.classList.add('todo') //it adds todo to its class list
//     newListItem.innerText = newTodo //sets the inner text to what came from todoField.value
//     todoList.appendChild(newListItem) //it appends it to todoList
//     todoField.value = '' //sets the field to empty after click
// })

