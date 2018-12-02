function moveSatellite() {
    var elem = document.getElementById("satellite"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos + 20; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}