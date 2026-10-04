/* Menu, treatment pre-selection and the booking form.
   Contact details come from data/contact.js. */
(function () {
  var C = window.SITE.contact;

  /* mobile menu */
  var menuBtn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });

  /* clicking a link with data-service pre-selects that treatment in the form */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-service]');
    if (!a) return;
    var sel = document.getElementById('f-service'), v = a.getAttribute('data-service');
    for (var i = 0; i < sel.options.length; i++) {
      if (sel.options[i].text === v) { sel.selectedIndex = i; break; }
    }
  });

  /* date picker: no past dates */
  var d = document.getElementById('f-date'), t = new Date();
  d.min = t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0');

  /* booking form */
  var status = document.getElementById('status');
  function val(id) { return document.getElementById(id).value.trim(); }

  function buildMessage() {
    var name = val('f-name'), contact = val('f-contact');
    if (!name || !contact) {
      status.textContent = 'Please add your name and a phone number or email so we can reach you.';
      document.getElementById(name ? 'f-contact' : 'f-name').focus();
      return null;
    }
    var lines = ['Hello ' + C.name + ', I would like to book an appointment.', '',
      'Name: ' + name, 'Contact: ' + contact,
      'Appointment for: ' + val('f-for'), 'Treatment: ' + val('f-service')];
    if (val('f-date')) lines.push('Preferred date: ' + val('f-date'));
    if (val('f-country')) lines.push('Country: ' + val('f-country'));
    if (val('f-notes')) lines.push('Notes: ' + val('f-notes'));
    return lines.join('\n');
  }

  document.getElementById('sendWA').addEventListener('click', function () {
    var m = buildMessage(); if (!m) return;
    status.textContent = 'Opening WhatsApp. Review the message and press send.';
    window.open('https://wa.me/' + C.whatsappNumber + '?text=' + encodeURIComponent(m), '_blank', 'noopener');
  });

  document.getElementById('sendMail').addEventListener('click', function () {
    var m = buildMessage(); if (!m) return;
    status.textContent = 'Opening your email app. Review the message and press send.';
    window.location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent('Appointment request') + '&body=' + encodeURIComponent(m);
  });
})();
