import activities from '../../data/activities.json';
import competencies from '../../data/competencies.json';

export const THEMES = [
  'Sports & Health',
  'Social Impact & Volunteering',
  'Culture & Arts',
  'European Values & Inclusion',
];

export { activities, competencies };

export const getCompetency = (id) => competencies.find((c) => c.id === id);
export const getActivity = (id) => activities.find((a) => a.id === id);
export const countActivities = (competencyId) =>
  activities.filter((a) => a.competencies.includes(competencyId)).length;

export const years = () => [...new Set(activities.map((a) => a.year))].sort();
