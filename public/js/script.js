$(document).ready(function () {

    $(document).on("click", $(".save"), function () {
        console.log("Save has been clicked");
        var id = $(event.target).attr("data-id");

        $.ajax({
            method: "PUT",
            url: "/saved/" + id
            // data: {
            //     saved: true
            // }
        }).then(function (data) {
            console.log("This article has been saved");
            // add modal in here
        })
    });

});