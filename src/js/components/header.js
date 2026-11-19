import { h, $ } from '../utils/dom.js';
import { activities } from '../utils/data.js';

const LINKS = [
  { page: 'activities', href: '/activities.html', label: 'Activities' },
  { page: 'competencies', href: '/competencies.html', label: 'Competencies' },
];

const searchIcon = () => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '16');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.innerHTML = '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>';
  return svg;
};

export function renderHeader(root) {
  const current = document.body.dataset.page;

  const results = h('div', { class: 'search-panel__results' });
  const input = h('input', {
    class: 'search-panel__input',
    type: 'search',
    placeholder: 'Search activities…',
    'aria-label': 'Search activities',
  });
  const panel = h('div', { class: 'search-panel', hidden: true }, input, results);

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    results.replaceChildren(
      ...(q
        ? activities
            .filter((a) => `${a.title} ${a.summary}`.toLowerCase().includes(q))
            .map((a) => h('a', { href: `/activity.html?id=${a.id}` }, a.title))
        : [])
    );
  });

  const toggle = h(
    'button',
    {
      class: 'site-nav__search',
      type: 'button',
      'aria-label': 'Search',
      'aria-expanded': 'false',
      onclick: () => {
        panel.hidden = !panel.hidden;
        toggle.setAttribute('aria-expanded', String(!panel.hidden));
        if (!panel.hidden) input.focus();
      },
    },
    searchIcon()
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

  root.replaceChildren(
    h(
      'a',
      { class: 'site-header__logo', href: '/', 'aria-label': 'EUNICE Portfolio, home' },
      h('span', { class: 'site-header__logo-mark' }, 'Eunice'),
      h('span', { class: 'site-header__logo-sub' }, 'European University')
    ),
    h(
      'nav',
      { class: 'site-nav', 'aria-label': 'Main' },
      ...LINKS.map((l) =>
        h(
          'a',
          { class: 'site-nav__link', href: l.href, 'aria-current': l.page === current ? 'page' : false },
          l.label
        )
      ),
      toggle
    ),
    panel
  );
}

export const initHeader = () => {
  const root = $('#site-header');
  if (root) renderHeader(root);
};
