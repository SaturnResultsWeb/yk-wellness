/* ============================================================
   YK WELLNESS — main.js
   Nav · Scroll reveal · Treatment Recommender · Chat float
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav: scroll + hide-on-scroll + mobile drawer ─────── */
  const nav         = document.getElementById('nav');
  const hamburger   = document.getElementById('hamburger');
  const mobileNav   = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileClose = document.getElementById('mobileClose');

  /* Scrolled state + hide-on-scroll */
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (nav) {
      nav.classList.toggle('scrolled', y > 60);
      if (y > 200) {
        nav.classList.toggle('nav--hidden', y > lastScrollY);
      } else {
        nav.classList.remove('nav--hidden');
      }
    }
    lastScrollY = y;
  }, { passive: true });

  /* Open / close mobile drawer */
  function openDrawer() {
    mobileNav && mobileNav.classList.add('open');
    mobileOverlay && mobileOverlay.classList.add('open');
    nav && nav.classList.add('nav--open');
    hamburger && hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    mobileNav && mobileNav.classList.remove('open');
    mobileOverlay && mobileOverlay.classList.remove('open');
    nav && nav.classList.remove('nav--open');
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  /* Mark active nav link */
  const massagePages = ['massage-therapy.html', 'deep-tissue.html', 'swedish.html',
                        'sports-massage.html', 'cupping.html', 'dry-needling.html'];
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
    if (href === 'massage-therapy.html' && massagePages.includes(currentPath)) {
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
        if (bookLink)  bookLink.href  = 'https://www.fresha.com/a/yk-wellness-london-westway-sports-fitness-centre-uk-1-crowthorne-road-git4ohyh';
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

  /* ── Page transitions ──────────────────────────────────── */
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || link.target === '_blank' ||
        href.startsWith('http') || href.startsWith('#') ||
        href.startsWith('mailto') || href.startsWith('tel') ||
        href.startsWith('javascript')) return;
    e.preventDefault();
    document.documentElement.classList.add('is-leaving');
    setTimeout(() => { window.location.href = href; }, 230);
  });

  /* ── Marquee (hero bottom strip) ───────────────────────── */
  const marquee = document.querySelector('.marquee__inner');
  if (marquee) {
    // Clone for seamless loop
    const clone = marquee.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    marquee.parentElement.appendChild(clone);
  }

})();
