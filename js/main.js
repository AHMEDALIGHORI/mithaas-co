/* ══════════════════════════════════════════════════════════════════════════
   MITHAAS & CO.  ·  js/main.js
   One classic script. GSAP + ScrollTrigger + Lenis. No build step.
   ──────────────────────────────────────────────────────────────────────────
   Everything the shop would want to change lives in the three tables below:
   SITE, SWEETS, MENU.
   ══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── 1 · the shop ─────────────────────────────────────────────────────── */
  var SITE = {
    brand: 'Mithaas & Co.',
    whatsapp: '919811061961',            // digits only, country code first
    diwali: '2026-11-08T18:30:00+05:30', // Lakshmi Puja, IST
    boxPrice: 150,
    slots: 9
  };

  /* ── 2 · the six sweets ───────────────────────────────────────────────── */
  var SWEETS = [
    {
      id: 'kaju', en: 'Kaju Katli', hi: 'काजू कतली', acc: '#e8dcc4',
      kg: 1180, pc: 59,
      desc: 'Cashews ground to a whisper, set into diamonds and laid with real silver varq.',
      made: 'Cashew, cane sugar, silver leaf', keeps: '12 days', inBox: '2 pieces'
    },
    {
      id: 'laddoo', en: 'Motichoor Laddoo', hi: 'मोतीचूर लड्डू', acc: '#f39c1e',
      kg: 640, pc: 32,
      desc: 'Ten thousand saffron boondi pearls, bound in warm ghee and pressed by hand at 4 a.m.',
      made: 'Gram flour, ghee, saffron', keeps: '7 days', inBox: '2 pieces'
    },
    {
      id: 'jalebi', en: 'Jalebi', hi: 'जलेबी', acc: '#ef8a2a',
      kg: 480, pc: 24,
      desc: 'Fermented overnight, piped into hot ghee, and soaked while it still sings.',
      made: 'Maida, ghee, sugar syrup', keeps: '3 days', inBox: '2 pieces'
    },
    {
      id: 'gulab', en: 'Gulab Jamun', hi: 'गुलाब जामुन', acc: '#d9577a',
      kg: 720, pc: 36,
      desc: 'Khoya rolled dark and slow, then left to drink rose-cardamom syrup overnight.',
      made: 'Khoya, ghee, rose, cardamom', keeps: '6 days', inBox: '1 piece'
    },
    {
      id: 'rasmalai', en: 'Rasmalai', hi: 'रसमलाई', acc: '#f3d58e',
      kg: 680, pc: 68,
      desc: 'Soft chenna discs floating in saffron milk, cold enough to be a relief.',
      made: 'Chenna, milk, saffron, pistachio', keeps: '2 days', inBox: '1 piece'
    },
    {
      id: 'soan', en: 'Soan Papdi', hi: 'सोन पापड़ी', acc: '#e2b862',
      kg: 560, pc: 28,
      desc: 'Flour and ghee pulled into a thousand silk threads, pressed flat and cut clean.',
      made: 'Gram flour, ghee, cardamom', keeps: '15 days', inBox: '1 piece'
    }
  ];

  /* ── 3 · the price list ───────────────────────────────────────────────── */
  var MENU = [
    {
      tab: 'Mithai', items: [
        { en: 'Kaju Katli', hi: 'काजू कतली', note: 'Silver varq, 12 days', kg: 1180, img: 'thumb-kaju' },
        { en: 'Motichoor Laddoo', hi: 'मोतीचूर लड्डू', note: 'Saffron boondi', kg: 640, img: 'thumb-laddoo' },
        { en: 'Jalebi', hi: 'जलेबी', note: 'Fried to order', kg: 480, img: 'thumb-jalebi' },
        { en: 'Gulab Jamun', hi: 'गुलाब जामुन', note: 'Rose-cardamom syrup', kg: 720, img: 'thumb-gulab' },
        { en: 'Rasmalai', hi: 'रसमलाई', note: 'Saffron milk, chilled', kg: 680, img: 'thumb-rasmalai' },
        { en: 'Soan Papdi', hi: 'सोन पापड़ी', note: 'Silk-thread, pistachio', kg: 560, img: 'thumb-soan' },
        { en: 'Pista Barfi', hi: 'पिस्ता बर्फी', note: 'Pistachio, khoya, varq', kg: 940, img: 'thumb-kaju' },
        { en: 'Kesar Peda', hi: 'केसर पेड़ा', note: 'Kashmiri saffron', kg: 760, img: 'thumb-laddoo' }
      ]
    },
    {
      tab: 'Syrup & Bengali', items: [
        { en: 'Rajbhog', hi: 'राजभोग', note: 'Large chenna dumpling, saffron', kg: 780, img: 'thumb-rasmalai' },
        { en: 'Cham Cham', hi: 'चम चम', note: 'Coconut, rose water', kg: 720, img: 'thumb-gulab' },
        { en: 'Sandesh', hi: 'संदेश', note: 'Chenna, cardamom, cold', kg: 860, img: 'thumb-rasmalai' },
        { en: 'Shrikhand', hi: 'श्रीखंड', note: 'Hung curd, mango or kesar', kg: 520 },
        { en: 'Rabri', hi: 'रबड़ी', note: 'Reduced milk, pistachio', kg: 640 },
        { en: 'Gulab Jamun (Syrup Pack)', hi: 'गुलाब जामुन', note: '1 kg tin, extra syrup', kg: 760 }
      ]
    },
    {
      tab: 'Hot counter', items: [
        { en: 'Jalebi — from the kadai', hi: 'जलेबी', note: 'Between 4 p.m. and 8 p.m.', kg: 480, img: 'thumb-jalebi' },
        { en: 'Imarti', hi: 'इमरती', note: 'Urad dal, ghee, kesar', kg: 560 },
        { en: 'Gujiya', hi: 'गुझिया', note: 'Khoya and dry fruit, Holi only', kg: 620 },
        { en: 'Malpua', hi: 'मालपुआ', note: 'With rabri, served warm', kg: 540 },
        { en: 'Petha (Agra)', hi: 'पेठा', note: 'Angoori, kesar', kg: 420 }
      ]
    },
    {
      tab: 'Dry fruits', items: [
        { en: 'Kaju (whole)', hi: 'काजू', note: 'W240 grade, Kashmir', kg: 1680, img: 'thumb-kaju' },
        { en: 'Badam (whole)', hi: 'बादाम', note: 'Mamra, hand-sorted', kg: 1420 },
        { en: 'Pista (salted)', hi: 'पिस्ता', note: 'Iranian, shell on', kg: 1840, img: 'thumb-rasmalai' },
        { en: 'Kishmish (golden)', hi: 'किशमिश', note: 'Long seedless', kg: 720 },
        { en: 'Anjeer (Afghan)', hi: 'अंजीर', note: 'Soft, sun-dried', kg: 1560 },
        { en: 'Kesar (Kashmiri)', hi: 'केसर', note: 'Mongra, per 10 g', kg: 2200 }
      ]
    }
  ];

  /* ── 4 · shorthands ───────────────────────────────────────────────────── */
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var PHONE = function () { return window.innerWidth < 1000; };
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var dur = function (d) { return RM ? 0.001 : d; };
  var money = function (n) { return '₹' + n.toLocaleString('en-IN'); };
  var thumb = function (id) { return 'media/img/thumb-' + id + '.webp'; };

  if (!window.gsap || !window.ScrollTrigger) {
    document.body.classList.remove('is-loading');
    var ld = $('#loader'); if (ld) ld.style.display = 'none';
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  if (RM) gsap.defaults({ duration: 0.001 });

  /* scroll memory: pinned sections are measured from the top, so a reload
     always starts at the top instead of jumping into a pin. */
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  ScrollTrigger.clearScrollMemory('manual');

  /* ── 5 · smooth scroll ────────────────────────────────────────────────── */
  var lenis = null;
  if (!RM && window.Lenis) {
    lenis = new window.Lenis({
      duration: 1.15,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    window.lenis = lenis;   /* handy for the demo console, and for anchors */
  }
  function goTo(target) {
    var el = typeof target === 'string' ? $(target) : target;
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.4 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset, behavior: 'auto' });
  }

  /* ── 6 · toast + cursor ───────────────────────────────────────────────── */
  var toastEl = $('#toast'), toastText = $('#toastText'), toastT;
  function toast(msg) {
    if (!toastEl) return;
    toastText.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('is-on'); }, 2400);
  }

  var cur = $('#cursor'), curLabel = $('#cursorLabel');
  if (cur && FINE && !RM) {
    document.documentElement.classList.add('has-cursor');
    gsap.set(cur, { xPercent: -50, yPercent: -50 });
    var cx = gsap.quickTo(cur, 'x', { duration: 0.32, ease: 'power3.out' });
    var cy = gsap.quickTo(cur, 'y', { duration: 0.32, ease: 'power3.out' });
    window.addEventListener('mousemove', function (e) {
      cx(e.clientX); cy(e.clientY);
      mouse.x = e.clientX; mouse.y = e.clientY;
    }, { passive: true });
    document.addEventListener('mouseover', function (e) {
      var t = e.target.closest('[data-cursor]');
      var labelled = e.target.closest('[data-cursor-label]');
      cur.classList.toggle('is-grow', !!t && !labelled);
      cur.classList.toggle('is-label', !!labelled);
      if (labelled) curLabel.textContent = labelled.getAttribute('data-cursor-label');
    });
  }

  /* ── 7 · the scrub engine ─────────────────────────────────────────────────
     Every scroll clip is fetched whole as a blob and played from an object
     URL, so a seek never touches the network. One GSAP ticker eases each
     clip's time toward its scroll target and only writes currentTime when
     the video is not seeking and the time actually moved.
     ──────────────────────────────────────────────────────────────────────── */
  var SCRUB_FACTOR = 0.18;
  var SCRUB_EPS = 0.01;          // 10 ms
  var clips = [];
  var clipByName = {};

  function ScrubClip(el) {
    this.el = el;
    this.name = el.getAttribute('data-clip');
    this.url = 'media/hero/' + this.name + (PHONE() ? '-m' : '') + '.mp4';
    this.dur = 0;
    this.cur = 0;
    this.lastSet = -1;
    this.progress = 0;
    this.active = false;
    this.ready = false;
    this.objectUrl = null;
    clips.push(this);
    clipByName[this.name] = this;
  }

  ScrubClip.prototype.load = function () {
    var self = this;
    if (this.loading) return this.loading;
    this.loading = fetch(this.url)
      .then(function (r) {
        if (!r.ok) throw new Error(self.url + ' → ' + r.status);
        return r.blob();
      })
      .then(function (blob) {
        self.objectUrl = URL.createObjectURL(blob);
        self.el.src = self.objectUrl;
        self.el.load();
        return new Promise(function (res) {
          if (self.el.readyState >= 1) return res();
          self.el.addEventListener('loadedmetadata', function () { res(); }, { once: true });
          self.el.addEventListener('error', function () { res(); }, { once: true });
        });
      })
      .then(function () {
        self.dur = self.el.duration || 0;
        self.ready = true;
        /* iOS: a muted play() unlocks inline playback for the whole page.
           It must not reset the frame: if this clip landed *after* the reader
           had already scrolled to it, the scrub position is lost and the ticker
           would think it had nothing left to do. Forget lastSet instead, so the
           next tick re-applies cur. */
        var p = self.el.play();
        if (p && p.then) {
          p.then(function () {
            self.el.pause();
            self.lastSet = -1;
          }).catch(function () {});
        }
        return self;
      })
      .catch(function (err) {
        if (window.console && console.warn) console.warn('[scrub]', err.message);
        return self;
      });
    return this.loading;
  };

  ScrubClip.prototype.seekTo = function (progress) {
    this.progress = clamp(progress, 0, 1);
    this.active = true;
  };

  function scrubTick() {
    for (var i = 0; i < clips.length; i++) {
      var c = clips[i];
      if (!c.active || !c.ready || !c.dur) continue;
      if (c.el.seeking) continue;
      var target = c.progress * (c.dur - 0.05);
      c.cur += (target - c.cur) * SCRUB_FACTOR;
      if (Math.abs(c.cur - c.lastSet) > SCRUB_EPS) {
        if (Math.abs(c.cur - c.lastSet) > 0.35) {
          /* a big jump (thumb click / fast flick) lands straight away */
          c.lastSet = target;
        } else {
          c.lastSet = c.cur;
        }
        try { c.el.currentTime = c.lastSet; } catch (e) {}
      }
    }
  }
  gsap.ticker.add(scrubTick);

  /* ── 8 · loops, lazily ────────────────────────────────────────────────── */
  var loops = $$('.loop');
  var loopObserver = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      var v = en.target;
      if (en.isIntersecting) {
        if (!v.src) v.src = 'media/v/' + v.getAttribute('data-loop') + '.mp4';
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { rootMargin: '240px 0px' }) : null;

  /* ── 9 · loader ───────────────────────────────────────────────────────── */
  var loaderEl = $('#loader');
  var loaderCount = $('#loaderCount');
  var loaderMsg = $('#loaderMsg');
  var loaderBar = $('#loaderBar');
  var loaderDone = false;

  function loaderProgress(p) {
    var n = Math.round(clamp(p, 0, 1) * 100);
    if (loaderCount) loaderCount.textContent = ('00' + n).slice(-3);
    if (loaderBar) loaderBar.style.width = (p * 100).toFixed(1) + '%';
    if (loaderMsg) {
      var m = p < 0.42 ? 'Lighting the diyas' : p < 0.78 ? 'Tying the ribbon' : 'Opening the box';
      if (loaderMsg.textContent !== m) loaderMsg.textContent = m;
    }
  }

  function closeLoader() {
    if (loaderDone) return;
    loaderDone = true;
    document.body.classList.remove('is-loading');
    var card = $('.loader__card');
    var rib = $('.loader__ribbon');
    var l = $('.loader__half--l');
    var r = $('.loader__half--r');

    var tl = gsap.timeline({
      onComplete: function () {
        if (loaderEl) loaderEl.style.display = 'none';
        ScrollTrigger.refresh();
      }
    });
    tl.to(card, { autoAlpha: 0, y: -26, scale: 0.97, duration: dur(0.6), ease: 'power2.in' })
      .to(rib, { scaleY: 0, transformOrigin: '50% 0%', duration: dur(0.55), ease: 'power2.inOut' }, 0.15)
      .to(l, { xPercent: -101, duration: dur(1.05), ease: 'power4.inOut' }, 0.42)
      .to(r, { xPercent: 101, duration: dur(1.05), ease: 'power4.inOut' }, 0.42)
      .set(loaderEl, { pointerEvents: 'none' });
    if (RM) tl.progress(1);
  }

  /* ── 10 · build the mithai counter, index, picker, menu, diyas ─────────── */
  function buildCounter() {
    var layers = $('#counterLayers');
    var index = $('#counterIndex');
    var num = $('#counterNum');
    if (!layers) return;
    if (num) {
      num.innerHTML = '<div class="counter__roll">' + SWEETS.map(function (s, i) {
        return '<span>' + ('0' + (i + 1)).slice(-2) + '</span>';
      }).join('') + '</div>';
    }
    SWEETS.forEach(function (s, i) {
      var art = document.createElement('article');
      art.className = 'sweet';
      art.style.setProperty('--acc', s.acc);
      art.setAttribute('data-sweet', i);
      art.innerHTML =
        '<div class="sweet__film film"><video class="scrub" data-clip="' + s.id + '" poster="media/v/' + s.id + '.jpg" muted playsinline preload="none" disablepictureinpicture aria-hidden="true"></video></div>' +
        '<div class="sweet__copy">' +
          '<div class="roll"><div class="roll__i"><p class="sweet__hi">' + s.hi + '</p></div></div>' +
          '<div class="roll"><div class="roll__i"><p class="sweet__en">' + s.en + '</p></div></div>' +
          '<div class="roll"><div class="roll__i"><p class="sweet__desc">' + s.desc + '</p></div></div>' +
        '</div>' +
        '<div class="sweet__specs">' +
          '<dl>' +
            '<div><dt>Made with</dt><dd>' + s.made + '</dd></div>' +
            '<div><dt>Keeps</dt><dd>' + s.keeps + '</dd></div>' +
            '<div><dt>In your box</dt><dd>' + money(s.pc) + ' / piece</dd></div>' +
          '</dl>' +
          '<p class="sweet__price"><b>' + money(s.kg) + '</b><span>per kg</span></p>' +
          '<button class="btn btn--gold sweet__add" data-add="' + i + '" data-cursor="link">' +
            '<span class="btn__face">Add to box +</span><span class="btn__fill"></span></button>' +
        '</div>';
      layers.appendChild(art);
      if (i > 0) art.style.visibility = 'hidden';

      var li = document.createElement('li');
      li.innerHTML =
        '<button type="button" data-jump="' + i + '" aria-label="' + s.en + '" ' +
        'data-cursor-label="' + s.en + '"><img src="' + thumb(s.id) + '" alt="" loading="lazy"></button>';
      index.appendChild(li);
    });
  }

  function buildPicker() {
    var pick = $('#picker');
    if (!pick) return;
    SWEETS.forEach(function (s, i) {
      var li = document.createElement('li');
      li.innerHTML =
        '<button class="pick__row" type="button" data-pick="' + i + '" data-cursor="link">' +
          '<span class="pick__thumb"><img src="' + thumb(s.id) + '" alt="" loading="lazy"></span>' +
          '<span class="pick__name">' + s.en + '<small>' + s.hi + '</small></span>' +
          '<span class="pick__price">' + money(s.pc) + '<small> / pc</small></span>' +
          '<svg class="pick__mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M4 12.5l5 5L20 6.5"/></svg>' +
        '</button>';
      pick.appendChild(li);
    });
  }

  function buildMenu() {
    var list = $('#priceList'), tabs = $('#tabs');
    if (!list || !tabs) return;
    MENU.forEach(function (g, i) {
      var b = document.createElement('button');
      b.className = 'tab' + (i === 0 ? ' is-on' : '');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('data-tab', i);
      b.textContent = g.tab;
      tabs.appendChild(b);
    });
    function render(i) {
      var g = MENU[i];
      list.innerHTML = g.items.map(function (it) {
        return '<div class="prow" data-img="' + (it.img || '') + '">' +
          '<p class="prow__name">' + it.en + '<small>' + it.hi + '</small></p>' +
          '<p class="prow__note">' + it.note + '</p>' +
          '<p class="prow__price">' + money(it.kg) + ' <span>/ kg</span></p>' +
          '</div>';
      }).join('');
      $$('.tab', tabs).forEach(function (t, k) { t.classList.toggle('is-on', k === i); });
    }
    tabs.addEventListener('click', function (e) {
      var t = e.target.closest('[data-tab]');
      if (t) render(+t.getAttribute('data-tab'));
    });
    render(0);

    /* a round photo of the sweet follows the cursor over its row */
    var photo = $('#pricePhoto');
    if (photo && FINE) {
      var px = gsap.quickTo(photo, 'x', { duration: 0.4, ease: 'power3.out' });
      var py = gsap.quickTo(photo, 'y', { duration: 0.4, ease: 'power3.out' });
      list.addEventListener('mousemove', function (e) {
        var row = e.target.closest('.prow');
        if (!row) return;
        var img = row.getAttribute('data-img');
        if (img) {
          photo.style.backgroundImage = 'url(media/img/' + img + '.webp)';
          photo.classList.add('is-on');
        } else {
          photo.classList.remove('is-on');
        }
        px(e.clientX); py(e.clientY);
      });
      list.addEventListener('mouseleave', function () { photo.classList.remove('is-on'); });
    }
  }

  function buildDiyas() {
    var row = $('#diyasRow');
    if (!row) return;
    var svg = function () {
      return '<svg viewBox="0 0 40 40" aria-hidden="true">' +
        '<path class="d-flame" d="M20 7c4 5.6 6 9 6 12.4a6 6 0 0 1-12 0C14 16 16 12.6 20 7z"/>' +
        '<ellipse class="d-lip" cx="20" cy="27" rx="14" ry="2.9"/>' +
        '<path class="d-bowl" d="M6 27c0 5.4 6.3 9.4 14 9.4s14-4 14-9.4z"/>' +
        '<ellipse class="d-lip" cx="20" cy="27" rx="14" ry="2.9" fill="none" stroke="rgba(246,207,122,.24)"/>' +
        '</svg>';
    };
    for (var i = 0; i < 9; i++) {
      var d = document.createElement('div');
      d.className = 'diya';
      d.innerHTML = svg();
      row.appendChild(d);
    }
  }

  /* ── 11 · gift box / hero ─────────────────────────────────────────────── */
  var heroBox = clipByName.box;
  var heroIntro = null;

  function heroSection() {
    var hero = $('#hero');
    if (!hero) return;
    var word = $('#heroWord');
    var title = $('#heroTitle');
    var bar = $('#heroBar');
    var steps = $$('#steps .step');
    var lines = $$('#heroTitle .line > span');

    gsap.set(lines, { yPercent: 110 });
    gsap.set('#heroFilm', { xPercent: PHONE() ? -50 : 0, yPercent: -50, scale: 1.02 });
    heroIntro = function () {
      gsap.to(lines, { yPercent: 0, duration: dur(1.15), stagger: dur(0.09), ease: 'power3.out', delay: dur(0.1) });
      gsap.fromTo('#heroFilm', { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: dur(1.4), ease: 'power2.out' });
    };

    /* one ScrollTrigger owns the pin, the clip, the steps, the dust and the
       decorative timeline — anything measured separately after a pin gets
       pushed to the pin's end. */
    var heroTl = gsap.timeline({ paused: true })
      .fromTo(word, { scale: 0.94, yPercent: -4, opacity: 0.52 },
        { scale: 1.22, yPercent: -16, opacity: 0.14, ease: 'none', duration: 1 }, 0)
      .to(lines, { yPercent: -110, duration: 0.34, stagger: 0.05, ease: 'power2.in' }, 0.56)
      .to(title, { opacity: 0, duration: 0.22 }, 0.76)
      .fromTo('#heroFilm', { scale: 1.02 }, { scale: 1.08, ease: 'none', duration: 1 }, 0);

    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: '+=240%',
      pin: true,
      anticipatePin: 1,
      scrub: true,
      onUpdate: function (self) {
        var p = self.progress;
        if (heroBox) { heroBox.seekTo(p); heroBox.active = true; }
        if (bar) bar.style.width = (p * 100).toFixed(2) + '%';
        var s = p < 0.28 ? 0 : p < 0.6 ? 1 : 2;
        steps.forEach(function (el, i) { el.classList.toggle('is-on', i === s); });
        dust.energy = p;
        heroTl.progress(p);
      },
      onLeave: function () { snap(heroBox, 1); },
      onEnterBack: function () { if (heroBox) heroBox.active = true; }
    });
  }

  /* leaving a pinned scrub must leave the film on its final frame */
  function snap(clip, progress) {
    if (!clip || !clip.ready || !clip.dur) return;
    clip.progress = progress;
    clip.cur = progress * (clip.dur - 0.05);
    clip.lastSet = clip.cur;
    try { clip.el.currentTime = clip.cur; } catch (e) {}
    clip.active = false;
  }
  function snapStart(clip) { snap(clip, 0); }

  /* ── 12 · the mithai counter ──────────────────────────────────────────── */
  var counter = { current: -1, total: SWEETS.length };

  function counterSection() {
    var sec = $('#mithai');
    if (!sec) return;
    var layers = $$('.sweet');
    var num = $('#counterNum');
    var roll = $('.counter__roll');
    var glow = $('#counterGlow');
    var numStep = 0;

    /* centring offsets on anything GSAP moves are set here, never in CSS */
    gsap.set($$('.sweet__film'), { xPercent: -50, yPercent: -50 });

    function measure() {
      var sp = roll && roll.querySelector('span');
      numStep = sp ? sp.getBoundingClientRect().height : 0;
    }
    if (document.fonts) document.fonts.ready.then(measure);
    measure();
    window.addEventListener('resize', function () { requestAnimationFrame(measure); });

    function show(i) {
      if (i === counter.current) return;
      var oldL = counter.current >= 0 ? layers[counter.current] : null;
      var newL = layers[i];
      counter.current = i;

      if (oldL) {
        var of = $('.sweet__film', oldL);
        gsap.killTweensOf([oldL, of]);
        gsap.to(oldL, { autoAlpha: 0, duration: dur(0.45), ease: 'power2.in', onComplete: function () { oldL.style.visibility = 'hidden'; } });
        gsap.to(of, { filter: 'blur(16px)', y: 70, scale: 1.06, duration: dur(0.6), ease: 'power2.in' });
        gsap.to($$('.roll__i', oldL), { yPercent: -110, duration: dur(0.36), stagger: 0.04, ease: 'power2.in' });
      }
      if (newL) {
        var nf = $('.sweet__film', newL);
        newL.style.visibility = 'visible';
        gsap.killTweensOf([newL, nf]);
        gsap.fromTo(newL, { autoAlpha: 0 }, { autoAlpha: 1, duration: dur(0.55), ease: 'power2.out' });
        gsap.fromTo(nf, { filter: 'blur(16px)', y: -80, scale: 0.95 },
          {
            filter: 'blur(0px)', y: 0, scale: 1, duration: dur(0.9), ease: 'power3.out',
            /* a zero blur still isolates the blend, so drop the filter when it lands */
            onComplete: function () { nf.style.filter = 'none'; }
          });
        gsap.fromTo($$('.roll__i', newL), { yPercent: 110 },
          { yPercent: 0, duration: dur(0.8), stagger: 0.07, ease: 'power3.out' });

        /* entering the pin at an index other than 0 (a jump, a deep link) leaves
           the first layer visible underneath, and with lighten blending both
           sweets draw on top of each other. Only one layer may stay visible. */
        layers.forEach(function (L) {
          if (L !== newL && L !== oldL && L.style.visibility !== 'hidden') {
            gsap.killTweensOf(L);
            gsap.set(L, { autoAlpha: 0 });
            L.style.visibility = 'hidden';
          }
        });
      }
      var s = SWEETS[i];
      if (glow) glow.style.setProperty('--acc', s.acc);
      if (roll) gsap.to(roll, { y: -i * numStep, duration: dur(0.85), ease: 'power3.inOut' });
      $$('#counterIndex button').forEach(function (b, k) {
        b.classList.toggle('is-on', k === i);
        b.setAttribute('aria-current', k === i ? 'true' : 'false');
      });
    }

    var st = ScrollTrigger.create({
      trigger: sec,
      start: 'top top',
      end: function () { return '+=' + window.innerHeight * SWEETS.length; },
      pin: true,
      anticipatePin: 1,
      scrub: true,
      onUpdate: function (self) {
        var f = self.progress * SWEETS.length;
        var i = clamp(Math.floor(f), 0, SWEETS.length - 1);
        var local = clamp(f - i, 0, 1);
        show(i);
        var clip = clipByName[SWEETS[i].id];
        if (clip) clip.seekTo(local);
        for (var k = 0; k < clips.length; k++) {
          if (clips[k] !== clip && clips[k].name !== 'box') clips[k].active = false;
        }
      },
      onLeave: function () {
        SWEETS.forEach(function (s, k) {
          var c = clipByName[s.id];
          if (!c) return;
          if (k === SWEETS.length - 1) snap(c, 1);
          else c.active = false;
        });
      }
      /* No onEnter / onLeaveBack index reset here: entering the pin at a
         non-zero progress (a nav jump, a deep link, a fast flick) used to fire
         onEnter *after* onUpdate had already set the right sweet, and force
         sweet 01 back on top. onUpdate computes the index from progress. */

    });

    $('#counterIndex').addEventListener('click', function (e) {
      var b = e.target.closest('[data-jump]');
      if (!b) return;
      var i = +b.getAttribute('data-jump');
      var y = st.start + (i / SWEETS.length) * (st.end - st.start) + 4;
      if (lenis) lenis.scrollTo(y, { duration: 1.5 });
      else window.scrollTo({ top: y, behavior: 'smooth' });
    });
  }

  /* ── 13 · the halwai's hand ───────────────────────────────────────────── */
  function halwaiSection() {
    var sec = $('#halwai');
    if (!sec) return;
    var circle = $('#halwaiCircle');
    var ring = $('.halwai__ring');
    var veil = $('#halwaiVeil');
    var copy = $$('#halwaiCopy .line > span');
    var stats = $$('#stats b');

    var r0 = 132;
    function radius() { return Math.round(clamp(window.innerWidth * 0.115, 96, 148)); }
    var state = { r: radius() };
    function paint() { circle.style.clipPath = 'circle(' + state.r + 'px at 50% 50%)'; }
    paint();

    gsap.set(ring, { xPercent: -50, yPercent: -50, rotate: 0, opacity: 1 });
    gsap.set(copy, { opacity: 0, yPercent: 110 });
    gsap.set(veil, { opacity: 0 });
    gsap.set('#stats li', { opacity: 0 });

    var maxR = function () { return Math.hypot(window.innerWidth, window.innerHeight) / 2 + 40; };

    /* the three counted stats run once, when the copy has landed */
    var counted = false;
    function runCount() {
      if (counted) return;
      counted = true;
      stats.forEach(function (b) {
        var target = parseInt(b.getAttribute('data-count'), 10);
        if (isNaN(target)) return;
        var o = { v: target > 1000 ? 1900 : 0 };
        b.textContent = Math.round(o.v);
        gsap.to(o, {
          v: target, duration: dur(1.15), ease: 'power2.out',
          onUpdate: function () { b.textContent = Math.round(o.v); }
        });
      });
    }

    gsap.timeline({
      scrollTrigger: { trigger: sec, start: 'top top', end: '+=300%', pin: true, anticipatePin: 1, scrub: 0.7 },
      defaults: { ease: 'none' }
    })
      .to(state, {
        r: maxR, duration: 1,
        onUpdate: paint
      }, 0)
      .to(ring, { rotate: 260, scale: 0.55, opacity: 0, duration: 0.62, ease: 'power2.in' }, 0)
      .to(veil, { opacity: 1, duration: 0.5 }, 0.18)
      .to(copy, { opacity: 1, yPercent: 0, duration: 0.34, stagger: 0.12, ease: 'power2.out' }, 0.36)
      .call(runCount, null, 0.64)
      .to('#stats li', { opacity: 1, duration: 0.2, stagger: 0.07 }, 0.62);
  }

  /* ── 14 · real silver ─────────────────────────────────────────────────── */
  function silverSection() {
    var root = $('#silverWords');
    if (!root) return;
    var words = [];
    function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (tok) {
            if (!tok.trim()) { frag.appendChild(document.createTextNode(tok)); return; }
            var s = document.createElement('span');
            s.className = 'w'; s.textContent = tok;
            frag.appendChild(s); words.push(s);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1) {
          if (n.classList.contains('gold')) { n.classList.add('w'); words.push(n); return; }
          walk(n);
        }
      });
    }
    walk(root);
    gsap.to(words, {
      opacity: 1, ease: 'none', stagger: 0.6,
      scrollTrigger: { trigger: '#silver', start: 'top 78%', end: 'bottom 76%', scrub: 0.4 }
    });
  }

  /* ── 15 · the box builder ─────────────────────────────────────────────── */
  var slots = new Array(SITE.slots).fill(null);
  var sealed = false;

  function buildBox() {
    var tray = $('#boxTray');
    if (!tray) return;
    for (var i = 0; i < SITE.slots; i++) {
      var c = document.createElement('div');
      c.className = 'comp';
      c.setAttribute('data-slot', i);
      tray.appendChild(c);
    }
    tray.addEventListener('click', function (e) {
      var pc = e.target.closest('.comp__pc');
      if (!pc) return;
      var slot = +pc.parentElement.getAttribute('data-slot');
      spinOut(slot, pc);
    });

    /* the lid rests off the box; that offset is a gsap.set, never CSS.
       It only exists once you seal the box, so the open builder is all tray. */
    gsap.set('#boxLid', { yPercent: -118, rotate: -5, autoAlpha: 0, transformOrigin: '50% 100%' });

    $('#picker').addEventListener('click', function (e) {
      var b = e.target.closest('[data-pick]');
      if (!b) return;
      addPiece(+b.getAttribute('data-pick'), b);
    });

    $('#btnRandom').addEventListener('click', randomFill);
    $('#btnClear').addEventListener('click', clearBox);
    $('#btnSeal').addEventListener('click', sealBox);

    $('#counterLayers').addEventListener('click', function (e) {
      var b = e.target.closest('[data-add]');
      if (!b) return;
      var i = +b.getAttribute('data-add');
      addPiece(i, b);
    });
  }

  function countPieces() {
    var n = 0;
    for (var i = 0; i < slots.length; i++) if (slots[i] !== null) n++;
    return n;
  }
  function nextEmpty() {
    for (var i = 0; i < slots.length; i++) if (slots[i] === null) return i;
    return -1;
  }
  function total() {
    var t = SITE.boxPrice;
    for (var i = 0; i < slots.length; i++) if (slots[i] !== null) t += SWEETS[slots[i]].pc;
    return t;
  }
  function tally() {
    var n = countPieces();
    $('#tallyPieces').textContent = n;
    $('#tallyTotal').textContent = money(total());
    $('#buildHint').textContent = n === 0 ? 'Tap a sweet to place it'
      : n >= SITE.slots ? 'Nine pieces — seal it and send it'
      : (SITE.slots - n) + ' compartments left';
    $$('#picker .pick__row').forEach(function (r, i) {
      var has = slots.indexOf(i) !== -1;
      r.classList.toggle('has', has);
    });
    $('#btnSeal').disabled = n === 0;
    $('#btnSeal').style.opacity = n === 0 ? 0.4 : 1;
    if (sealed) unseal();
  }

  function unseal() {
    if (!sealed) return;
    sealed = false;
    gsap.to('#boxLid', { yPercent: -118, rotate: -5, autoAlpha: 0, duration: dur(0.7), ease: 'power2.inOut' });
    $('#btnWa').classList.add('is-hidden');
    $('#btnSeal').classList.remove('is-hidden');
  }
  function sealBox() {
    if (sealed || countPieces() === 0) return;
    sealed = true;
    gsap.set('#boxLid', { yPercent: -118, rotate: -5, autoAlpha: 0 });
    gsap.to('#boxLid', { yPercent: 0, rotate: 0, autoAlpha: 1, duration: dur(1.1), ease: 'elastic.out(1, 0.62)', delay: dur(0.06) });
    var lines = slots.map(function (s, i) {
      return s === null ? null : (i + 1) + '. ' + SWEETS[s].en + ' (' + money(SWEETS[s].pc) + ')';
    }).filter(Boolean);
    var msg = 'Hello Mithaas & Co.! I would like to order a Diwali box of ' + SITE.slots + ' pieces:' +
      '\n' + lines.join('\n') +
      '\nBox: ' + money(SITE.boxPrice) +
      '\nTotal: ' + money(total()) +
      '\nName:\nDelivery address:';
    var wa = $('#btnWa');
    wa.href = 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(msg);
    wa.classList.remove('is-hidden');
    $('#btnSeal').classList.add('is-hidden');
    toast('Box sealed — send it on WhatsApp');
  }

  function flyTo(fromRect, toRect, src, done) {
    var el = document.createElement('div');
    el.className = 'flyer';
    el.style.left = fromRect.left + 'px';
    el.style.top = fromRect.top + 'px';
    el.style.width = fromRect.width + 'px';
    el.style.height = fromRect.height + 'px';
    el.innerHTML = '<img src="' + src + '" alt="">';
    document.body.appendChild(el);
    var dx = (toRect.left + toRect.width / 2) - (fromRect.left + fromRect.width / 2);
    var dy = (toRect.top + toRect.height / 2) - (fromRect.top + fromRect.height / 2);
    var sc = toRect.width / Math.max(1, fromRect.width);
    var arc = -Math.min(200, Math.abs(dy) * 0.36 + 90);
    var st = { t: 0 };
    gsap.to(st, {
      t: 1, duration: dur(0.72), ease: 'power2.inOut',
      onUpdate: function () {
        var t = st.t;
        gsap.set(el, {
          x: dx * t,
          y: dy * t + Math.sin(Math.PI * t) * arc,
          scale: lerp(1, sc, t) * lerp(1, 0.94, Math.sin(Math.PI * t)),
          rotate: 40 * Math.sin(Math.PI * t)
        });
      },
      onComplete: function () {
        el.remove();
        if (done) done();
      }
    });
  }

  function addPiece(i, sourceEl) {
    if (sealed) unseal();
    var slot = nextEmpty();
    if (slot < 0) { toast('Nine pieces already — seal it'); return; }
    var comp = $('.comp[data-slot="' + slot + '"]');
    if (!comp) return;
    var s = SWEETS[i];
    var fromEl = sourceEl ? sourceEl.querySelector('.pick__thumb') || sourceEl : null;
    var fromRect = fromEl ? fromEl.getBoundingClientRect()
      : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 46, height: 46 };
    var toRect = comp.getBoundingClientRect();
    var pad = Math.min(toRect.width, toRect.height) * 0.06;

    flyTo(fromRect, {
      left: toRect.left + pad, top: toRect.top + pad,
      width: toRect.width - pad * 2, height: toRect.height - pad * 2
    }, thumb(s.id), function () {
      slots[slot] = i;
      var pc = document.createElement('div');
      pc.className = 'comp__pc';
      pc.innerHTML = '<img src="' + thumb(s.id) + '" alt="' + s.en + '">';
      comp.appendChild(pc);
      gsap.fromTo(pc, { scale: 1.55, rotate: -18, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: dur(1), ease: 'elastic.out(1, 0.52)' });
      tally();
    });
    if (sourceEl && sourceEl.classList.contains('btn')) toast(s.en + ' → ' + money(s.pc));
  }

  function spinOut(slot, el) {
    if (sealed) unseal();
    gsap.to(el, {
      scale: 0, rotate: 220, opacity: 0, duration: dur(0.5), ease: 'power2.in',
      onComplete: function () {
        slots[slot] = null;
        el.remove();
        tally();
      }
    });
  }

  function randomFill() {
    if (sealed) unseal();
    var empties = [];
    for (var i = 0; i < slots.length; i++) if (slots[i] === null) empties.push(i);
    if (!empties.length) { clearBox(); return; }
    var k = 0;
    empties.forEach(function (slot, n) {
      var i = Math.floor(Math.random() * SWEETS.length);
      var comp = $('.comp[data-slot="' + slot + '"]');
      var toRect = comp.getBoundingClientRect();
      var rowEl = $$('#picker .pick__row')[i];
      var from = rowEl ? rowEl.querySelector('.pick__thumb').getBoundingClientRect()
        : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 42, height: 42 };
      setTimeout(function () {
        var pad = Math.min(toRect.width, toRect.height) * 0.06;
        flyTo(from, {
          left: toRect.left + pad, top: toRect.top + pad,
          width: toRect.width - pad * 2, height: toRect.height - pad * 2
        }, thumb(SWEETS[i].id), function () {
          slots[slot] = i;
          var pc = document.createElement('div');
          pc.className = 'comp__pc';
          pc.innerHTML = '<img src="' + thumb(SWEETS[i].id) + '" alt="">';
          comp.appendChild(pc);
          gsap.fromTo(pc, { scale: 1.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: dur(0.9), ease: 'elastic.out(1, 0.5)' });
          tally();
        });
      }, RM ? 0 : n * 90);
      k++;
    });
    if (!k) tally();
  }

  function clearBox() {
    if (sealed) unseal();
    var pcs = $$('.comp__pc');
    pcs.forEach(function (pc, n) {
      gsap.to(pc, {
        scale: 0, rotate: 200, opacity: 0, duration: dur(0.4), delay: RM ? 0 : n * 0.03,
        ease: 'power2.in',
        onComplete: function () { pc.remove(); }
      });
    });
    slots = new Array(SITE.slots).fill(null);
    setTimeout(tally, RM ? 0 : 260);
  }

  /* ── 16 · the countdown ───────────────────────────────────────────────── */
  function countdown() {
    var target = new Date(SITE.diwali).getTime();
    var dEl = $('#cdDays'), hEl = $('#cdHours'), mEl = $('#cdMins'), sEl = $('#cdSecs');
    var clock = $('#clock');
    var over = $('#diwaliOver');
    if (!dEl) return;
    var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
    var iv;

    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        clock.classList.add('is-over');
        if (!over) {
          over = document.createElement('p');
          over.id = 'diwaliOver';
          over.className = 'gold';
          over.style.cssText = 'font-family:var(--f-display);font-size:clamp(2rem,6vw,5rem);line-height:1;font-style:italic';
          over.textContent = 'Shubh Deepavali';
          clock.parentNode.insertBefore(over, clock);
        }
        clearInterval(iv);
        return;
      }
      var s = Math.floor(diff / 1000);
      dEl.textContent = pad(Math.floor(s / 86400));
      hEl.textContent = pad(Math.floor(s % 86400 / 3600));
      mEl.textContent = pad(Math.floor(s % 3600 / 60));
      sEl.textContent = pad(s % 60);
    }
    tick();
    iv = setInterval(tick, 1000);

    /* nine diyas light one by one as you scroll */
    var diyas = $$('#diyasRow .diya .d-flame');
    if (diyas.length) {
      gsap.set(diyas, { opacity: 0, scale: 0.4, transformOrigin: '50% 100%' });
      gsap.to(diyas, {
        opacity: 1, scale: 1, ease: 'none', stagger: 0.5,
        scrollTrigger: { trigger: '#diwali', start: 'top 72%', end: 'bottom 82%', scrub: 0.5 }
      });
    }
  }

  /* ── 17 · hamper tilt ─────────────────────────────────────────────────── */
  function hampers() {
    if (!FINE || RM) return;
    $$('[data-tilt]').forEach(function (card) {
      var rx = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power2.out' });
      var ry = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power2.out' });
      var tz = gsap.quickTo(card, 'z', { duration: 0.5, ease: 'power2.out' });
      gsap.set(card, { transformPerspective: 900, transformOrigin: '50% 50%' });
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        ry(px * 12); rx(-py * 12); tz(16);
      });
      card.addEventListener('mouseleave', function () { rx(0); ry(0); tz(0); });
    });
  }

  /* ── 18 · nav, menu, anchors, magnetics ───────────────────────────────── */
  var mouse = { x: -999, y: -999 };

  function navStuff() {
    var nav = $('#nav');
    var burger = $('#navBurger');
    var menu = $('#menuOverlay');
    var lastY = 0;

    window.addEventListener('scroll', function () {
      var y = window.pageYOffset;
      if (nav) {
        nav.classList.toggle('is-solid', y > 40);
        if (y > 140 && y > lastY + 4) nav.classList.add('is-hidden');
        else if (y < lastY - 4 || y < 140) nav.classList.remove('is-hidden');
      }
      lastY = y;
    }, { passive: true });

    function setMenu(open) {
      if (!menu || !burger) return;
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
      if (lenis) { open ? lenis.stop() : lenis.start(); }
    }
    if (burger) burger.addEventListener('click', function () {
      setMenu(!menu.classList.contains('is-open'));
    });

    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (a) {
        var href = a.getAttribute('href');
        if (href && href.length > 1) {
          e.preventDefault();
          setMenu(false);
          goTo(href);
        }
      }
      var ml = e.target.closest('[data-menu-link]');
      if (ml) setMenu(false);
    });

    /* magnetic pill */
    if (FINE && !RM) {
      $$('[data-magnetic]').forEach(function (el) {
        var mx = gsap.quickTo(el, 'x', { duration: 0.55, ease: 'power3.out' });
        var my = gsap.quickTo(el, 'y', { duration: 0.55, ease: 'power3.out' });
        el.addEventListener('mousemove', function (e) {
          var r = el.getBoundingClientRect();
          mx((e.clientX - (r.left + r.width / 2)) * 0.22);
          my((e.clientY - (r.top + r.height / 2)) * 0.3);
        });
        el.addEventListener('mouseleave', function () { mx(0); my(0); });
      });
    }
  }

  /* ── 19 · ticker ──────────────────────────────────────────────────────── */
  function ticker() {
    var row = $('#tickerRow');
    var track = $('#tickerTrack');
    if (!row || !track) return;
    var clone = row.cloneNode(true);
    clone.removeAttribute('id');
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
    var w = row.getBoundingClientRect().width;
    if (!w) return;
    gsap.to(track, {
      x: -w, ease: 'none', duration: dur(w / 90), repeat: -1,
      modifiers: { x: gsap.utils.unitize(function (x) { return parseFloat(x) % w; }) }
    });
  }

  /* ── 20 · gold dust ───────────────────────────────────────────────────── */
  var dust = (function () {
    var cv = $('#dust');
    if (!cv || RM) return { energy: 0, init: function () {}, resize: function () {} };
    var ctx = cv.getContext('2d', { alpha: true });
    var w = 0, h = 0, dpr = 1, parts = [], ready = false;
    var energy = 0, dust_energy = 0;

    function size() {
      var nw = window.innerWidth, nh = window.innerHeight;
      if (!nw || !nh) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = nw; h = nh;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      cv.style.width = w + 'px';
      cv.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!ready) { seed(); ready = true; }
    }
    function seed() {
      var n = w < 700 ? 34 : 64;
      parts = [];
      for (var i = 0; i < n; i++) {
        parts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.6 + Math.random() * 2.1,
          vy: 0.16 + Math.random() * 0.5,
          vx: (Math.random() - 0.5) * 0.22,
          a: 0.14 + Math.random() * 0.5,
          tw: Math.random() * Math.PI * 2,
          hue: Math.random() < 0.22 ? 36 : 44
        });
      }
    }

    function frame() {
      if (!w || !h) return;
      energy += (dust_energy - energy) * 0.06;
      var speed = 1 + energy * 2.6;
      var bright = 1 + energy * 0.85;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.y -= p.vy * speed;
        p.x += p.vx * speed;
        p.tw += 0.02 + energy * 0.04;
        var dx = p.x - mouse.x, dy = p.y - mouse.y;
        var d2 = dx * dx + dy * dy;
        if (d2 < 26000 && d2 > 0.01) {
          var f = (1 - Math.sqrt(d2) / 161) * 1.9;
          p.x += dx * 0.012 * f;
          p.y += dy * 0.012 * f;
        }
        if (p.y < -12) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -12) p.x = w + 10;
        if (p.x > w + 12) p.x = -10;
        var alpha = p.a * (0.55 + 0.45 * Math.sin(p.tw)) * bright;
        if (alpha <= 0.01) continue;
        var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.4);
        g.addColorStop(0, 'hsla(' + p.hue + ',92%,74%,' + Math.min(alpha, 1) + ')');
        g.addColorStop(0.45, 'hsla(' + p.hue + ',86%,58%,' + Math.min(alpha * 0.36, 1) + ')');
        g.addColorStop(1, 'hsla(' + p.hue + ',80%,45%,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    size();
    window.addEventListener('resize', size);
    gsap.ticker.add(frame);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) gsap.ticker.remove(frame);
      else gsap.ticker.add(frame);
    });
    return {
      get energy() { return dust_energy; },
      set energy(v) { dust_energy = v; },
      init: function () {}, resize: size
    };
  })();

  /* ── 21 · boot ────────────────────────────────────────────────────────── */
  function boot() {
    buildCounter();
    buildPicker();
    buildMenu();
    buildDiyas();
    buildBox();

    $$('.scrub').forEach(function (el) { new ScrubClip(el); });
    heroBox = clipByName.box;

    /* loader meter: fonts + the box clip gate it, capped at 3.5s */
    var fontsDone = document.fonts ? document.fonts.ready : Promise.resolve();
    var boxReady = clipByName.box ? clipByName.box.load() : Promise.resolve();
    var gate = Promise.all([fontsDone, boxReady, new Promise(function (r) { setTimeout(r, 420); })]);
    var cap = new Promise(function (r) { setTimeout(r, 3500); });

    var fake = gsap.to({ v: 0 }, {
      v: 0.9, duration: 3.4, ease: 'power1.out',
      onUpdate: function () { loaderProgress(this.targets()[0].v); }
    });

    Promise.race([gate, cap]).then(function () {
      fake.kill();
      gsap.to({ v: parseFloat(loaderCount ? loaderCount.textContent : '0') / 100 }, {
        v: 1, duration: 0.5, ease: 'power2.out',
        onUpdate: function () { loaderProgress(this.targets()[0].v); },
        onComplete: function () {
          loaderProgress(1);
          setTimeout(function () { closeLoader(); startPage(); }, 300);
        }
      });
    });

    /* the six sweets stream in behind the box, in page order. They are
       *started* in page order but not serialised: waiting for each 4 MB blob
       before starting the next meant the last sweet landed long after the
       counter did on a cold cache. Staggered starts, order preserved, and the
       poster above holds the frame until the blob is seekable. */
    var order = ['kaju', 'laddoo', 'jalebi', 'gulab', 'rasmalai', 'soan'];
    order.forEach(function (name, n) {
      setTimeout(function () {
        var c = clipByName[name];
        if (c) c.load();
      }, 900 + n * 380);
    });

    /* loops: observe as soon as they exist */
    if (loopObserver) loops.forEach(function (v) { loopObserver.observe(v); });

    heroSection();
    counterSection();
    halwaiSection();
    silverSection();
    countdown();
    hampers();
    navStuff();
    ticker();

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      gsap.set('#heroFilm', { xPercent: PHONE() ? -50 : 0 });
      rt = setTimeout(function () { ScrollTrigger.refresh(); }, 260);
    });
  }

  function startPage() {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
    if (heroIntro) heroIntro();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

})();
