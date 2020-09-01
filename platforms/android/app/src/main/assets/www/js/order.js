$(document).ready(function () {
$("#addOrderForm").validate({
      submitHandler: function(form) {
        //alert("Submitted!");
        var data=$("#addOrderForm").serialize(); //alert(data);
        loginid=window.localStorage.getItem("phone"); 
        $('#loader').fadeIn();
          $.ajax({
         url:"https://dyadni.rejola.com/users/orders/ajax/orders.php",
         type: 'POST',
         data:data+"&loginid="+loginid,
          beforeSend : function() {
              $('body').css('cursor', 'progress');
             },
         success : function(data) {
          //alert(data);
           $('#LoadingGraphic').fadeOut('fast');
           note = $('#Note');
           $('body').css('cursor', 'default');
           note.html(data).addClass("success").slideDown('fast');
           
          
          
         },
         error: function (jqXHR, exception) {
            alert(exception+jqXHR.status);
           },
         
         });
      },
    rules: {
       
        cus_name:{
          minlength:4,
          required: true
        },
        place:{
          required:true
        }
      }
    });

});