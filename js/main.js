/* ============================================================
   YK WELLNESS — main.js
   Nav · Scroll reveal · Treatment Recommender · Chat float
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav: scroll opacity + hamburger ───────────────────── */
  const pill       = document.querySelector('.nav__pill');
  const hamburger  = document.getElementById('hamburger');
  const overlay    = document.getElementById('navOverlay');

  if (pill) {
    window.addEventListener('scroll', () => {
      pill.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  if (hamburger && overlay && pill) {
    hamburger.addEventListener('click', () => {
      const isOpen = overlay.classList.toggle('is-open');
      pill.classList.toggle('menu-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on overlay link click
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('is-open');
        pill.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        overlay.classList.remove('is-open');
        pill.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* Mark active nav link */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Scroll Reveal via IntersectionObserver ─────────────── */
  const revealEls = document.querySelectorAll('.will-reveal');

  if (revealEls.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ── Hero parallax (light, scroll-limited) ─────────────── */
  const heroImg = document.querySelector('.hero__image-col');
  if (heroImg) {
    let ticking = false;
    const heroBottom = heroImg.getBoundingClientRect().bottom + window.scrollY;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY < heroBottom) {
            heroImg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── Treatment Recommender ──────────────────────────────── */
  const recommender = document.getElementById('recommender');
  if (recommender) {
    const steps   = recommender.querySelectorAll('.recommender__step');
    const dots    = recommender.querySelectorAll('.recommender__dot');
    const restart = recommender.querySelector('.recommender__restart');

    const answers = { goal: null, area: null, experience: null };

    // Questions
    const questions = [
      {
        key: 'goal',
        options: [
          { label: 'Pain or tension relief',   value: 'pain' },
          { label: 'Injury recovery',           value: 'recovery' },
          { label: 'Sports performance',        value: 'sports' },
          { label: 'General wellness',          value: 'wellness' },
        ]
      },
      {
        key: 'area',
        options: [
          { label: 'Back and neck',             value: 'back' },
          { label: 'Shoulders and arms',        value: 'shoulders' },
          { label: 'Legs and lower body',       value: 'legs' },
          { label: 'Full body',                 value: 'full' },
        ]
      },
      {
        key: 'experience',
        options: [
          { label: 'Massage before',            value: 'massage' },
          { label: 'Osteopathy before',         value: 'osteopathy' },
          { label: 'Needling or cupping',       value: 'needling' },
          { label: 'New to treatment',          value: 'new' },
        ]
      }
    ];

    // Result map
    function getResult(a) {
      if (a.goal === 'recovery' || a.experience === 'osteopathy') {
        return {
          name: 'Osteopathy',
          desc: 'A hands-on approach to diagnosing and treating your musculoskeletal system. Ideal for recovery, mobility, and lasting structural change.',
          href: 'osteopathy.html',
          from: '£75'
        };
      }
      if (a.goal === 'sports' || (a.goal === 'pain' && a.area === 'legs') || a.experience === 'needling') {
        if (a.experience === 'needling') {
          return {
            name: 'Dry Needling',
            desc: 'Precise trigger-point needling that releases deep muscular tension and speeds up recovery from chronic pain and sports injuries.',
            href: 'dry-needling.html',
            from: '£53'
          };
        }
        return {
          name: 'Sports Massage',
          desc: 'Targeted soft-tissue work for athletes and active clients. Reduces tension, improves mobility, and accelerates recovery between sessions.',
          href: 'sports-massage.html',
          from: '£53'
        };
      }
      if (a.goal === 'pain' && (a.area === 'back' || a.area === 'shoulders')) {
        return {
          name: 'Deep Tissue Massage',
          desc: 'Firm, focused pressure that works through layers of muscle to release chronic tension and restore movement in your back and shoulders.',
          href: 'deep-tissue.html',
          from: '£75'
        };
      }
      if (a.goal === 'wellness' || a.experience === 'new') {
        return {
          name: 'Swedish Massage',
          desc: 'A full-body treatment using flowing strokes to ease tension, improve circulation, and leave you genuinely restored. The ideal starting point.',
          href: 'swedish.html',
          from: '£75'
        };
      }
      return {
        name: 'Deep Tissue Massage',
        desc: 'Firm, focused pressure that works through layers of muscle to release chronic tension. One of our most popular treatments.',
        href: 'deep-tissue.html',
        from: '£75'
      };
    }

    function goToStep(index) {
      steps.forEach((s, i) => s.classList.toggle('active', i === index));
      dots.forEach((d, i) => d.classList.toggle('done', i < index));
    }

    function showResult() {
      const result = getResult(answers);
      const resultStep = recommender.querySelector('.recommender__result-step');
      if (resultStep) {
        resultStep.querySelector('.recommender__result-name').textContent = result.name;
        resultStep.querySelector('.recommender__result-desc').textContent = result.desc;
        const learnLink = resultStep.querySelector('.recommender__result-learn');
        const bookLink  = resultStep.querySelector('.recommender__result-book');
        if (learnLink) learnLink.href = result.href;
        if (bookLink)  bookLink.href  = 'YOUR_FRESHA_URL';
      }
      goToStep(3);
      dots.forEach(d => d.classList.add('done'));
    }

    // Wire up option buttons
    questions.forEach((q, qIndex) => {
      const stepEl = steps[qIndex];
      if (!stepEl) return;
      stepEl.querySelectorAll('.recommender__option').forEach(btn => {
        btn.addEventListener('click', () => {
          stepEl.querySelectorAll('.recommender__option').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          answers[q.key] = btn.dataset.value;

          setTimeout(() => {
            if (qIndex < questions.length - 1) {
              goToStep(qIndex + 1);
            } else {
              showResult();
            }
          }, 220);
        });
      });
    });

    if (restart) {
      restart.addEventListener('click', () => {
        answers.goal = answers.area = answers.experience = null;
        recommender.querySelectorAll('.recommender__option').forEach(b => b.classList.remove('selected'));
        goToStep(0);
      });
    }

    goToStep(0);
  }

  /* ── Marquee (hero bottom strip) ───────────────────────── */
  const marquee = document.querySelector('.marquee__inner');
  if (marquee) {
    // Clone for seamless loop
    const clone = marquee.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    marquee.parentElement.appendChild(clone);
  }

})();
