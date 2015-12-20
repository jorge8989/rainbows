$(function() {
    var rainbowColors = [
      "#FF0000", 
      "#FF7F00", 
      "#FFFF00", 
      "#00FF00", 
      "#0000FF", 
      "#4B0082", 
      "#8B00FF"  
    ]
    
    function circle(x, y, radius, color, width, circunf) {
      var ctx = $("#canvas1")[0].getContext("2d");
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI*circunf, true);
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.closePath();
    }
    
    function drawRainbow(x, y, radius, colors, width) {
      var circunf = 1.8
      var drawing = setInterval(function() {
        if (circunf <= 1) {
          $.each(rainbowColors, function(index, value) {
            new circle(x, y, radius - index*width, value, width, 1);
          });
          clearInterval(drawing);
        } else {
          $.each(rainbowColors, function(index, value) {
            new circle(x, y, radius - index*width, value, width, circunf);
          })
          circunf -= 0.2;
        }
      },100);
    }
    
   function drawRainbowsOnClick() {
     $("#canvas1").on("click", function(e){
       var xOffset = $(this).offset().left;
       var yOffset = $(this).offset().top;
       var coordinates = {
         x: e.pageX - xOffset,
         y: e.pageY - yOffset
       }
       drawRainbow(coordinates.x + 100, coordinates.y, 100, rainbowColors, 5)
     });
   }
   
   drawRainbowsOnClick();

})
