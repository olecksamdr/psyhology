(function(){
  
  var parallax,
      speed = 0.5;
    
  window.addEventListener('load', windowLoaded, false);
    
  function windowLoaded() {
      
      parallax = document.querySelectorAll(".parallax");
      
     // window.onscroll = function(){
   //     [].slice.call(parallax).forEach(function(el,i){

   //     var windowYOffset = window.pageYOffset,
   //       elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

   //     el.style.backgroundPosition = elBackgrounPos;

   // });
 // };
//      scroll(1000, 6000);
      
      // window.onscroll = 
      // test();
      // function test(){          
      //   var scrollTop = window.pageYOffset ||
      //       document.documentElement.scrollTop;
        
      //   var parallaxPos = (function () {
      //       var obj = {};
      //       [].slice.call(parallax).forEach(function(el,i){
      //                    obj[i] = getCoords(el);    
      //                   });
      //       return obj;
      //               })();
          
      //     console.log(parallaxPos[1]);
      //     console.log(scrollTop);
          
      //  // if (scrollTop < parallaxPos[1].top)
      //     var div = parallaxPos[1].top - scrollTop;
      //     console.log(div);
      //      scroll(scrollTop, div, 400);
      // }
      
      /* ===========================================================
          робимо плавний скролл
         =========================================================== */
      
}

    function scroll(from, to, duration) {
        var start = new Date;
        
        var id = setInterval(anim, 10);
        
        function anim() {
            var timePassed = new Date - start;
            var progress = timePassed / duration;
            
            var delta = from + to * Math.pow(progress, 2);
//            var d = delta;
            
           window.scrollTo(0, delta);
            // window.scrollTop = delta;
            
            if (progress > 1) progress = 1;
            if (progress == 1) clearInterval(id);
        }
    }

    if (window.addEventListener) {
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", MouseWheelHandler, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
    }

    function MouseWheelHandler(e){
      e.preventDefault();
      var scrollTop = window.pageYOffset ||
            document.documentElement.scrollTop;
        
        var parallaxPos = (function () {
            var obj = {};
            [].slice.call(parallax).forEach(function(el,i){
                         obj[i] = getCoords(el);    
                        });
            return obj;
                    })();
          
          console.log(parallaxPos[1]);
          console.log(scrollTop);
          
       // if (scrollTop < parallaxPos[1].top)
         // var div = parallaxPos[1].top - scrollTop;
          // console.log(div);
           

      // return: 1 - up; -1 down
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      
      if (delta == -1) {
        (scrollTop < parallaxPos[1].top) ? scroll(scrollTop, parallaxPos[1].top - scrollTop + 54, 500) : '';
        (scrollTop >= parallaxPos[1].top && scrollTop < parallaxPos[2].top) ? scroll(scrollTop, parallaxPos[2].top - scrollTop + 54, 500) : '';
        // (scrollTop >= parallaxPos[1].top && scrollTop < parallaxPos[2].top) ? scroll(scrollTop, parallaxPos[2].top - scrollTop, 500) : '';
      } 
      else {
          (scrollTop >= parallaxPos[2].top && scrollTop >= parallaxPos[1].top) ? scroll(scrollTop, parallaxPos[1].top - scrollTop + 54, 500) : '';
          (scrollTop >= parallaxPos[1].top && scrollTop < parallaxPos[2].top) ? scroll(scrollTop, parallaxPos[0].top - scrollTop + 54, 500) : '';
      }

    }

    //     if (window.addEventListener) {
    //   // IE9, Chrome, Safari, Opera
    //   window.addEventListener("scroll", MouseWheelHandler, false);
    //   // Firefox
    //   // window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
    // }

    //   var oldScroll = window.pageYOffset ||
    //         document.documentElement.scrollTop;

    // function MouseWheelHandler(e){
    //   e.preventDefault();
      
    //   setTimeout(function (){
    //     var scrollTop = window.pageYOffset ||
    //         document.documentElement.scrollTop;
        
    //     var parallaxPos = (function () {
    //         var obj = {};
    //         [].slice.call(parallax).forEach(function(el,i){
    //                      obj[i] = getCoords(el);    
    //                     });
    //         return obj;
    //                 })();
          
    //       console.log(parallaxPos[1]);
    //       console.log(scrollTop);
          
       // if (scrollTop < parallaxPos[1].top)
         // var div = parallaxPos[1].top - scrollTop;
          // console.log(div);
           

    //   // return: 1 - up; -1 down
    //   var delta;
    //     if ( (oldScroll - scrollTop) > oldScroll) {delta = 1;}
    //     if ( (oldScroll - scrollTop) < oldScroll) {delta = -1;}
      
    //   if (delta == -1) {
    //     (scrollTop < parallaxPos[1].top) ? scroll(scrollTop, parallaxPos[1].top - scrollTop + 54, 500) : '';
    //     (scrollTop >= parallaxPos[1].top && scrollTop < parallaxPos[2].top) ? scroll(scrollTop, parallaxPos[2].top - scrollTop + 54, 500) : '';
    //     // (scrollTop >= parallaxPos[1].top && scrollTop < parallaxPos[2].top) ? scroll(scrollTop, parallaxPos[2].top - scrollTop, 500) : '';
    //   } 
    //   else {
    //       (scrollTop >= parallaxPos[2].top && scrollTop >= parallaxPos[1].top) ? scroll(scrollTop, parallaxPos[1].top - scrollTop + 54, 500) : '';
    //       (scrollTop >= parallaxPos[1].top && scrollTop < parallaxPos[2].top) ? scroll(scrollTop, parallaxPos[0].top - scrollTop + 54, 500) : '';
    //   }
    //   }, 200);
    // }
    
    // function test () {
    //     // скільки на даний момент проскролено
    //     var scrollTop = window.pageYOffset ||
    //         document.documentElement.scrollTop;
    // }
    
    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();
        var scrollTop = window.pageYOffset ||
            document.documentElement.scrollTop
        
        return {
            top: Math.round(box.top + scrollTop)
            //left: box.left + pageXOffset
        };
    }

})();