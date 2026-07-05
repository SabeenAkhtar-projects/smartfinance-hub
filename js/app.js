// ═══════════════════════════════════════
// SMARTFINANCE HUB — app.js
// Language switcher + general UI logic
// ═══════════════════════════════════════

// ── LANGUAGE SWITCHER ──
(function initLang() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.dataset.lang;
      document.documentElement.lang = lang || 'en';
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    });
  });
})();
