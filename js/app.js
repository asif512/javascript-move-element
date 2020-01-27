
var circle = document.getElementById("circle");
(function(){
    var topPosition = 0;
    var leftPosition = 450;
    setInterval(moves, 10);
    function moves(){
        if(topPosition < 270 && leftPosition == 450){
            topPosition++;
            circle.style.top = topPosition + "px";
        }
        else if(leftPosition < 720 && topPosition == 270){
            leftPosition++;
            circle.style.left = leftPosition + "px";
        }
        else if(topPosition > 0 && leftPosition == 720){
            topPosition--;
            circle.style.top = topPosition + "px";
        }
        else if(leftPosition > 450){
            leftPosition--;
            circle.style.left = leftPosition + "px";
        }  
    }
})()

