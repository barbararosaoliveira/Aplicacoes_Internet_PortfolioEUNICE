import { h, $ } from '../utils/dom.js';
import { activities, competencies, THEMES, years, getCompetency } from '../utils/data.js';
import { activityCard } from '../components/activity-card.js';

// Estado dos filtros, sincronizado com a URL (?theme=&competency=&year=)
const params = new URLSearchParams(location.search);
const state = {
  theme: params.get('theme') || 'all',
  competency: params.get('competency') || 'all',
  year: params.get('year') || 'all',
};

const groups = {
  theme: { root: $('#filter-theme'), options: THEMES.map((t) => [t, t]) },
  competency: { root: $('#filter-competency'), options: competencies.map((c) => [c.id, c.name]) },
  year: { root: $('#filter-year'), options: years().map((y) => [String(y), String(y)]) },
};

function matches(a) {
  return (
    (state.theme === 'all' || a.themes.includes(state.theme)) &&
    (state.competency === 'all' || a.competencies.includes(state.competency)) &&
    (state.year === 'all' || String(a.year) === state.year)
  );
}

function renderFilters() {
  for (const [key, { root, options }] of Object.entries(groups)) {
    root.replaceChildren(
      ...[['all', 'All'], ...options].map(([value, label]) =>
        h(
          'button',
          {
            class: 'chip',
            type: 'button',
            'aria-pressed': String(state[key] === value),
            onclick: () => {
              state[key] = value;
              syncUrl();
              render();
            },
          },
          label
        )
      )
    );
  }
}

function syncUrl() {
  const next = new URLSearchParams();
  for (const [k, v] of Object.entries(state)) if (v !== 'all') next.set(k, v);
  history.replaceState(null, '', next.size ? `?${next}` : location.pathname);
}

function render() {
  renderFilters();
  const list = activities.filter(matches);
  $('#results-count').textContent = `${list.length} activities`;
  $('#activity-grid').replaceChildren(
    ...list.map((a) => activityCard(a, (id) => getCompetency(id)?.name ?? id))
  );
}

render();
