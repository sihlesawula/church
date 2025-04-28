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
    "Let everything that has breath praise the Lord. — Psalm 150:6",
    "This is the day the Lord has made; let us rejoice and be glad in it. — Psalm 118:24",
    "Those who hope in the Lord will renew their strength. — Isaiah 40:31",
    "His mercies are new every morning; great is your faithfulness. — Lamentations 3:23",
    "In all your ways acknowledge Him, and He will make your paths straight. — Proverbs 3:6",
    "We live by faith, not by sight. — 2 Corinthians 5:7",
    "Be joyful in hope, patient in affliction, faithful in prayer. — Romans 12:12",
    "God is our refuge and strength, an ever-present help in trouble. — Psalm 46:1",
    "Be strong and courageous... for the Lord your God will be with you wherever you go. — Joshua 1:9",
    "Seek first His kingdom and His righteousness. — Matthew 6:33",
    "In all things God works for the good of those who love Him. — Romans 8:28",
    "Now to Him who is able to do immeasurably more than all we ask or imagine. — Ephesians 3:20",
    "If any of you lacks wisdom, you should ask God... and it will be given. — James 1:5",
    "May the words of my mouth and the meditation of my heart be pleasing in your sight. — Psalm 19:14",
    "Do not be anxious about anything... but present your requests to God. — Philippians 4:6",
    "Jesus Christ is the same yesterday and today and forever. — Hebrews 13:8",
    "The Lord is my light and my salvation—whom shall I fear? — Psalm 27:1",
    "Create in me a pure heart, O God, and renew a steadfast spirit within me. — Psalm 51:10",
    "No weapon forged against you will prevail. — Isaiah 54:17",
    "Delight yourself in the Lord, and He will give you the desires of your heart. — Psalm 37:4",
    "The Lord is close to the brokenhearted. — Psalm 34:18",
    "Even though I walk through the valley of the shadow of death, I will fear no evil. — Psalm 23:4",
    "You will keep in perfect peace those whose minds are steadfast. — Isaiah 26:3",
    "Come to Me, all who are weary and burdened, and I will give you rest. — Matthew 11:28",
    "For with God nothing shall be impossible. — Luke 1:37",
    "I will never leave you nor forsake you. — Hebrews 13:5",
    "Your word is a lamp to my feet and a light to my path. — Psalm 119:105",
    "Blessed are the pure in heart, for they will see God. — Matthew 5:8",
    "The Lord is good, a refuge in times of trouble. — Nahum 1:7",
    "Rejoice always, pray continually, give thanks in all circumstances. — 1 Thessalonians 5:16-18",
    "He heals the brokenhearted and binds up their wounds. — Psalm 147:3",
    "Do not fear, for I am with you... I will strengthen you and help you. — Isaiah 41:10",
    "But God demonstrates His own love for us in this: while we were still sinners, Christ died for us. — Romans 5:8",
    "The Lord will fight for you; you need only to be still. — Exodus 14:14",
    "The fear of the Lord is the beginning of wisdom. — Proverbs 9:10",
    "Train up a child in the way he should go. — Proverbs 22:6",
    "My grace is sufficient for you, for My power is made perfect in weakness. — 2 Corinthians 12:9",
    "Taste and see that the Lord is good. — Psalm 34:8",
    "A cheerful heart is good medicine. — Proverbs 17:22",
    "Whoever believes in Him shall not perish but have eternal life. — John 3:16",
    "Your faith has healed you. — Mark 5:34",
    "The Lord bless you and keep you. — Numbers 6:24",
    "He must become greater; I must become less. — John 3:30"
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




