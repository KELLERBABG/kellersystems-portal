/* ==========================================================================
   KELLER SYSTEMS — SCROLL STORY
   The scroll effects are driven by a computed scroll progress, published as
   CSS custom properties (--p, --herop, --scrollp). Why not CSS
   animation-timeline: it attaches correctly but resolves no progress value in
   the environment this was built and verified in, and shipping an experience
   that cannot be checked is guesswork. Position drives value, so the motion is
   continuous and reversible either way.

   Per frame this does ~12 custom-property writes, zero layout reads and no
   per-frame layout thrash. Native scrolling is never intercepted.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var DATA = (typeof REPOSITORIES !== 'undefined' && Array.isArray(REPOSITORIES))
    ? REPOSITORIES.slice() : [];
  var TIER_LIST = (typeof TIERS !== 'undefined' && Array.isArray(TIERS))
    ? TIERS.slice() : [];

  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function initial(name) {
    var m = String(name || '').match(/[A-Za-z0-9]/);
    return m ? m[0].toUpperCase() : '?';
  }
  function pad2(n) { return n < 10 ? '0' + n : String(n); }
  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  /* --- 1. Tiered Systems Index + footer count, from the registry -------- */
  var activeTier = 'ALL';
  var searchQuery = '';

  function matchesSearch(item, q) {
    if (!q) return true;
    var hay = [item.name, item.raw_name, item.tier, item.domain, item.language, item.description]
      .join(' ').toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function renderCard(item, tierId) {
    var isComm = tierId === 'COMM';
    var isPoC = tierId === 'PoC';
    var isOS = tierId === 'OS';
    var cls = 'idx-card' + (isComm ? ' idx-card-comm' : '') + (isPoC ? ' idx-card-poc' : '');

    var footerLinks = isOS && item.github_url
      ? '<div class="idx-actions">' +
          '<a class="idx-link" href="' + esc(item.url) + '" target="_blank" rel="noopener noreferrer">Live &#8599;</a>' +
          '<a class="idx-link idx-link-accent" href="' + esc(item.github_url) + '" target="_blank" rel="noopener noreferrer">Source &#8599;</a>' +
        '</div>'
      : '<span class="idx-link" aria-hidden="true">&#8599;</span>';

    return '<article class="' + cls + '">' +
      '<div class="idx-card-top">' +
        '<span class="idx-head-mark" aria-hidden="true">' + esc(initial(item.name)) + '</span>' +
      '</div>' +
      '<h3 class="idx-title">' +
        '<a href="' + esc(item.url) + '" target="_blank" rel="noopener noreferrer">' + esc(item.name) + '</a>' +
      '</h3>' +
      (item.description ? '<p class="idx-desc">' + esc(item.description) + '</p>' : '') +
      '<div class="idx-foot">' +
        '<span>' + esc(item.domain || '') + ' &middot; ' + esc(item.language || '') + '</span>' +
        footerLinks +
      '</div>' +
    '</article>';
  }

  function renderArchiveBand(tier, items, autoOpen) {
    var rows = items.map(function (item) {
      return '<a class="archive-row" href="' + esc(item.url) + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="ar-name">' + esc(item.name) + '</span>' +
        '<span class="ar-desc">' + esc(item.description || '') + '</span>' +
        '<span class="ar-meta">' + esc(item.language || '') + '</span>' +
        '<span class="ar-meta" aria-hidden="true">&#8599;</span>' +
      '</a>';
    }).join('');

    return '<div class="tier-band" id="tier-archive">' +
      '<details class="archive-box"' + (autoOpen ? ' open' : '') + '>' +
        '<summary>' +
          '<div class="tier-title-group">' +
            '<span class="tier-code">ARCHIVE</span>' +
            '<h3 class="tier-name" style="font-size:1.05rem;">' + esc(tier.label) + '</h3>' +
            '<span class="tier-sub">' + esc(tier.sub) + '</span>' +
          '</div>' +
          '<span class="archive-toggle">' + pad2(items.length) + ' systems &middot; Toggle</span>' +
        '</summary>' +
        '<div class="archive-rows">' + rows + '</div>' +
      '</details>' +
    '</div>';
  }

  function updateTabCounts() {
    var tabsEl = document.getElementById('tierTabs');
    if (!tabsEl || !DATA.length) return;
    var counts = { ALL: DATA.length };
    DATA.forEach(function (item) {
      counts[item.tier] = (counts[item.tier] || 0) + 1;
    });
    var buttons = tabsEl.querySelectorAll('[data-tier]');
    for (var i = 0; i < buttons.length; i++) {
      var id = buttons[i].getAttribute('data-tier');
      var badge = buttons[i].querySelector('.tab-n');
      if (badge && typeof counts[id] === 'number') {
        badge.textContent = id === 'ALL' ? String(counts[id]) : pad2(counts[id]);
      }
    }
  }

  function renderIndex(skipRemeasure) {
    var host = document.getElementById('tierRegistry');
    if (!host || !DATA.length || !TIER_LIST.length) return;
    var q = searchQuery.trim().toLowerCase();
    var emptyEl = document.getElementById('indexEmpty');
    var html = [];
    var shown = 0;

    TIER_LIST.forEach(function (tier) {
      if (activeTier !== 'ALL' && activeTier !== tier.id) return;
      var items = DATA.filter(function (r) {
        return r.tier === tier.id && matchesSearch(r, q);
      });
      if (!items.length) return;
      shown += items.length;

      if (tier.id === 'ARCHIVE') {
        var openArchive = activeTier === 'ARCHIVE' || Boolean(q) || window.location.hash.toLowerCase() === '#tier-archive';
        html.push(renderArchiveBand(tier, items, openArchive));
        return;
      }

      var gridCls = tier.id === 'PoC' ? 'idx-grid idx-grid-2' : 'idx-grid idx-grid-3';
      var headCls = tier.id === 'COMM' ? 'tier-head tier-head-comm' : 'tier-head';
      var codeCls = tier.id === 'COMM'
        ? 'tier-code tier-code-comm'
        : (tier.id === 'OS' ? 'tier-code tier-code-os' : 'tier-code');

      html.push(
        '<div class="tier-band" id="tier-' + esc(tier.id.toLowerCase()) + '">' +
          '<div class="' + headCls + '">' +
            '<div class="tier-title-group">' +
              '<span class="' + codeCls + '">' + esc(tier.id) + '</span>' +
              '<h3 class="tier-name">' + esc(tier.label) + '</h3>' +
              '<span class="tier-sub">' + esc(tier.sub) + '</span>' +
            '</div>' +
            '<span class="tier-count">' + pad2(items.length) + '</span>' +
          '</div>' +
          '<div class="' + gridCls + '">' +
            items.map(function (it) { return renderCard(it, tier.id); }).join('') +
          '</div>' +
        '</div>'
      );
    });

    host.innerHTML = html.join('');
    if (emptyEl) emptyEl.hidden = shown > 0;

    var archiveDetails = host.querySelector('.archive-box');
    if (archiveDetails) {
      archiveDetails.addEventListener('toggle', remeasure);
    }
    if (!skipRemeasure) remeasure();
  }

  function initIndexControls() {
    var tabsEl = document.getElementById('tierTabs');
    var searchEl = document.getElementById('indexSearch');
    var resetEl = document.getElementById('indexReset');
    var liveEl = document.getElementById('indexLive');

    function setActiveTab(tierId) {
      activeTier = tierId;
      if (tabsEl) {
        var btns = tabsEl.querySelectorAll('[data-tier]');
        for (var i = 0; i < btns.length; i++) {
          btns[i].setAttribute('aria-pressed', String(btns[i].getAttribute('data-tier') === tierId));
        }
      }
      renderIndex();
      if (liveEl) liveEl.textContent = 'Showing ' + (tierId === 'ALL' ? 'all' : tierId) + ' systems';
    }

    if (tabsEl) {
      tabsEl.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('[data-tier]') : null;
        if (!btn) return;
        setActiveTab(btn.getAttribute('data-tier'));
      });
    }

    if (searchEl) {
      searchEl.addEventListener('input', function () {
        searchQuery = searchEl.value;
        renderIndex();
      });
    }

    if (resetEl) {
      resetEl.addEventListener('click', function () {
        searchQuery = '';
        if (searchEl) searchEl.value = '';
        setActiveTab('ALL');
      });
    }

    window.addEventListener('hashchange', function () {
      if (window.location.hash.toLowerCase() === '#tier-archive') {
        var details = document.querySelector('#tier-archive .archive-box');
        if (details && !details.open) {
          details.open = true;
          remeasure();
        }
      }
    });
  }

  /* --- 2. Reading progress rail ----------------------------------------- */
  var railFill = document.querySelector('.progress-fill');

  function docTop(el) {
    var t = 0;
    var node = el;
    while (node) { t += node.offsetTop || 0; node = node.offsetParent; }
    return t;
  }

  function frame() {
    if (!root.classList.contains('motion-on')) return;
    var vh = window.innerHeight;
    var y = window.scrollY;

    if (railFill) {
      var max = root.scrollHeight - vh;
      railFill.style.setProperty('--rail', (max > 0 ? clamp(y / max) : 0).toFixed(4));
    }

    updateTicks();
  }

  function resetRail() {
    if (railFill) railFill.style.removeProperty('--rail');
  }

  /* --- 3. Motion gate --------------------------------------------------- */
  function setMotion(on) {
    root.classList.toggle('motion-on', on);
    root.setAttribute('data-motion', on ? 'on' : 'off');
    if (on) { frame(); } else { resetRail(); }
  }

  /* --- 4. Theme toggle (Light <-> Dusty Mauve Dark, circular reveal) ---- */
  var themeBtn = document.getElementById('themeToggle');
  var themeMeta = document.getElementById('themeColorMeta');

  function setTheme(dark, persist) {
    if (dark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    if (themeBtn) {
      themeBtn.setAttribute('aria-pressed', String(dark));
      themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dusty mauve dark mode');
    }
    if (themeMeta) {
      themeMeta.setAttribute('content', dark ? '#332632' : '#f6f1e6');
    }
    if (persist) {
      try { localStorage.setItem('ks-theme', dark ? 'dark' : 'light'); } catch (e) {}
    }
  }

  function makePaintPolygon(cx, cy, baseR, wobbleAmp, dripAmp, phase) {
    var pts = [];
    var count = 24;
    for (var i = 0; i < count; i++) {
      var a = (i / count) * Math.PI * 2;
      var lobe = Math.sin(a * 3 + phase) * 0.6 + Math.cos(a * 5 - phase * 0.7) * 0.4;
      var gravity = Math.sin(a) > 0 ? Math.pow(Math.sin(a), 2) * dripAmp : 0;
      var r = Math.max(0, baseR * (1 + lobe * wobbleAmp + gravity));
      pts.push((cx + Math.cos(a) * r).toFixed(1) + 'px ' + (cy + Math.sin(a) * r).toFixed(1) + 'px');
    }
    return 'polygon(' + pts.join(', ') + ')';
  }

  function toggleThemeAnimated() {
    var nextDark = root.getAttribute('data-theme') !== 'dark';
    if (reduce || typeof document.startViewTransition !== 'function' || !themeBtn) {
      setTheme(nextDark, true);
      return;
    }

    var rect = themeBtn.getBoundingClientRect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    var endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    var phase = nextDark ? 0.4 : 2.1;

    var transition = document.startViewTransition(function () {
      setTheme(nextDark, true);
    });

    transition.ready.then(function () {
      root.animate(
        {
          clipPath: [
            makePaintPolygon(x, y, 0, 0, 0, phase),
            makePaintPolygon(x, y, endRadius * 0.14, 0.26, 0.34, phase),
            makePaintPolygon(x, y, endRadius * 0.54, 0.22, 0.42, phase + 0.4),
            makePaintPolygon(x, y, endRadius * 1.4, 0.06, 0.08, phase + 0.55)
          ]
        },
        {
          duration: 1150,
          easing: 'cubic-bezier(0.32, 0.08, 0.24, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });
  }

  (function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('ks-theme'); } catch (e) {}
    setTheme(saved === 'dark', false);
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleThemeAnimated);
    }
  })();

  /* --- 5. Progress-rail ticks ------------------------------------------- */
  var ticksEl = document.getElementById('progressTicks');
  var markers = ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'shelf'].map(function (id) {
    return { id: id, el: document.getElementById(id) };
  }).filter(function (m) { return m.el; });
  var tickList = [];

  function layoutTicks() {
    if (!ticksEl) return;
    var top = document.querySelector('.top');
    var headerH = top ? top.offsetHeight : 0;
    var max = root.scrollHeight - window.innerHeight;
    ticksEl.innerHTML = '';
    tickList = markers.map(function (m) {
      var y = docTop(m.el) - headerH;
      var tick = document.createElement('i');
      tick.style.top = (max > 0 ? Math.min(Math.max((y / max) * 100, 0), 100) : 0) + '%';
      ticksEl.appendChild(tick);
      return { y: y, tick: tick };
    });
    updateTicks();
  }

  function updateTicks() {
    for (var i = 0; i < tickList.length; i++) {
      tickList[i].tick.classList.toggle('is-on', window.scrollY >= tickList[i].y - 4);
    }
  }

  /* --- 5. Scrollspy: contents list + sticky chapter label --------------- */
  function initSpy() {
    var chapters = Array.prototype.slice.call(document.querySelectorAll('.chapter'));
    var items = Array.prototype.slice.call(document.querySelectorAll('#contentsList li'));
    var label = document.getElementById('chapterLabel');
    var indexEl = label ? label.querySelector('b') : null;
    var nameEl = label ? label.querySelector('span') : null;
    if (!chapters.length || !('IntersectionObserver' in window)) return;

    var active = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          active = entry.target;
          var id = entry.target.id;
          items.forEach(function (li) { li.classList.toggle('is-on', li.dataset.for === id); });
          if (label && indexEl && nameEl) {
            indexEl.textContent = entry.target.dataset.index;
            nameEl.textContent = entry.target.dataset.name;
            label.classList.add('is-on');
          }
        } else if (entry.target === active) {
          active = null;
          if (label) label.classList.remove('is-on');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    chapters.forEach(function (c) { io.observe(c); });
  }

  /* --- 6. One passive listener, called directly --------------------------
     Not rAF-throttled on purpose: if animation frames are starved (a
     backgrounded or occluded frame), an rAF gate can latch shut and stop
     responding for good. The work here is a dozen custom-property writes and
     zero layout reads, and browsers already coalesce scroll events to about
     one per frame, so calling straight through is both cheaper to reason
     about and safe. Native scrolling is never intercepted. */
  window.addEventListener('scroll', frame, { passive: true });

  function remeasure() { layoutTicks(); frame(); }
  window.addEventListener('resize', remeasure);
  window.addEventListener('load', remeasure);
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(remeasure); }

  /* --- boot ------------------------------------------------------------- */
  updateTabCounts();
  renderIndex(true);
  initIndexControls();
  layoutTicks();
  initSpy();
  setMotion(!reduce);
})();
