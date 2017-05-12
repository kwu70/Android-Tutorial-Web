$(document).ready(function() { 	
            $('.zoomple').zoomple({ 
                    blankURL : 'images/blank.gif',
                    loaderURL : 'images/loader.gif'
                    });

            $('.zoompleFixed').zoomple({
                offset : {x:4,y:0},
                windowPosition : {x:'right',y:'bottom'}, 
                zoomWidth : 250,  
                zoomHeight : 250, 
                attachWindowToMouse : false}); 
            $('.zoompleDiffWidth').zoomple({
                offset : {x:10,y:10}, 
                zoomWidth : 250, 
                delay : 1000, 
                zoomHeight : 250}); 
         }); 