let HomeIcon = document.querySelector("#menuIcon1");
let AboutIcon = document.querySelector("#menuIcon2");




let HomeContainer = document.getElementsByClassName("homeContainer")[0]; // Corrected the class name selection
let aboutContainer = document.getElementsByClassName("aboutContainer")[0]






HomeIcon.addEventListener("click" , ()=>{
    aboutContainer.style.display = "none";


    HomeContainer.classList.add("hidden");
    HomeContainer.style.display = "block";
    void HomeContainer.offsetWidth;
    HomeContainer.classList.add("show")

    AboutIcon.classList.remove("activeIcon")
    HomeIcon.classList.add("activeIcon");

    aboutContainer.classList.remove("show");

})

AboutIcon.addEventListener("click", () => {
    // alert("clicked");
    HomeContainer.style.display = "none";
    
    
    aboutContainer.classList.add("hidden")
    aboutContainer.style.display = "block";
    void aboutContainer.offsetWidth;
    aboutContainer.classList.add("show");



    AboutIcon.classList.add("activeIcon")
    HomeIcon.classList.remove("activeIcon");

    HomeContainer.classList.remove("show");


    
});


