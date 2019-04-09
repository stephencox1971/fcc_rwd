// coded by @ChaituVR
const projectName = 'portfolio';
localStorage.setItem('example_project', 'Personal Portfolio');

function myFunction() {
    var x = document.getElementById("nav-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
