let todoItem = {
	text: 'Default',
	completed: false,
	id: 0
};

let itemsType = 'not_completed';
let todoItemId = 0;
let newText = 'text';


function addTodoItem(todoItem) {
	if (todoItem.text && todoItem.completed){
		this.text = text;
		this.completed = completed;
		this.id ++;
		return true;
	}
}

function viewTodoList(itemsType) {
	if (itemsType == 'completed'){
		
		todoItem.filter = (type) => todoItem.completed == true;
		return todoItem;
	}
	if (itemsType == 'not_completed'){
		
		todoItem.filter = (type) => todoItem.completed != true;
		return todoItem;
		
	}
	if (itemsType == 'all'){
		return todoItem;
	}
}

function editTodoItem(todoItemId, newText) {
	if(newText){
		if (todoItem.id === todoItemId){
			todoItem.text = newText;
			return true;
		}
	}
}
function deleteTodoItem(todoItemId) {
	if (todoItem.id === todoItemId){
		delete todoItem;
		return true;
	}
}
function completeTodoItem(todoItemId) {
	if (todoItem.id === todoItemId){
		todoItem.completed = true;
	}
}