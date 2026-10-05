/* ==========================================================================
   KELLER SYSTEMS — PORTAL BEHAVIOUR
   Progressive enhancement only: the page is fully readable without this file.
   ========================================================================== */

window.__ksInit = true;

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* data.js declares a top-level `const`, so read the binding, not window. */
  const SOURCE = typeof REPOSITORIES !== 'undefined' && Array.isArray(REPOSITORIES) ? REPOSITORIES : [];
  const REPOS = SOURCE.slice();

  /* --- helpers ---------------------------------------------------------- */

  const escapeHtml = (value) =>
    String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  /* GitHub descriptions sometimes lead with an emoji shortcode (":black_heart:")
     which reads as noise in a technical index — strip it, keep the meaning. */
  const cleanDesc = (value) => String(value || '').replace(/^\s*:[a-z0-9_+-]+:\s*/i, '').trim();

  const monogram = (name) => {
    const match = String(name || '').match(/[A-Za-z0-9]/);
    return match ? match[0].toUpperCase() : '?';
  };

  /* One predicate drives both the filters and the pill counts, so a count can
     never disagree with the number of rows the filter actually produces. */

  /* Domains come straight from the curated `category` field. The previous
     substring heuristic (/OS/ matched "AeroDose", "Ghost", "Planetary")
     inflated the count above the number of real domain members. */
  function matches(repo, filter) {
    if (!filter || filter === 'all') return true;
    if (filter === 'Crypto') return repo.category === 'Crypto';
    if (filter === 'OS') return repo.category === 'OS';
    return String(repo.language || '').toLowerCase() === filter.toLowerCase();
  }

  function matchesSearch(repo, term) {
    if (!term) return true;
    const haystack = [repo.name, cleanDesc(repo.description), repo.language]
      .join(' ')
      .toLowerCase();
    return haystack.includes(term);
  }

  /* --- icon fallback: a monogram tile instead of a broken image ---------- */

  function handleTileError(event) {
    const img = event.currentTarget;
    const span = document.createElement('span');
    span.className = img.className + ' is-mono';
    span.setAttribute('aria-hidden', 'true');
    span.textContent = monogram(img.dataset.mono || img.alt);
    if (img.parentNode) img.parentNode.replaceChild(span, img);
  }

  function wireTiles(scope) {
    (scope || document).querySelectorAll('img.tile').forEach((img) => {
      img.addEventListener('error', handleTileError, { once: true });
      if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event('error'));
    });
  }

  /* --- registry data ---------------------------------------------------- */

  const repos = REPOS
    .slice()
    .sort((a, b) => String(a.name).localeCompare(String(b.name), 'en'));

  /* --- stats band ------------------------------------------------------- */

  function renderStats() {
    const values = {
      systems: repos.length,
      kernels: repos.filter((r) => matches(r, 'OS')).length,
      crypto: repos.filter((r) => matches(r, 'Crypto')).length,
      stacks: new Set(repos.map((r) => r.language).filter(Boolean)).size
    };

    document.querySelectorAll('[data-stat]').forEach((el) => {
      const key = el.dataset.stat;
      if (key in values) el.textContent = String(values[key]);
    });

    const counts = repos.reduce((acc, r) => {
      if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
      return acc;
    }, {});
    const note = document.querySelector('[data-stat-note="stacks"]');
    if (note) note.textContent = Object.keys(counts).join(' \u00b7 ');
  }

  /* --- ticker ----------------------------------------------------------- */

  function renderTicker() {
    const track = document.getElementById('tickerTrack');
    if (!track || !repos.length) return;

    const items = repos
      .map((r) => `<li class="ticker-item">${escapeHtml(r.name)}</li>`)
      .join('');

    /* Two identical lists make the -50% translate a seamless loop. The band
       is aria-hidden, and every name here also appears in the directory. */
    track.innerHTML = `<ul class="ticker-list">${items}</ul><ul class="ticker-list">${items}</ul>`;

    const toggle = document.getElementById('tickerToggle');
    const band = document.querySelector('.ticker');
    if (toggle && band) {
      toggle.addEventListener('click', () => {
        const paused = band.classList.toggle('is-paused');
        toggle.setAttribute('aria-pressed', String(paused));
        toggle.textContent = paused ? 'Play ticker' : 'Pause ticker';
      });
    }
  }

  /* --- directory -------------------------------------------------------- */

  const table = document.getElementById('reposTable');
  const searchInput = document.getElementById('repoSearch');
  const resultsCount = document.getElementById('resultsCount');
  const pills = Array.from(document.querySelectorAll('.pill'));

  let activeFilter = 'all';
  let searchTerm = '';

  function renderPillCounts() {
    document.querySelectorAll('[data-count]').forEach((el) => {
      const key = el.dataset.count;
      el.textContent = String(repos.filter((r) => matches(r, key)).length);
    });
  }

  function renderTable() {
    if (!table) return;

    const term = searchTerm.trim().toLowerCase();
    const filtered = repos.filter((r) => matches(r, activeFilter) && matchesSearch(r, term));

    if (resultsCount) {
      resultsCount.textContent = filtered.length
        ? `${filtered.length} of ${repos.length} systems`
        : 'No matching systems';
    }

    if (!filtered.length) {
      table.innerHTML = '<p class="table-empty">No systems match this filter. Clear the search or pick another domain.</p>';
      return;
    }

    table.innerHTML = filtered
      .map((repo) => {
        const name = escapeHtml(repo.name);
        const desc = escapeHtml(cleanDesc(repo.description));
        const site = escapeHtml(repo.url);
        const lang = escapeHtml(repo.language || 'System');
        const icon = escapeHtml(
          `https://raw.githubusercontent.com/KELLERBABG/${repo.raw_name}/main/assets/icon.svg`
        );

        return `<a class="row" href="${site}" target="_blank" rel="noopener noreferrer">
          <span class="row-name">
            <img class="tile tile-sm" data-mono="${escapeHtml(monogram(repo.name))}" src="${icon}" alt="" width="22" height="22" loading="lazy" decoding="async">
            <span>${name}</span>
          </span>
          <span class="row-desc" title="${desc}">${desc}</span>
          <span class="row-lang">${lang}</span>
          <span class="row-arrow" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </a>`;
      })
      .join('');

    wireTiles(table);
  }

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => {
        p.classList.remove('active');
        p.setAttribute('aria-pressed', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-pressed', 'true');
      activeFilter = pill.dataset.filter || 'all';
      renderTable();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      searchTerm = event.target.value;
      renderTable();
    });
  }

  /* --- scroll reveal ---------------------------------------------------- */

  function initReveal() {
    const targets = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!targets.length) return;

    targets.forEach((el) => {
      if (el.dataset.delay) el.style.setProperty('--reveal-delay', `${el.dataset.delay}ms`);
    });

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  /* --- boot ------------------------------------------------------------- */

  renderStats();
  renderTicker();
  renderPillCounts();
  renderTable();
  wireTiles(document);
  initReveal();

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
});
