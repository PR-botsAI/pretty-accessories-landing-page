/* ===== LANGUAGE TOGGLE ===== */
    const langToggle = document.getElementById('langToggle');
    const esEls = document.querySelectorAll('.lang-es');
    const enEls = document.querySelectorAll('.lang-en');
    let isSpanish = true;

    function toggleLanguage() {
      isSpanish = !isSpanish;
      esEls.forEach(el => el.classList.toggle('hidden', !isSpanish));
      enEls.forEach(el => el.classList.toggle('hidden', isSpanish));
    }
    langToggle.addEventListener('click', toggleLanguage);

    /* ===== TYPEWRITER TAGLINE ===== */
    const tagline = document.getElementById('tagline');
    const taglineText = "De la cancha al mundo. Un bracelet a la vez.";
    let i = 0;
    function typeTagline() {
      if (!tagline) return;
      if (i <= taglineText.length) {
        tagline.textContent = taglineText.slice(0, i);
        i++;
        setTimeout(typeTagline, 42);
      }
    }
    typeTagline();

    /* ===== GENERAL QA: Prevent vertical clipping on scroll-animations or resize ===== */
    window.addEventListener('resize', () => {
      // Refresh calculations if necessary for dynamic elements
    });