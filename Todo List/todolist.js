const todolist=[{
    name:'make dinner',
    date:'12-31-2023'
    },
    {
    name:'buy books',
    date:'01-01-2022'}
];
getTodoList();
function getTodoList(){
    let todoListHtml='';
    for(let i=0;i<todolist.length;i++){
        const todoObject=todolist[i];
        const name=todoObject.name; // const {name}=todoObject 
        const date=todoObject.date
        const html=`<div>${name}</div>
        <div>${date}</div> 
        <button onclick="todolist.splice(${i},1);
        getTodoList();" class="delete-button">Delete</button>
        `;
        todoListHtml+=html;
    }
    
    document.querySelector('.js-todo-list').innerHTML=todoListHtml;

}

function addToDo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const date_element = document.querySelector('.js-due-date'); 
    const due_date = date_element.value;
    if (!name || !due_date) return; 
    todolist.push({ name, date: due_date }); 
    inputElement.value = '';
    date_element.value = '';
    getTodoList();
}
