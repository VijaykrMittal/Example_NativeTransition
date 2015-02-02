var app = (function(win){
    'use strict';
    
    var apps;
    apps = new kendo.mobile.Application(document.body,{skin:'flat',initial:''});
    
    return{
        apps:apps
    };
}(window));