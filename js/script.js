document.getElementById("hamburger-icon").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});

const floatingImage = document.getElementById("floatingImage");
const imageModal = document.getElementById("imageModal");
const closeModal = document.querySelector(".close-modal");

floatingImage.addEventListener("click", () => {
    imageModal.classList.add("show");
});

closeModal.addEventListener("click", () => {
    imageModal.classList.remove("show");
});

imageModal.addEventListener("click", (e) => {
    if(e.target === imageModal){
        imageModal.classList.remove("show");
    }
});



const navbar = document.querySelector(".navbar");
        window.addEventListener("scroll", function(){
            if(window.scrollY > 50){
                navbar.classList.add("scrolled");
            }else{
                navbar.classList.remove("scrolled");
            }
        });