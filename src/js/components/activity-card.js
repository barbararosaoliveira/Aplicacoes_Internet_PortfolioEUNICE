import { h } from '../utils/dom.js';

export function activityCard(activity, competencyName) {
  return h(
    'a',
    { class: 'card', href: `/activity.html?id=${encodeURIComponent(activity.id)}` },
    h('img', {
      class: 'card__media',
      src: activity.image,
      alt: '',
      loading: 'lazy',
      onerror: (e) => e.target.removeAttribute('src'), // imagem ainda não adicionada
    }),
    h('h2', { class: 'card__title' }, activity.title),
    h('p', { class: 'card__meta' }, `${activity.dateLabel} · ${activity.mode}`),
    h('div', { class: 'tags' }, activity.themes.map((t) => h('span', { class: 'tag tag--theme' }, t))),
    h('p', { class: 'card__summary' }, activity.summary),
    h('div', { class: 'tags' }, activity.competencies.map((id) => h('span', { class: 'tag' }, competencyName(id))))
  );
}
