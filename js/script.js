/* mobile navigation active, default false */
var active = false;

function navToggle(){
    document.querySelector('.burger').classList.toggle("toggle");
    document.querySelector('.nav-links').classList.toggle("nav-active");
    active = !active;
}

/* if you click outside of the nav links it should close */
document.addEventListener('click', function(event) {
    if (active) {
        var isClickInside = document.querySelector('.burger').contains(event.target);

        if (!isClickInside){
            document.querySelector('.burger').classList.toggle("toggle");
            document.querySelector('.nav-links').classList.toggle("nav-active");
            active = !active;
        }
    }
});
