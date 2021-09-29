$(document).ready(function() {

// Start your code from here


//Array of title 
const titles = ["Football", "Basketball", "Baseball", "Golf", "Swimming", "Racing"];

//Add buttons dinamycally 
function renderTitles(){
    $("#animal-buttons").empty();
    titles.forEach((title) => {
        $("#animal-buttons").append(`<button>${title}</button>`);
    })
}

//1st render
renderTitles();

//Add images from button click

//Api url api.giphy.com/v1/gifs/search?api_key=q0ATDvHAAeBTlwm2RlOSYdBHbgcgozNO&limit=10&q=cheeseburgers
$("#animal-buttons").on("click", "button", function(){
    let title= $(this).text();
    console.log(title);
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?api_key=q0ATDvHAAeBTlwm2RlOSYdBHbgcgozNO&limit=10&q=${title}`,

        success: function(json){
            let images = json.data;
            //Clean div
            $("#animals").empty();
            images.forEach((img) => {
                console.log(img)
                $("#animals").append(`
                <div>
                <h4>Rating: ${img.rating}</h4>
                <img data-image="${img.images.fixed_height_still.url}" data-gif="${img.images.fixed_height.url}" src="${img.images.fixed_height_still.url}"/>
                </div>
                
                `
                
                )

            })
        }

        


    })

    
    
})

//Logic for image click

$("#animals").on("click", "img", function(){
let tempUrl = $(this).attr("data-gif");
let tempUrl2 = $(this).attr("data-image");

if($(this).attr("src") == tempUrl2){
    $(this).attr("src", tempUrl);
}else {
    $(this).attr("src", tempUrl2);
}
})


//Add new title from form
const input = $("#animal-input"); 
const button = $("#add-animal");

button.on("click", function(e){
    e.preventDefault();
    let text = input.val();
    console.log(text);
    titles.push(text);
    //rerender
    renderTitles();
    //Return input box to empty
    input.val("");
})





});
