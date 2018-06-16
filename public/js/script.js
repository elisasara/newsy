$(document).ready(function () {


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
        $(".noteArea").css("visibility", "visible");
    });

    $(".submitNote").on("click", function(event){
        event.preventDefault();
        var id = $(this).attr("data-id");
        console.log("id:", id);
        var title = $("#title").val().trim();
        console.log("title", title);
        var body = $("#note").val();
        console.log("body", body);

        // $.post("/notes/")
    })

});