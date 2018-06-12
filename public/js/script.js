$(document).ready(function(){

$("#save").on("click", function(){
    console.log("Save has been clicked");
    var id = $(this).attr("data-id");

    $.ajax({
        method: "PUT",
        url: "/saved/" + id
        // data: {
        //     saved: true
        // }
    }).then(function(data){
        console.log("This article has been saved");
        // add modal in here
    })
});

});