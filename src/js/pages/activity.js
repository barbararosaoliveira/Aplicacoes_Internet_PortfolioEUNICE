import { h, $ } from '../utils/dom.js';
import { getActivity, getCompetency } from '../utils/data.js';

const id = new URLSearchParams(location.search).get('id');
const activity = id && getActivity(id);
const root = $('#activity-detail');

if (!activity) {
  root.replaceChildren(h('p', {}, 'Activity not found. ', h('a', { href: '/activities.html' }, 'Back to activities')));
} else {
  document.title = `${activity.title} · EUNICE Portfolio`;

  root.replaceChildren(
    h(
      'div',
      { class: 'detail' },
      h('img', {
        class: 'detail__media',
        src: activity.image,
        alt: '',
        onerror: (e) => e.target.removeAttribute('src'),
      }),
      h(
        'div',
        { class: 'detail__body' },
        h('div', { class: 'tags' }, activity.themes.map((t) => h('span', { class: 'tag tag--theme' }, t))),
        h('h1', { class: 'detail__title' }, activity.title),
        activity.coordinator && h('p', { class: 'detail__meta' }, `Coordinated by ${activity.coordinator}`),
        h('p', {}, `${activity.dateLabel} · ${activity.mode}`),
        h(
          'div',
          { class: 'tags' },
          activity.competencies.map((cid) => h('span', { class: 'tag' }, getCompetency(cid)?.name ?? cid))
        ),
        h('p', { class: 'detail__summary' }, activity.summary),
        activity.details && h('p', { class: 'detail__text' }, activity.details)
      )
    )
  );

  $('#activity-gallery').replaceChildren(
    ...activity.gallery.map((src) => h('img', { src, alt: '', loading: 'lazy' }))
  );
}
