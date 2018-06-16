$(document).ready(function(){
    
    $(".save").on("click", function () {
        console.log("Save has been clicked");
        var id = $(event.target).attr("data-id");

        $.ajax({
            method: "PUT",
            url: "/saved/" + id
        }).then(function (data) {
            console.log("This article has been saved");
            // add modal in here
        })
    });

    $(".addNote").on("click", function (event) {
        console.log("Add Note has been clicked!");
        var id = $(this).attr("data-id");
        $(".noteArea").css("visibility", "visible");
        $("#submitNote").attr({"data-id": id});
    //     $("#noteForm").html("<form class='noteArea'>" +
    //     "<div class='form-group'>" +
    //         "<label for='title'>Title</label>" +
    //         "<br />" +
    //         "<input type='text' id='title'>" + 
    //     "</div>" + 
    //     "<div class='form-group'>" + 
    //         "<label for='note'>Note</label>" + 
    //         "<br />" + 
    //         "<textarea type='text' id='note'></textarea>" + 
    //     "</div>" + 
    //     "<button class='btn btn-success' id='submitNote " + "data-id=" + id + "type='submit'>Add Note</button>" + 
    // "</form>");
    });

    $("#submitNote").on("click", function(event){
        event.preventDefault();
        var id = $(this).attr("data-id");
        var title = $("#title").val().trim();
        var body = $("#note").val();

        $.ajax({
            method: "POST",
            url: "/notes/" + id,
            data: {
                title: title,
                body: body
            }
        }).then(function(data){
            console.log(data);
        })
    });

});
