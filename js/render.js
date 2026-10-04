/* Builds every section of the page from the files in /data.
   Normally you do not need to edit this file. */
(function () {
  var S = window.SITE, C = S.contact, T = S.content;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function inr(n) { return '\u20B9' + Number(n).toLocaleString('en-IN'); }
  function word(n) {
    return ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][n] || String(n);
  }
  function img(file, alt, attrs) {
    return '<img src="images/' + esc(file) + '" alt="' + esc(alt) + '"' + (attrs ? ' ' + attrs : '') + '>';
  }
  function head(h, p, id) {
    return '<div class="section-head"><h2' + (id ? ' id="' + id + '"' : '') + '>' + esc(h) + '</h2>' +
      (p ? '<p>' + esc(p) + '</p>' : '') + '</div>';
  }

  var ICON = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };

  function brand(logoW, logoH) {
    return '<a class="brand" href="#top" aria-label="' + esc(C.name) + ', home">' +
      '<img src="images/logo.jpg" alt="" width="' + logoW + '" height="' + logoH + '">' +
      '<div><b>' + esc(C.name) + '</b><span>' + esc(C.tagline) + '</span></div></a>';
  }

  /* ---------- sections ---------- */
  var R = {};

  R.header = function () {
    return '<div class="wrap bar">' + brand(54, 39) +
      '<button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="nav" aria-label="Open menu">' + ICON.menu + '</button>' +
      '<nav class="nav" id="nav" aria-label="Main">' +
      T.nav.map(function (n) { return '<a href="' + esc(n.href) + '">' + esc(n.label) + '</a>'; }).join('') +
      '<a class="btn btn-primary" href="#book">' + esc(T.navCta) + '</a></nav></div>';
  };

  R.hero = function () {
    var H = T.hero, r = C.rating, facts = '';
    if (r) facts += '<li><span class="star" aria-hidden="true">\u2605</span> <strong>' + esc(r.score) + '</strong> on ' + esc(r.source) + ', ' + esc(r.count) + ' reviews</li>';
    facts += '<li><strong>' + S.doctors.list.length + '</strong> specialist dentists</li>';
    if (H.extraFact) facts += '<li>' + esc(H.extraFact) + '</li>';
    return '<div class="wrap hero-grid"><div class="hero-copy">' +
      '<h1>' + esc(H.headline) + '</h1><p class="lede">' + esc(H.lede) + '</p>' +
      '<div class="hero-actions"><a class="btn btn-primary" href="#book">' + esc(H.primaryCta) + '</a>' +
      '<a class="btn btn-ghost" href="#international">' + esc(H.secondaryCta) + '</a></div>' +
      '<ul class="facts">' + facts + '</ul></div>' +
      '<div class="hero-art"><figure>' + img(H.image, H.imageAlt) + '</figure></div></div>';
  };

  R.concept = function () {
    var K = T.concept;
    return '<div class="wrap concept"><div class="concept-photo">' + img(K.image, K.imageAlt, 'loading="lazy"') + '</div>' +
      '<div class="concept-text"><h2>' + esc(K.heading) + '</h2>' +
      K.paragraphs.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div></div>';
  };

  R.why = function () {
    var W = T.why;
    return '<div class="wrap">' + head(W.heading, '', 'why-h') + '<div class="why">' +
      W.items.map(function (i) { return '<div><h3>' + esc(i.title) + '</h3><p>' + esc(i.text) + '</p></div>'; }).join('') +
      '</div></div>';
  };

  R.services = function () {
    var V = S.services;
    return '<div class="wrap">' + head(V.intro.heading, V.intro.text) + '<div class="svc-grid">' +
      V.items.map(function (s) {
        return '<article class="svc">' + img(s.image, s.alt, 'loading="lazy"') +
          '<div class="svc-body"><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p>' +
          '<a href="#book" data-service="' + esc(s.bookAs) + '">' + esc(s.cta) + '</a></div></article>';
      }).join('') + '</div>' +
      '<div class="also"><span>' + esc(V.alsoLabel) + '</span>' +
      V.also.map(function (a) { return '<span class="chip">' + esc(a) + '</span>'; }).join('') + '</div></div>';
  };

  R.doctors = function () {
    var D = S.doctors, lead = D.list.filter(function (d) { return d.lead; }),
        rest = D.list.filter(function (d) { return !d.lead; });
    var out = '<div class="wrap">' + head(D.intro.heading, D.intro.text);
    out += lead.map(function (d) {
      return '<div class="doc-lead"><div class="portrait">' + img(d.photo, d.alt, 'loading="lazy"') + '</div>' +
        '<div class="doc-text">' + (d.role ? '<span class="doc-role">' + esc(d.role) + '</span>' : '') +
        '<div class="doc-name">' + esc(d.name) + '</div><div class="doc-quals">' + esc(d.quals) + '</div>' +
        d.bio.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div></div>';
    }).join('');
    out += '<div class="docs">' + rest.map(function (d) {
      return '<article class="doc"><div class="portrait">' + img(d.photo, d.alt, 'loading="lazy"') + '</div><div>' +
        '<div class="doc-name">' + esc(d.name) + '</div><div class="doc-quals">' + esc(d.quals) + '</div>' +
        d.bio.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div></article>';
    }).join('') + '</div></div>';
    return out;
  };

  R.international = function () {
    var I = S.international;
    return '<div class="wrap intl-grid"><div><h2>' + esc(I.heading) + '</h2><p class="lede">' + esc(I.lede) + '</p>' +
      '<ul class="intl-points">' + I.points.map(function (p) { return '<li>' + ICON.check + esc(p) + '</li>'; }).join('') + '</ul>' +
      '<a class="btn btn-gold" href="#book" data-service="' + esc(I.bookAs) + '">' + esc(I.cta) + '</a></div>' +
      '<ol class="steps">' + I.steps.map(function (s) {
        return '<li><div><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></div></li>';
      }).join('') + '</ol></div>';
  };

  R.membership = function () {
    var M = S.membership, im = M.images;
    var worth = M.consultationValue + M.cleaningVisits * M.cleaningValuePerVisit;
    var perks =
      '<div class="perk">' + img(im.consultation.file, im.consultation.alt, 'loading="lazy"') +
        '<h3>Free consultation</h3><p>A dental consultation worth ' + inr(M.consultationValue) + ', included.</p></div>' +
      '<div class="perk">' + img(im.cleaning.file, im.cleaning.alt, 'loading="lazy"') +
        '<h3>' + M.cleaningVisits + ' free cleanings</h3><p>Dental cleaning valid for ' + M.cleaningVisits +
        ' visits, worth ' + inr(M.cleaningValuePerVisit) + ' each visit.</p></div>' +
      '<div class="perk"><div class="big">' + M.treatmentDiscountPct + '%</div><h3>Off dental treatments</h3>' +
        '<p>An additional discount on any other dental treatment.</p></div>' +
      '<div class="perk">' + img(im.whitening.file, im.whitening.alt, 'loading="lazy"') +
        '<h3>Teeth whitening: ' + M.whiteningDiscountPct + '% off</h3>' +
        '<p>Members pay ' + (100 - M.whiteningDiscountPct) + '% of the usual price.</p></div>';
    return '<div class="wrap"><div class="member"><div class="member-lead">' +
      '<h2>' + esc(M.heading) + '</h2>' +
      '<div class="price">' + inr(M.fee) + '<small>' + esc(M.feeNote) + '</small></div>' +
      '<p>Consultation, ' + word(M.cleaningVisits) + ' cleanings and a discount on everything else. Benefits worth ' + inr(worth) +
      ' in consultations and cleanings alone.</p>' +
      '<div><a class="btn btn-gold" href="#book" data-service="' + esc(M.bookAs) + '">' + esc(M.cta) + '</a></div></div>' +
      '<div class="perks">' + perks + '</div></div></div>';
  };

  R.results = function () {
    var X = S.results;
    return '<div class="wrap">' + head(X.intro.heading, X.intro.text) + '<div class="cases">' +
      X.cases.map(function (c) {
        return '<div class="case"><h3>' + esc(c.title) + '</h3><div class="' + (c.layout === 'pair' ? 'pair' : 'quad') + '">' +
          c.items.map(function (i) {
            return '<figure class="shot">' + img(i.image, i.alt, 'loading="lazy"') +
              '<figcaption><b>' + esc(i.label) + '</b>' + (i.caption ? ' ' + esc(i.caption) : '') + '</figcaption></figure>';
          }).join('') + '</div></div>';
      }).join('') + '</div></div>';
  };

  R.reviews = function () {
    var V = S.reviews, r = C.rating;
    var score = r ? '<div class="score"><div class="n">' + esc(r.score) + '</div><div>' +
      '<div class="stars" aria-label="' + esc(r.score) + ' out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>' +
      '<small>' + esc(r.count) + ' ' + esc(r.source) + ' reviews</small></div></div>' : '';
    return '<div class="wrap"><div class="rev-head"><h2>' + esc(V.heading) + '</h2>' + score + '</div><div class="revs">' +
      V.list.map(function (v) {
        return '<figure class="rev"><blockquote><p>' + esc(v.text) + '</p></blockquote>' +
          '<figcaption><cite>' + esc(v.name) + '</cite></figcaption></figure>';
      }).join('') + '</div></div>';
  };

  function bookingOptions() {
    var list = [S.services.firstBookingOption];
    S.services.items.forEach(function (s) { list.push(s.bookAs); });
    (S.services.extraBookingOptions || []).forEach(function (o) { list.push(o); });
    list.push(S.membership.bookAs, S.international.bookAs);
    return list.filter(function (v, i) { return list.indexOf(v) === i; });
  }

  R.booking = function () {
    var B = T.booking, items = '';
    items += '<li>' + ICON.phone + '<div><a href="tel:' + esc(C.phoneTel) + '">' + esc(C.phoneDisplay) + '</a><div class="muted">' + esc(B.phoneNote) + '</div></div></li>';
    items += '<li>' + ICON.mail + '<div><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + '</a><div class="muted">' + esc(B.emailNote) + '</div></div></li>';
    if (C.hours) items += '<li>' + ICON.clock + '<div>' + esc(C.hours) + '</div></li>';
    var opts = bookingOptions().map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('');
    return '<div class="wrap book-grid"><div class="book-side"><h2>' + esc(B.heading) + '</h2><p>' + esc(B.text) + '</p>' +
      '<ul class="contact-list">' + items + '</ul></div>' +
      '<form class="form" id="bookForm" novalidate>' +
      '<div class="row"><div class="field"><label for="f-name">Your name</label><input id="f-name" name="name" autocomplete="name" required></div>' +
      '<div class="field"><label for="f-contact">Phone or email</label><input id="f-contact" name="contact" autocomplete="tel" required></div></div>' +
      '<div class="row"><div class="field"><label for="f-for">Appointment is for</label><select id="f-for"><option>Myself</option><option>My child</option><option>My family</option></select></div>' +
      '<div class="field"><label for="f-service">Treatment</label><select id="f-service">' + opts + '</select></div></div>' +
      '<div class="row"><div class="field"><label for="f-date">Preferred date</label><input id="f-date" type="date"></div>' +
      '<div class="field"><label for="f-country">Country (if visiting from abroad)</label><input id="f-country" autocomplete="country-name"></div></div>' +
      '<div class="field"><label for="f-notes">Anything we should know</label><textarea id="f-notes" placeholder="Symptoms, previous treatment, your travel dates"></textarea></div>' +
      '<div class="form-actions"><button type="button" class="btn btn-primary" id="sendWA">Send on WhatsApp</button>' +
      '<button type="button" class="btn btn-ghost" id="sendMail">Send by email</button></div>' +
      '<div class="status" id="status" role="status" aria-live="polite"></div>' +
      '<p class="note">' + esc(B.formNote) + '</p></form></div>';
  };

  R.location = function () {
    var L = T.location;
    return '<div class="wrap loc"><div><h2>' + esc(L.heading) + '</h2>' +
      '<address>' + C.addressLines.map(esc).join('<br>') + '</address>' +
      '<p class="muted">' + esc(L.blurb) + '</p>' +
      '<div class="actions"><a class="btn btn-primary" href="' + esc(C.mapsUrl) + '" target="_blank" rel="noopener">Get directions</a>' +
      '<a class="btn btn-ghost" href="tel:' + esc(C.phoneTel) + '">Call ' + esc(C.phoneDisplay) + '</a></div></div>' +
      '<div class="loc-photo">' + img(L.image, L.imageAlt, 'loading="lazy"') + '</div></div>';
  };

  R.footer = function () {
    var links = [['Services', '#services'], ['Doctors', '#doctors'], ['International patients', '#international'], ['Membership', '#membership'], ['Book', '#book']];
    return '<div class="wrap"><div class="foot">' + brand(46, 33) + '<nav aria-label="Footer">' +
      links.map(function (l) { return '<a href="' + l[1] + '">' + l[0] + '</a>'; }).join('') + '</nav></div>' +
      '<div class="legal">\u00A9 ' + new Date().getFullYear() + ' ' + esc(C.name) + '. ' + esc(T.footer.legal) + '</div></div>';
  };

  R.fab = function () { return ICON.phone; };

  /* ---------- mount ---------- */
  document.querySelectorAll('[data-render]').forEach(function (el) {
    var fn = R[el.getAttribute('data-render')];
    if (fn) el.innerHTML = fn();
  });
  document.getElementById('fab').setAttribute('href', 'tel:' + C.phoneTel);

  /* ---------- search engine data (JSON-LD) ---------- */
  var a = C.addressParts;
  var ld = {
    '@context': 'https://schema.org', '@type': 'Dentist', name: C.name, description: C.tagline + ' in South Delhi.',
    telephone: C.phoneTel, email: C.email,
    address: { '@type': 'PostalAddress', streetAddress: a.street, addressLocality: a.city, addressRegion: a.region, postalCode: a.postalCode, addressCountry: a.country }
  };
  var tag = document.createElement('script');
  tag.type = 'application/ld+json';
  tag.textContent = JSON.stringify(ld);
  document.head.appendChild(tag);
})();
