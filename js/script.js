document.getElementById("hamburger-icon").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {

    const trigger = document.getElementById("verseTrigger");
    const modal = document.getElementById("verseModal");
    const closeBtn = document.getElementById("closeModal");

    trigger.addEventListener("click", () => {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    });

    modal.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.classList.remove("active");
            document.body.style.overflow = "auto";

        }

    });

});




