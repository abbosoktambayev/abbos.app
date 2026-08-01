// abbos.app — /feedback/ form
// Progressive enhancement only: without this file the form still submits
// as a plain HTML POST and the service redirects to /feedback/thanks/.
// The endpoint is NOT configured here — it lives in the form's action
// attribute in feedback/index.html (one place for the form key).
(function () {
  'use strict';

  var form = document.getElementById('feedbackForm');
  if (!form) return;

  // ---------- version details from the URL ----------
  // The app opens: /feedback/?v=1.1&b=9&d=iPhone15,2&os=18.5&lang=ru
  var META = [
    { param: 'v',    row: 'metaVersion', field: 'app_version',  max: 24 },
    { param: 'b',    row: 'metaBuild',   field: 'app_build',    max: 16 },
    { param: 'd',    row: 'metaDevice',  field: 'device',       max: 40 },
    { param: 'os',   row: 'metaOs',      field: 'os_version',   max: 24 },
    { param: 'lang', row: 'metaLang',    field: 'app_language', max: 12 }
  ];

  // technical values only — anything outside this alphabet is dropped
  function clean(value, max) {
    if (!value) return '';
    return value.replace(/[^A-Za-z0-9 ._,:()+-]/g, '').trim().slice(0, max);
  }

  var params = new URLSearchParams(location.search);
  var hasMeta = false;

  META.forEach(function (m) {
    var row = document.getElementById(m.row);
    var input = form.querySelector('input[name="' + m.field + '"]');
    var value = clean(params.get(m.param), m.max);
    if (value) {
      hasMeta = true;
      row.querySelector('.meta-value').textContent = value;
      if (input) input.value = value;
    } else {
      row.hidden = true;
    }
  });

  document.getElementById('metaCard').hidden = !hasMeta;
  document.getElementById('metaEmpty').hidden = hasMeta;

  // ---------- "send a screenshot by email" ----------
  // The form itself takes text only. This link opens the visitor's mail
  // client with the type, their draft and the version details already in
  // the body, so the only thing left to do is attach the picture.
  // Without JS the plain mailto in the markup still works.
  var mailto = document.getElementById('fbMailto');

  function buildMailto() {
    var lines = [];
    var typeLabel = document.getElementById('fbMailType').textContent;
    var checked = form.querySelector('input[name="type"]:checked');
    if (checked) lines.push(typeLabel + ': ' + checked.nextElementSibling.textContent.trim());

    var draft = document.getElementById('fbMessage').value.trim();
    if (draft) lines.push('', draft.slice(0, 1500));

    var rows = form.querySelectorAll('.meta-row:not([hidden])');
    if (rows.length) {
      lines.push('', document.getElementById('fbMailMeta').textContent);
      Array.prototype.forEach.call(rows, function (row) {
        lines.push(row.querySelector('dt').textContent + ': ' + row.querySelector('.meta-value').textContent);
      });
    }

    lines.push('', document.getElementById('fbMailHint').textContent);

    mailto.href = 'mailto:oktambayevabbos1@gmail.com' +
      '?subject=' + encodeURIComponent('Hafiz — feedback + screenshot') +
      '&body=' + encodeURIComponent(lines.join('\r\n'));
  }

  if (mailto) {
    buildMailto();
    form.addEventListener('input', buildMailto);
    form.addEventListener('change', buildMailto);
    // the body is built from on-page text, so it has to follow the EN/RU
    // toggle too — site.js swaps the strings before this listener runs
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', buildMailto);
    });
  }

  // ---------- submit states: idle → sending → sent | error ----------
  var submit = document.getElementById('fbSubmit');
  var idleLabel = document.getElementById('fbSubmitIdle');
  var busyLabel = document.getElementById('fbSubmitBusy');
  var alertBox = document.getElementById('fbError');
  var status = document.getElementById('fbStatus');
  var sentCard = document.getElementById('fbSent');
  var sending = false;

  function setSending(on) {
    sending = on;
    submit.disabled = on;
    submit.setAttribute('aria-busy', on ? 'true' : 'false');
    idleLabel.hidden = on;
    busyLabel.hidden = !on;
    if (on) alertBox.hidden = true;
    // the visible label is announced through the live region too
    status.textContent = on ? busyLabel.textContent : '';
  }

  function showSent() {
    form.hidden = true;
    sentCard.hidden = false;
    sentCard.classList.add('in');
    status.textContent = '';
    sentCard.focus();
  }

  function showError() {
    setSending(false);
    alertBox.hidden = false;
    alertBox.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
    console.warn('[feedback] The form endpoint is still a placeholder — set the real ID in the form action of feedback/index.html.');
  }

  form.addEventListener('submit', function (e) {
    // no fetch/FormData → let the browser do a normal POST (thanks page)
    if (!window.fetch || !window.FormData) return;
    e.preventDefault();
    if (sending) return;
    setSending(true);

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        showSent();
      })
      .catch(showError);
  });
})();
