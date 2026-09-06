document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('reposGrid');
  const searchInput = document.getElementById('repoSearch');
  const filterPills = document.querySelectorAll('.pill');
  const repoCountEl = document.getElementById('repoCount');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (repoCountEl && typeof REPOSITORIES !== 'undefined') {
    repoCountEl.textContent = REPOSITORIES.length;
  }

  let activeFilter = 'all';
  let searchTerm = '';

  function getLanguageClass(lang) {
    if (!lang) return 'lang-other';
    const l = lang.toLowerCase();
    if (l.includes('rust')) return 'lang-rust';
    if (l.includes('python')) return 'lang-python';
    if (l.includes('typescript')) return 'lang-typescript';
    if (l.includes('javascript')) return 'lang-javascript';
    return 'lang-other';
  }

  function renderRepos() {
    if (!grid || typeof REPOSITORIES === 'undefined') return;

    const filtered = REPOSITORIES.filter(repo => {
      const matchesSearch = 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.language && repo.language.toLowerCase().includes(searchTerm.toLowerCase()));

      let matchesFilter = true;
      if (activeFilter === 'all') {
        matchesFilter = true;
      } else if (activeFilter === 'Crypto') {
        matchesFilter = repo.category === 'Crypto' || 
          repo.name.match(/FHE|ZKG|Sybil|Vantablack|SMPC|SymEx|Ghost|TradeShield/i);
      } else if (activeFilter === 'OS') {
        matchesFilter = repo.category === 'OS' || 
          repo.name.match(/OS|Plane|Transit|Roboter|Kernel/i);
      } else {
        matchesFilter = repo.language && repo.language.toLowerCase() === activeFilter.toLowerCase();
      }

      return matchesSearch && matchesFilter;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 0; color: var(--text-dim);">
          <p style="font-size: 16px; margin-bottom: 8px;">No repositories matching your criteria.</p>
          <p style="font-size: 13px;">Try adjusting your search query or filter tags.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(repo => {
      const langClass = getLanguageClass(repo.language);
      return `
        <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-card">
          <div>
            <div class="repo-card-header">
              <span class="repo-name">
                <svg class="repo-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                ${repo.name}
              </span>
              <span class="repo-badge">Public</span>
            </div>
            <p class="repo-desc">${repo.description}</p>
          </div>
          <div class="repo-card-footer">
            <span class="lang-pill">
              <span class="lang-dot ${langClass}"></span>
              ${repo.language || 'System'}
            </span>
            <svg class="external-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </a>
      `;
    }).join('');
  }

  // Filter pills event
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter');
      renderRepos();
    });
  });

  // Search event with debounce
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      renderRepos();
    });
  }

  renderRepos();
});
