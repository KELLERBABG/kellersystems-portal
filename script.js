document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('reposTable');
  const searchInput = document.getElementById('repoSearch');
  const filterPills = document.querySelectorAll('.pill');

  let activeFilter = 'all';
  let searchTerm = '';

  function render() {
    if (!table || typeof REPOSITORIES === 'undefined') return;

    const filtered = REPOSITORIES.filter(repo => {
      const matchQuery = 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.language && repo.language.toLowerCase().includes(searchTerm.toLowerCase()));

      let matchFilter = true;
      if (activeFilter === 'all') {
        matchFilter = true;
      } else if (activeFilter === 'Crypto') {
        matchFilter = repo.category === 'Crypto' || 
          repo.name.match(/FHE|ZKG|Sybil|Vantablack|SMPC|SymEx|Ghost|TradeShield/i);
      } else if (activeFilter === 'OS') {
        matchFilter = repo.category === 'OS' || 
          repo.name.match(/OS|Plane|Transit|Roboter|Kernel/i);
      } else {
        matchFilter = repo.language && repo.language.toLowerCase() === activeFilter.toLowerCase();
      }

      return matchQuery && matchFilter;
    });

    if (filtered.length === 0) {
      table.innerHTML = `
        <div style="padding: 40px; text-align: center; font-size: 13.5px; color: var(--text-tertiary);">
          No repositories match your filter criteria.
        </div>
      `;
      return;
    }

    table.innerHTML = filtered.map(repo => {
      return `
        <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="table-row">
          <div class="row-name">${repo.name}</div>
          <div class="row-desc" title="${repo.description}">${repo.description}</div>
          <div class="row-lang">${repo.language || 'System'}</div>
          <div class="row-arrow">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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
