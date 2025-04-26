document.getElementById("hamburger-icon").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});


const verses = [
    "The Lord is my shepherd; I shall not want. — Psalm 23:1",
    "For I know the plans I have for you, declares the Lord. — Jeremiah 29:11",
    "I can do all things through Christ who strengthens me. — Philippians 4:13",
    "Trust in the Lord with all your heart. — Proverbs 3:5",
    "The name of the Lord is a strong tower. — Proverbs 18:10",
    "Cast all your anxiety on Him because He cares for you. — 1 Peter 5:7",
    "Be still, and know that I am God. — Psalm 46:10",
    "Let everything that has breath praise the Lord. — Psalm 150:6"
    // Add more as desired
  ];

  function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  const dayIndex = getDayOfYear() % verses.length;
  const verseText = verses[dayIndex];

  document.addEventListener("DOMContentLoaded", () => {
    const versePara = document.querySelector(".verse-popup .popup-content p");
    if (versePara) {
      versePara.textContent = verseText;
    }
  });

  function closePopup() {
    document.getElementById('versePopup').style.display = 'none';
  }




