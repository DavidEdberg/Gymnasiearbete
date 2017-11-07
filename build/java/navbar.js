function toggleDropDown() {
    var x = document.getElementById("dropdown-content").style.maxWidth = "700px";
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}