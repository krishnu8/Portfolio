// dark theme
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("darktheme");
    if (document.body.classList.contains("darktheme")) {
        icon.src = "img/sun.png";
    }
    else {
        icon.src = "img/moon.png";
    }
}
// auto write 
var typed = new Typed(".write", {
    strings: ["Student", "Developer", "Progammer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
// ham
function onClickMenu(){
    document.getElementById("ham").classList.toggle("icon");
    document.getElementById("sec3").classList.toggle("change1")
}