//console.log("Hello");

const base_url = "http://localhost:3000/";
$(document).ready(() => {
    
    //1st thing, need to reload the webpage, 3 arguments
    $.post(base_url + "getList", {}, (data) => {
        console.log(data.list);  //show 36 Arrays in Console on webpage's Inspect

        for (let i = 0; i < data.list.length; i++) {
            const html = `
                <tr data-task-id="${data.list[i]._id}">
                    <td>${data.list[i].priority}</td>
                    <td>${data.list[i].title}</td>
                    <td>${data.list[i].text}</td>
                    <td><button>Delete</button></td>
                </tr>
            `;
            $("#tasks tbody").append(html);   //jQuery method, append to the class, to the table
        }


        // Update selector to avoid selecting the update button.
        ////CSS selecting: tasks tbody tr td button
        //// we are trying to delete the Delete-button once user pressed it.
        $("#tasks tbody tr td button").click(function () {


            //delete the whole table row and shows which _ID deleted.
            // .attr = Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
            let taskID = $(this).parent().parent().attr("data-task-id");
            console.log(taskID);


            let actionObject = {
                id: taskID,
                action: "delete",
                data: null
            }

            $.post(base_url + "modify", actionObject, (data) => {
                $(this).parent().parent().remove();
            });

            // Pass the JavaScript object that was pressed on the jQuery selector.
            //console.log("clicked already!");
            //$(this).parent().parent().remove();  // (this) has to use with normal function syntax, cannot with arrow function //deleting the whole tr
        });  
        
        /*
        ///////another way is to use event.target
        $("#tasks tbody tr td button").click((event) => {
            // Pass the JavaScript object that was pressed on the jQuery selector.
            //console.log("clicked already!");
            $(event.target).remove();
        });  
        */
    });

    $("#submit").click(() => {
        //console.log("clicked");

        let priorityNumber = $("#note-priority option:selected").attr("value");
        //console.log(priorityNumber);

        priorityNumber = parseInt(priorityNumber);

        let noteObject = {
            author: null,
            title: $("#note-title").val(),
            text: $("#note-text").val(),
            completed: false,
            archived: false,
            priority: priorityNumber,
            categories: null,
            timestamp: Date.now()
        }
        //console.log(noteObject);


        $("#submit").attr("disabled", "disabled");
        //$("#loading-icon").css("visibility", "visible");   //it was this code
        $("#loading-icon").fadeIn(600);

        //jQuery post. Need 3 arguments: route(localhost), data, response
        $.post(base_url + "newNote", noteObject, (data) => {
            console.log(data.saved);
            if (data.saved === true) {
                setTimeout(() => {
                    $("#submit").removeAttr("disabled");
                    //$("#loading-icon").css("visibility", "hidden");   //it was this code
                    $("#loading-icon").fadeOut(600);
                    $("#submit-message").text("Successfully saved " + noteObject.title);
                    $("#submit-message").fadeIn(600);


                    //emptying the entry-boxes after we entered our task description
                    $("#note-title").val("");
                    $("#note-text").val("");
                    $("#note-priority").val("1");   //controlling priority back to 1 after entring


                     const html = `
                        <tr>
                            <td>${noteObject.priority}</td>
                            <td>${noteObject.title}</td>
                            <td>${noteObject.text}</td>
                        </tr>
                    `;
                    $("#tasks tbody").append(html);



                    setTimeout(() => {
                        $("#submit-message").fadeOut(600, () => {
                            $("#submit-message").text("");
                        });
                    }, 4000);
                }, 2000);
            }
        });

    });

});