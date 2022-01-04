$(document).ready( function() {

    $('#backTop').backTop({
    
    
    
      // the scroll position in px from the top
    
      'position' : 400,
    
    
    
      // scroll animation speed
    
      'speed' : 500,
    
    
    
      // red, white, black or green
    
      'color' : 'white',
    
    });
    $("a").on('click',function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 300, function(){
                window.location.hash = hash;
            })
        }
    });
    // $(".sticky_menu").waypoint(function(direction){
    //     if (direction == "down"){
    //         $("nav").addClass("sticky");
    //     } else {
    //         $("nav").removeClass("sticky");
    //     }
    // });
    
    });
    