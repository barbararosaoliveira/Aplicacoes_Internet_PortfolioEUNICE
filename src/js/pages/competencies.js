import { h, $ } from '../utils/dom.js';
import { competencies, countActivities } from '../utils/data.js';

$('#competency-list').replaceChildren(
  ...competencies.map((c) =>
    h(
      'li',
      {},
      h(
        'a',
        { class: 'competency-list__item', href: `/activities.html?competency=${c.id}` },
        h(
          'div',
          {},
          h('h2', { class: 'competency-list__name' }, c.name),
          h('p', { class: 'competency-list__desc' }, c.description)
        ),
        h('span', { class: 'competency-list__count' }, `${countActivities(c.id)} activities`)
      )
    )
  )
);
