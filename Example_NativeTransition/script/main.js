var app = app || {};

app.main = (function(){
    'use strice';
    
    var mainViewModel = (function(){
      
        var slideLeft = function()
        {
            slideOptions("left");
        };
        
        var slideRight = function()
        {
            slideOptions("right");
        };
        
        var slideOptions = function(direction)
        {
            var option={
                "direction":direction,
                "duration" :300,
                "slowdownfactor" :3,
                "iosdelay" : 0,
                "winphonedelay" :0,
                "androiddelay"    :0,
                "fixedPixelsTop" : 0,
                "fixedPixelsBottom":0
            };
            
            slideTransition(option);
        };
        
        var slideTransition = function(option)
        {
            if(option.direction === "left")
            {
                window.plugins.nativepagetransitions.slide(option,onSuccess,onFail);
            }
            else
            {
                window.plugins.nativepagetransitions.slide(option,onSucc,onFailure);
            }
            
        };
        
        var onSuccess = function(msg)
        {
            app.apps.navigate("#child");
        };
        
        var onFail = function(msg)
        {
            alert(msg);
        };
        
        var onSucc = function(msg)
        {
            app.apps.navigate("#home");
        };
        
        var onFailure = function(msg)
        {
            alert(msg);
        };
        
        var btnFlip = function()
        {
            var options = {
            "direction"      : "up", // 'left|right|up|down', default 'right' (Android currently only supports left and right)
            "duration"       :  600, // in milliseconds (ms), default 400
            "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
            "androiddelay"   :  100,  // same as above but for Android, default 70
            "winphonedelay"  :  150 // same as above but for Windows Phone, default 200
            };
            window.plugins.nativepagetransitions.flip(
            options,
            function (msg) {console.log("success: " + msg)}, // called when the animation has finished
            function (msg) {alert("error: " + msg)} // called in case you pass in weird values
            );
        }
        
        return{
            slideLeft:slideLeft,
            slideRight:slideRight,
            btnFlip:btnFlip
        };
    }());
    return mainViewModel;
}());