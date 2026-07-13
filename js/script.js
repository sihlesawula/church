document.getElementById("hamburger-icon").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});

const dayIndex = getDayOfYear() % verses.length;
const verseText = verses[dayIndex];

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("dailyVerse").textContent = verseText;

    const trigger = document.getElementById("verseTrigger");
    const modal = document.getElementById("verseModal");
    const closeBtn = document.querySelector(".close-modal");

    trigger.addEventListener("click", () => {
        modal.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

});




