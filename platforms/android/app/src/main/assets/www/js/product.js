$(document).ready(function () {
alert("in");
	//var catid = GetURLParameter('catid'); alert(catid);
    

alert($.urlParam('catid'));
	
});
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
        };

// function GetURLParameter(sParam)

// {

//     var sPageURL = window.location.search.substring(1);

//     var sURLVariables = sPageURL.split('&');

//     for (var i = 0; i < sURLVariables.length; i++)
//     {

//         var sParameterName = sURLVariables[i].split('=');

//         if (sParameterName[0] == sParam)
//         {

//             return sParameterName[1];

//         }

//     }

// }​
