let ListDiv = document.getElementById("todo-items");

function DOM(){
	this.addTodoItemDom = function(todoItem){
		
		let param;

		if(todoItem.completed === false)
		param = `<div>${JSON.stringify(todoItem.id)}.${JSON.stringify(todoItem.text)} <input type="checkbox" name="ToDoItem" value="not_completed"></div>`; 
		
		if(todoItem.completed === true)
		param = `<div>${JSON.stringify(todoItem.id)}.${JSON.stringify(todoItem.text)} <input type="checkbox" name="ToDoItem" value="completed" checked></div>`; 
		
		ListDiv.innerHTML += param;
		
		console.log(ListDiv);
	}
	this.viewTodoListDom = function(todoItem){
		
		let param = "";
		console.log(todoItem);
		
		for(let i=0;i < todoItem.length;i++){
			if(todoItem[i].completed === false)
			param += (`<div>${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" name="ToDoItem" value="not_completed"></div>`); 

			if(todoItem[i].completed === true)
			param += (`<div>${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" name="ToDoItem" value="completed" checked></div>`); 
		}
		
		console.log(param);
		ListDiv.innerHTML = param;
	}
	
	this.editTodoItemDom = function(todoItem){
		let param = "";
		
		for(let i=0;i < todoItem.length;i++){
			if(todoItem[i].completed === false)
			param += (`<div>${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" name="ToDoItem" value="not_completed"></div>`); 

			if(todoItem[i].completed === true)
			param += (`<div>${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" name="ToDoItem" value="completed" checked></div>`); 
		}
		
		console.log(param);
		ListDiv.innerHTML = param;
		

	}
	this.deleteTodoItemDom = function(todoItem){
		let param = "";
		
		for(let i=0;i < todoItem.length;i++){
			if(todoItem[i].completed === false)
			param += (`<div>${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" name="ToDoItem" value="not_completed"></div>`); 

			if(todoItem[i].completed === true)
			param += (`<div>${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" name="ToDoItem" value="completed" checked></div>`); 
		}
		
		console.log(param);
		ListDiv.innerHTML = param;

	}
}

var domFunction = new DOM();
