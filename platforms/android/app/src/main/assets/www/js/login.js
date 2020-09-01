$(document).ready(function () {

	//User enter phone number and generate OTP, add customer to DB
	// $("#RegisterForm").validate({
	// 	  submitHandler: function(form) {
	// 	  	//alert("Submitted!");
	// 	  	var data=$("#RegisterForm").serialize(); //alert(data);

	// 	  	var phone=$("#phone1").val(); //alert(phone);
	// 	  	var name=$("#Username").val();
	// 	  	var password=$("#Password_R").val(); //alert(password);
	// 	  	var conf_password=$("#ConfirmPassword").val(); //alert(conf_password);
	// 	  	if(password==conf_password)
	// 	  	{
	// 	  		// var popup = $(".popup-otp");
	// 	  		// popup.css({display: 'block'}).addClass('active');
	// 	  		// $("#OTPForm #phone").val(phone);
	// 	  		// $("#OTPForm #name").val(phone);
	// 	  		// $("#OTPForm #password").val(phone);
	// 	  		 $.ajax({
	// 			 url:"http://kaiyaan.ezsecure.in/users/users/ajax/manageUsers.php",
	// 			 type: 'POST',
	// 			 data:data,
	// 			 beforeSend : function() {
	// 			  $('body').css('cursor', 'progress');
	// 			 },
	// 			 success : function(data) {
	// 				 //alert(data); 
	// 				 if(data=='success'){
	// 				 	var popup = $(".popup-otp");
	// 					popup.css({display: 'block'}).addClass('active');
	// 					$("#OTPForm #phone").val(phone);
					
					 	
					 	
					
	// 				 }
	// 				 else
	// 				 {
					
	// 	          		 //$("#message_reg").text(data);
	// 	          		 itoast_e.show(data,5000,'theme_dark');
	// 				 // 	window.location.replace('#viewOrders');
	// 				 }
	// 				 // //$("#ordersDiv").html(data).trigger("create");
	// 				 $('body').css('cursor', 'default');
					
				  
	// 			 }
				 
	// 		 });
	// 	  	}
	// 	  	else
	// 	  	{
	// 	  		//alert("Password Incorrect");
	// 	  		//$("#message_reg").text("Password Mismatch");
	// 	  		itoast_e.show("Password Mismatch",5000,'theme_dark');
	// 	  		// var msg="Password Incorrect"
	// 	  		// itoast.show(msg,5000,'theme_red');
	// 	  	}

	// 	    //$(form).ajaxSubmit();
		  
	// 	  },
	// 	rules: {
	// 	    Email: {
	// 			      required: true,
	// 			      email: true
	// 			    },
	// 		Password_R:{
	// 			minlength:4,
	// 			required: true
	// 		},
	// 		ConfirmPassword:{
	// 			minlength:4,
	// 			required:true
	// 		},
	// 		phone1:{
	// 			maxlength:10,
	// 			required:true,
	// 			minlength:10
	// 		}
	// 	  }
	// 	});
	// //Submit the OTP, verfiy OTP for registration of Users
	// $("#OTPForm").validate({
	// 	  submitHandler: function(form) {
	// 	  	//alert("Submitted!");
	// 	  	var data=$("#OTPForm").serialize(); //alert(data);
	// 	    //$(form).ajaxSubmit();
	// 	    $.ajax({
	// 			 url:"http://kaiyaan.ezsecure.in/users/users/ajax/manageUsers.php",
	// 			 type: 'POST',
	// 			 data:data,
	// 			 beforeSend : function() {
	// 			  $('body').css('cursor', 'progress');
	// 			 },
	// 			 success : function(data) {
	// 				 //alert(data); 
	// 				 if(data=='success'){
	// 				 	var popupclose = $(".popup-otp");
	// 					popupclose.removeClass('active');
	// 					var popupclose2 = $(".popup-signup");
	// 					popupclose2.removeClass('active');
	// 				 	var popup = $(".popup-login");
	// 					popup.css({display: 'block'}).addClass('active');
	// 					// var msg="<p>Registration Successful</p>";
 //      //                         itoast.show(msg,2000,'theme_kaiyaan_home');
 //      					//$("#message_login").text("");
 //      					var msg="Registration Successful. Login to continue";
 //                         itoast.show(msg,5000,'theme_kaiyaan_home');
					
	// 				 }
	// 				 else
	// 				 {
	// 				  	//alert("OTP Not Verified "); 
	// 				  	var popupclose = $(".popup-otp");
	// 					popupclose.removeClass('active');
	// 					// var popupclose2 = $(".popup-signup");
	// 					// popupclose2.removeClass('active');
	// 				  	//$("#message_reg").text("");
	// 				  	var msg="OTP Not Verified. Please try again";
 //                         itoast_e.show(msg,5000,'theme_dark');
					
	// 				 }
					
	// 				 $('body').css('cursor', 'default');
	// 				 $("#message_reg").text("");
				  
	// 			 }
				 
	// 		 });
	// 	  },
	// 	  rules: {
		    
	// 		otp:{
	// 			maxlength:6,
	// 			required:true
	// 		}
	// 	  },
	// 	  messages:{
	// 	  	otp:"Enter a valid OTP",
	// 	  }
	// 	});

	$("#LoginForm").validate({
		  submitHandler: function(form) {
		  	//alert("Submitted!");
		  	var data=$("#LoginForm").serialize(); //alert(data);
		  	var phone=$("#phone_L").val(); //alert(phone);
		    //$(form).ajaxSubmit();
		    $("#LoginForm")[0].reset();
		    $.ajax({
				 url:"http://dyadni.rejola.com/users/users/ajax/login-check-mobile.php",
				 type: 'POST',
				 data:data,
				 beforeSend : function() {
				  $('body').css('cursor', 'progress');
				 },
				 success : function(data) {
				 	var a=data.split("_");
					 alert(data); 
					 // if(data=='success'){
					 // 	var popup = $(".popup-otp-login");
						// popup.css({display: 'block'}).addClass('active');
						// $("#OTPFormLogin #phone2").val(phone);
					
					 // }
					 // else
					 // {
			
					 // }
					 // // //$("#ordersDiv").html(data).trigger("create");
					 // $('body').css('cursor', 'default');
					 if(a[0]=='success'){
					 	var popupclose = $(".popup-otp-login");
						popupclose.removeClass('active');
						var popupclose2 = $(".popup-login");
						popupclose2.removeClass('active');

						 window.localStorage.setItem("username", a[1]);
					 	 username=window.localStorage.getItem("username"); //alert(username);
					 	  window.localStorage.setItem("phone", a[2]);
					 	   phone=window.localStorage.getItem("phone"); //alert(phone);
					
					 	var msg="<p>Welcome ! Greetings from Dyadni</p>";
                        itoast.show(msg,8000,'theme_kaiyaan_home');
					 	window.location.href="index_welcome.html";
					 	
					 	
					 }
					 else
					 {
					  	//alert("Login Failed");
					  	//$("#message_login").text("Login Failed");
					 //  	var popupclose2 = $(".popup-login");
						// popupclose2.removeClass('active');
					  	var msg="Login Failed";
                         itoast_e.show(msg,5000,'theme_dark');

		
					 }
					
					 $('body').css('cursor', 'default');
					
				  
				 }
				 
			 });
		  },
		  rules: {
			phone_L:{
				email:true,
				required:true,
				minlength:10
			}
		  	},
		  messages: {
		  	phone_L:"Please enter valid Email"
		  }
		});

	//Submit the OTP, verfiy OTP for Login of Users
	// $("#OTPFormLogin").validate({
	// 	  submitHandler: function(form) {
	// 	  	//alert("Submitted!");
	// 	  	var data=$("#OTPFormLogin").serialize(); //alert(data);
	// 	    //$(form).ajaxSubmit();
	// 	    $.ajax({
	// 			 url:"http://kaiyaan.ezsecure.in/users/users/ajax/manageUsers.php",
	// 			 type: 'POST',
	// 			 data:data,
	// 			 beforeSend : function() {
	// 			  $('body').css('cursor', 'progress');
	// 			 },
	// 			 success : function(data) {
	// 				 //alert(data);
	// 				 var a=data.split("_");

	// 				 if(a[0]=='success'){
	// 				 	var popupclose = $(".popup-otp-login");
	// 					popupclose.removeClass('active');
	// 					var popupclose2 = $(".popup-login");
	// 					popupclose2.removeClass('active');

	// 					 window.localStorage.setItem("username", a[1]);
	// 				 	 username=window.localStorage.getItem("username"); //alert(username);
	// 				 	  window.localStorage.setItem("phone", a[2]);
	// 				 	   phone=window.localStorage.getItem("phone"); //alert(phone);
	// 				 // 	//alert("Order Delivery Status Updated Successfully");

	// 				 // 	window.location.replace('#page0');
	// 				 // 	 var msg="Order Delivery Status Updated Successfully";
	// 	    //       		itoast.show(msg,10000,'theme_green');
					 	
	// 				 	window.location.href="index_welcome.html";
					 	
	// 				 }
	// 				 else
	// 				 {
	// 				  	alert("OTP Not Verified ");
	// 				 // 	 var msg="Order Delivery Status Not Updated";
	// 	    //       		 itoast.show(msg,8000,'theme_green');
	// 				 // 	window.location.replace('#viewOrders');
	// 				 }
	// 				 // //$("#ordersDiv").html(data).trigger("create");
	// 				 $('body').css('cursor', 'default');
					
				  
	// 			 }
				 
	// 		 });
	// 	  }
	// 	});
	

});

