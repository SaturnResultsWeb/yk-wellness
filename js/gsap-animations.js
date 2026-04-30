/* ============================================================
   YK WELLNESS — GSAP Scroll Animations
   Requires: GSAP 3 + ScrollTrigger (loaded via CDN)
   Paradigms: Scrubbing Text Reveals + Image Scale & Fade
   ============================================================ */

(function () {
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* ── 1. Mission quote: word-by-word opacity scrub ──────── */
  (function () {
    const quote = document.querySelector('.mission__quote');
    if (!quote) return;

    const raw = quote.innerHTML;
    const words = raw.split(/(\s+)/);
    quote.innerHTML = words.map(chunk =>
      chunk.trim()
        ? `<span class="g-w" style="display:inline;opacity:0.1">${chunk}</span>`
        : chunk
    ).join('');

    gsap.to(quote.querySelectorAll('.g-w'), {
      opacity: 1,
      stagger: 0.05,
      ease: 'none',
      scrollTrigger: {
        trigger: '.mission',
        start: 'top 68%',
        end: 'bottom 28%',
        scrub: 1.4,
      }
    });
  })();

  /* ── 2. Service feature card: image scale & fade ───────── */
  (function () {
    const img = document.querySelector('.service-card--feature .service-card__image');
    if (!img) return;

    gsap.fromTo(img,
      { scale: 0.86, transformOrigin: 'center center' },
      {
        scale: 1.0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.service-card--feature',
          start: 'top bottom',
          end: 'center 30%',
          scrub: 2.0,
        }
      }
    );
  })();

  /* ── 3. Service cards: staggered entrance ──────────────── */
  (function () {
    const cards = gsap.utils.toArray('.service-card');
    if (!cards.length) return;

    gsap.from(cards, {
      y: 48,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      stagger: { amount: 0.5, from: 'start' },
      scrollTrigger: {
        trigger: '.services',
        start: 'top 80%',
        once: true,
      }
    });
  })();

  /* ── 4. Trust stat counters ────────────────────────────── */
  (function () {
    document.querySelectorAll('.trust-stat__figure').forEach(el => {
      const raw = el.textContent.trim();
      const num = parseFloat(raw);
      const hasPlus = raw.includes('+');
      const decimals = raw.includes('.') ? 1 : 0;
      if (isNaN(num) || num > 10) return;

      const counter = { val: 0 };
      gsap.to(counter, {
        val: num,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate() {
          el.textContent = counter.val.toFixed(decimals) + (hasPlus ? '+' : '');
        },
        scrollTrigger: {
          trigger: el.closest('.trust-stat'),
          start: 'top 88%',
          once: true,
        }
      });
    });
  })();

  /* ── 5. Process steps: staggered slide-up ──────────────── */
  (function () {
    const steps = gsap.utils.toArray('.process-step');
    if (!steps.length) return;

    gsap.from(steps, {
      y: 36,
      opacity: 0,
      duration: 0.75,
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.process',
        start: 'top 78%',
        once: true,
      }
    });
  })();

  /* ── 6. Testimonials: staggered entrance ───────────────── */
  (function () {
    const cards = gsap.utils.toArray('.testimonial-card');
    if (!cards.length) return;

    gsap.from(cards, {
      y: 32,
      opacity: 0,
      duration: 0.75,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 78%',
        once: true,
      }
    });
  })();

  /* ── 7. CTA band heading: clip-path reveal ─────────────── */
  (function () {
    const heading = document.querySelector('.cta-band__heading');
    if (!heading) return;

    gsap.from(heading, {
      y: 28,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-band',
        start: 'top 82%',
        once: true,
      }
    });
  })();

  /* ── 8. Page hero content: subtle upward parallax ──────── */
  (function () {
    const content = document.querySelector('.hero__content');
    if (!content) return;

    gsap.to(content, {
      y: -32,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  })();

})();
