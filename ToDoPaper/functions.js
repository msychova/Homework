var todoItem = {
	text: 'Default',
	completed: false,
	id: 0
};

var itemsType = 'not_completed';
var todoItemId = 0;
var newText = 'text';


function addTodoItem(todoItem) {
	if (todoItem.text && todoItem.completed && todoItem.id.unique){
		this.text = text;
		this.completed = completed;
		this.id = id;
		return true;
	}
}

function viewTodoList(itemsType) {
	if (itemsType == 'completed'){
		
		todoItem.forEach(function(type){
			if (todoItem.completed == true){
				return todoItem;
			}
		})
	}
	if (itemsType == 'not_completed'){
		
		todoItem.forEach(function(type){
			if (todoItem.completed != true){
				return todoItem;
			}
		})
		
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