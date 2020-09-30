var todo=["study","play"];
window.setTimeout(function() {
	var input=prompt("Choose one of the options");
	while(input!=="quit"){
		if(input==="view"){
		alert(todo);
	}
	else if(input==="new"){
		//ask for new todo
		var newTodo=prompt("Enter a new todo");
		todo.push(newTodo);
		}
		var input=prompt("Choose one of the options");
	}
	alert("Thank you for visiting the app");

}, 500);