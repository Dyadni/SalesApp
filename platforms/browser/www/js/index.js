 var app = {
    // Application Constructor
    initialize: function() {
        //this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener("deviceready", onDeviceReady, false);
        //document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
       
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
        // function onDeviceReady() {
        // console.log("navigator.geolocation works well");
        // }
    }
};
function onDeviceReady() {
    console.log(navigator.notification);
}

$(document).ready(function () {
   app.initialize();
   $(".logout").on('click', function(e) { 
        //alert("in");
        if(confirm("Are you sure?")){
            window.localStorage.removeItem('username');
            window.localStorage.removeItem('phone');
            window.localStorage.clear();
            // var msg="Greetings from kaiyaan. <br> Login to Continue. ";
            // itoast.show(msg,8000,'theme_green');                    
            window.location.href="index.html";
            
                    // if (navigator.app) {
                    //     navigator.app.exitApp();
                    // } else if (navigator.device) {
                    //     navigator.device.exitApp();
                    // }
        }
    });
});