import { useState } from 'react';
import { competencies, THEMES } from '../js/utils/data.js';

const initial = { name: '', email: '', title: '', theme: '', competencies: [], description: '' };

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) errors.email = 'Please enter a valid email.';
  if (!v.title.trim()) errors.title = 'Please give the activity a title.';
  if (!v.theme) errors.theme = 'Choose a theme.';
  if (v.description.trim().length < 20) errors.description = 'Write at least 20 characters.';
  return errors;
}

export default function SuggestActivityForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const toggleCompetency = (id) =>
    setValues((v) => ({
      ...v,
      competencies: v.competencies.includes(id)
        ? v.competencies.filter((c) => c !== id)
        : [...v.competencies, id],
    }));

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    // TODO: ligar ao backend / serviço de formulários (ex.: Formspree, Netlify Forms)
    console.log('Submission', values);
    setSent(true);
  }

  if (sent) {
    return (
      <p className="form__success" role="status">
        Thank you! Your suggestion was received.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" type="text" value={values.name} onChange={set('name')} />
        {errors.name && <span className="field__error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={values.email} onChange={set('email')} />
        {errors.email && <span className="field__error">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="title">Activity title</label>
        <input id="title" type="text" value={values.title} onChange={set('title')} />
        {errors.title && <span className="field__error">{errors.title}</span>}
      </div>

      <div className="field">
        <label htmlFor="theme">Theme</label>
        <select id="theme" value={values.theme} onChange={set('theme')}>
          <option value="">Select…</option>
          {THEMES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {errors.theme && <span className="field__error">{errors.theme}</span>}
      </div>

      <div className="field">
        <fieldset>
          <legend>Competencies</legend>
          <div className="chips">
            {competencies.map((c) => (
              <button
                key={c.id}
                type="button"
                className="chip"
                aria-pressed={values.competencies.includes(c.id)}
                onClick={() => toggleCompetency(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="5" value={values.description} onChange={set('description')} />
        {errors.description && <span className="field__error">{errors.description}</span>}
      </div>

      <button className="btn btn--dark" type="submit">
        Send suggestion
      </button>
    </form>
  );
}
