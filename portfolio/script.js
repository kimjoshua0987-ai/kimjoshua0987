// script.js

// Smooth Scroll

function scrollToSection(id){

    document.getElementById(id).scrollIntoView({
        behavior:"smooth"
    });

}

// OPEN CONTACT MODAL

function openContactModal(){

    document.getElementById("contactModal").style.display = "flex";

}

// CLOSE CONTACT MODAL

function closeContactModal(){

    document.getElementById("contactModal").style.display = "none";

}

// CLOSE MODAL OUTSIDE CLICK

window.onclick = function(event){

    const modal = document.getElementById("contactModal");

    if(event.target === modal){

        modal.style.display = "none";

    }

}