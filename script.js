let HomeIcon = document.querySelector("#menuIcon1");
let AboutIcon = document.querySelector("#menuIcon2");




let HomeContainer = document.getElementsByClassName("homeContainer")[0]; // Corrected the class name selection
let aboutContainer = document.getElementsByClassName("aboutContainer")[0]

AboutIcon.addEventListener("click", () => {
    // alert("clicked");
    HomeContainer.style.display = "none"; // Corrected the typo in the variable name
    aboutContainer.style.display = "block";

    AboutIcon.classList.add("activeIcon")
    HomeIcon.classList.remove("activeIcon");
});

HomeIcon.addEventListener("click" , ()=>{
    aboutContainer.style.display = "none";
    HomeContainer.style.display = "block";

    AboutIcon.classList.remove("activeIcon")
    HomeIcon.classList.add("activeIcon");
})
