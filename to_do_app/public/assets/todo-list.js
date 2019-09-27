$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input'); // get form value
      var todo = {item: item.val()};

      $.ajax({  // pass the data to the controller
        type: 'POST',
        url: '/todo',   
        data: todo,
        success: function(data){
          
          location.reload(); //reload page with new items
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          
          location.reload();
        }
      });
  });

});
