// JavaScript Document
/*
*Plugin Name : iToast
*Developer : SHAN K PAUL <shanpaul06@gmail.com>
*website : www.tagprof.com/shan
*
*/

var itoast={
    calback:'',
    time:2000,
    create:function()
    {
         $(document).find('.page-content').append('<div id="itoast_frame"></div>');
         $('#itoast_frame').click(function(){
            $(this).hide(); 
         });
    },
    show:function(msg,tm,theme)
    {
       //alert("in");
       $('#itoast_frame').hide();
         delay=tm||this.time; 
	theme= theme||'theme_green';//alert(msg);
        if($('#itoast_frame').length==0)
            {
               this.create();
            }
           this.center();
	   $('#itoast_frame').removeClass();
		$('#itoast_frame').addClass(theme);
           $('#itoast_frame').html(msg).show().delay(delay).fadeOut('slow');
    },
    center:function()
    {
       $('#itoast_frame').css("top", ( $(window).width() -   $('#itoast_frame').width() ) / 2);
       //$('#itoast_frame').css("left", ( $(window).width() -   $('#itoast_frame').width() ) / 2);
    }
    
    
}
var itoast_e={
    calback:'',
    time:2000,
    create:function()
    {
         $(document).find('.page-content').append('<div id="itoast_frame2"></div>');
         $('#itoast_frame2').click(function(){
            $(this).hide(); 
         });
    },
    show:function(msg,tm,theme)
    {
       //alert("in");
       $('#itoast_frame2').hide();
         delay=tm||this.time; 
  theme= theme||'theme_green';//alert(msg);
        if($('#itoast_frame2').length==0)
            {
               this.create();
            }
           this.center();
     $('#itoast_frame2').removeClass();
    $('#itoast_frame2').addClass(theme);
           $('#itoast_frame2').html(msg).show().delay(delay).fadeOut('slow');
    },
    center:function()
    {
       $('#itoast_frame2').css("top", ( $(window).width() -   $('#itoast_frame2').width() ) / 2);
       //$('#itoast_frame').css("left", ( $(window).width() -   $('#itoast_frame').width() ) / 2);
    }
    
    
}