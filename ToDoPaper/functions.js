/*let todoItem = {
	text: 'Default',
	completed: false,
	id: 0
};*/

let itemsType = 'not_completed';
let todoItemId = 0;
let newText = 'text';

function ToDoItem(todoItem){
	
	var ToDoHistory = [];
	
	var initToDoHistory = function() {
		$.getJSON( "history.json", function(data) {
			console.log(data);	
			ToDoHistory = data.data;
		});
	};
	
	initToDoHistory();
	
	function todoItem (text,completed){
		text = 'Default';
		completed = false;
		id = 0;
	}

	this.addTodoItem = function(text,completed) {
		if (text != null && completed != null){
			let newItem = new todoItem(text,completed);
								
		}
		
		ToDoHistory.push({
			date: (new Date()).toISOString(),
			text: newItem.text,
			completed: newItem.completed
		});

		console.log(ToDoHistory);
		
		return newItem;	


	};

	this.viewTodoList = function(itemsType) {
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
};

function editTodoItem(todoItemId, newText) {
	if(newText){
		if (todoItem.id === todoItemId){
			todoItem.text = newText;
			return true;
		}
		
		ToDoHistory.push({
			date: (new Date()).toISOString(),
			text: todoItem.text,
			completed: todoItem.completed
		});
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
}

var todoitem = new ToDoItem();