function q (selector) {
    return document.querySelector(selector)
}

function qs (selector) {
    return document.querySelectorAll(selector)
}

q('#add-todo').addEventListener('click', function (event,) {
    let newTodo = q('#new-todo-field').value
    console.log(newTodo)
})