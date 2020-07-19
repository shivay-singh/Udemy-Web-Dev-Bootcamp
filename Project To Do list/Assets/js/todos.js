//check of todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	
	event.stopPropagation();
});


//new todo
$("input[type = 'text'").on("keypress", function(event){
	if(event.which === 13){
		//new todo
		var newTodo = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li> <span><i class = 'fa fa-trash'></i></span> " + newTodo + "</li>");
	}
})


$(".fa-plus").click(function(){
	$("input[type = 'text'").fadeToggle();

})
