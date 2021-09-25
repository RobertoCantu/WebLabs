
$("#ButtonPost").on("click", function(e){

    e.preventDefault();

var todo = $("#todoText").val();


var div = $("<div></div>");
var checkbox = $("<input></input>").attr({
    type: "checkbox",
    name: "todo"
});

div.append(checkbox);
div.append(`<label>${todo}</label>`);
$("#todoList").append(div);

$("#todoText").val("");

})

$("#ButtonClear").on("click", () => {
    
    var todos = $('input[name="todo"]');
    for (var i=0; i <todos.length; i++){
        todos[i].checked = false
    }
})

$("#ButtonMark").on("click", () => {
    var todos = $('input[name="todo"]');
    for (var i=0; i <todos.length; i++){
        todos[i].checked = true
    }
})

$("#ButtonDelete").on("click", () => {
    $("#todoList").html("");
})
