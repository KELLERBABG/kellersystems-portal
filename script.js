document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('reposGrid');
  const searchInput = document.getElementById('repoSearch');
  const filterPills = document.querySelectorAll('.pill');

  let activeFilter = 'all';
  let searchTerm = '';

  function getDotClass(lang) {
    if (!lang) return 'dot-other';
    const l = lang.toLowerCase();
    if (l.includes('rust')) return 'dot-rust';
    if (l.includes('python')) return 'dot-python';
    if (l.includes('typescript')) return 'dot-typescript';
    if (l.includes('javascript')) return 'dot-javascript';
    return 'dot-other';
  }

  function render() {
    if (!grid || typeof REPOSITORIES === 'undefined') return;

    const filtered = REPOSITORIES.filter(repo => {
      const matchText = 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.language && repo.language.toLowerCase().includes(searchTerm.toLowerCase()));

      let matchCategory = true;
      if (activeFilter === 'all') {
        matchCategory = true;
      } else if (activeFilter === 'Crypto') {
        matchCategory = repo.category === 'Crypto' || 
          repo.name.match(/FHE|ZKG|Sybil|Vantablack|SMPC|SymEx|Ghost|TradeShield/i);
      } else if (activeFilter === 'OS') {
        matchCategory = repo.category === 'OS' || 
          repo.name.match(/OS|Plane|Transit|Roboter|Kernel/i);
      } else {
        matchCategory = repo.language && repo.language.toLowerCase() === activeFilter.toLowerCase();
      }

      return matchText && matchCategory;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px; text-align: center; font-family: var(--font-mono); font-size: 13px; color: var(--text-dim); border: 1px dashed var(--border-subtle);">
          [!] No codebases matching filter query.
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(repo => {
      const dot = getDotClass(repo.language);
      return `
        <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="catalog-card">
          <div>
            <div class="card-top">
              <span class="card-title">${repo.name}</span>
              <span class="card-tag">${repo.category.toUpperCase()}</span>
            </div>
            <p class="card-desc">${repo.description}</p>
          </div>
          <div class="card-bottom">
            <span class="lang-badge">
              <span class="lang-dot ${dot}"></span>
              ${repo.language || 'System'}
            </span>
            <span class="card-arrow">&rarr;</span>
          </div>
        </a>
      `;
    }).join('');
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter');
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      render();
    });
  }

  render();
});
