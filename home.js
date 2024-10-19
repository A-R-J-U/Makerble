const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', function() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
});




const drp= document.querySelector('.dropbtn');

drp.addEventListener('click',()=>{document.getElementById("myDropdown").classList.toggle("show");})

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}