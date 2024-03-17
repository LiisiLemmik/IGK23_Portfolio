window.onload = function(){
    const initSlider = () => {
        const imageList = document.querySelector(".slider-wrapper .image-list");
        const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    
        // Slide images accoring to the slide button clicks
        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = imageList.clientWidth + 100 * direction;
                imageList.scrollBy({ left:scrollAmount, behavior: "smooth" });
                const element = document.getElementById("myDIV");let text= "clientHeight: " + element.clientHeight + "px<br>";
                text += "clientWidth: " + element.clientWidth + "px";
                document.getElementById("demo").innerHTML = text;
            });
        });
    }
    
    window.addEventListener("load", initSlider) 
    }
    

const activePage = window.location.pathname;
const navLinks = document.querySelector('nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})