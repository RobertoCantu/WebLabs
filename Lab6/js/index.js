


$(".agregar").on("click", (e) =>{
    e.preventDefault();
    var text = $("#newText").val();
   $(".Lista").append(`
   
   <div class="item">
   <li>${text} </li>
   
    <button class="check">check</button>
    <button class="delete">delete</button>
    
    
   </div>
   `)
   $("#newText").val("");
  
})

$(".Lista").on("click", "button", function(){
    
    $(this).prev().toggleClass("itemName");
})

$(".Lista").on("click", ".delete", function(){
  
    
    $(this).parent().remove()
})


