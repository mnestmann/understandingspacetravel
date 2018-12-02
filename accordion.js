window.onload=function(){
var accordion = document.getElementsByClassName("accordion");
for (let i = 0; i < accordion.length; i++) {
accordion[i].addEventListener("click", function(){
	 /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
       this.classList.toggle("active");
		
        /* Toggle between hiding and showing the active panel */
       var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            for (let j = 0; j < accordion.length; j++){
            accordion[j].nextElementSibling.style.display = "none";
            }
            panel.style.display = "block";
        }
});
};
};