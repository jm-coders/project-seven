$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
});
$(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
  }).trigger('scroll');

  /* Minified js for jQuery BackTop */
!(function (o) {
    o.fn.backTop = function (e) {
        var n = this,
            i = o.extend({ position: 400, speed: 100, color: "white" }, e),
            t = i.position,
            c = i.speed,
            d = i.color;
        n.addClass("white" == d ? "white" : "red" == d ? "red" : "green" == d ? "green" : "black"),
            n.css({ right: 40, bottom: 40, position: "fixed" }),
            o(document).scroll(function () {
                var e = o(window).scrollTop();
                console.log(e), e >= t ? n.fadeIn(c) : n.fadeOut(c);
            }),
            n.click(function () {
                o("html, body").animate({ scrollTop: 0 }, { duration: 500 });
            });
    };
})(jQuery);
$(document).ready( function() {
    // Active link

    $("nav a").click(function(){
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });
    
    // BACK TOP SCROOL

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
    $(".sticky_menu").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("stickey");
        } else {
            $("nav").removeClass("stickey");
        }
    });
    });
    function openNav() {
        document.getElementById("myNav").style.width = "100%"
    } 
    function closeNav() {
        document.getElementById("myNav").style.width = "0%"
    }