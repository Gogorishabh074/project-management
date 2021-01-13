
// adding task to the todo list
$(document).ready(function () {
     $("#addBtn").on("click", function() { 
     $("#todo").append("<li class = 'listitem'><input type = 'checkbox'>" +  
     $("#inputtask").val() + "<input type= 'text'>" + 
     "<button>Edit</button>"  +  "<button class = 'del'>Delete</button>" + "</li>");
     /*
     $('#todo li').attr('id', function(i) {
        return  'todo'+(i+1);
     });
     */
    //moving the todo task to completed 
    /*
    $(".listitem").click(function(){
        console.log("hello");
       $("#done").append(this);
    });
    */

    // implementing the delete button functionality
    $('input[type = checkbox]').change(function(){
       $("#done").append($(this).parent(".listitem"));
    });

    //deleting the current todo list on pressing delete
    $(".del").click(function(){
       $(this).parent().remove();
    }); 
    
    //editing the todo list
     
    
// moving the completed task to todo list 
    $('input[type=checkbox]').change(function() {
      console.log($(this).parent(".listitem"))
      var isChecked = $(this).is(":checked");
      if(!isChecked)
       $("#todo").prepend($(this).parent(".listitem"));                
  });
    /*
    $(".listitem").click(function(){
       $("#todo").append(this);
    });
    */
});
});

