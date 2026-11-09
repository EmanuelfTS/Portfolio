function hamburg() {
    const navbar = document.querySelector(".dropdown");
    if (navbar) {
        navbar.style.transform = "translateY(0px)";
    }
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    if (navbar) {
        navbar.style.transform = "translateY(-500px)";
    }
}
