import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './MovieSearchForm.module.scss';

export default function MovieSearchForm({ onSubmitForm }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmitForm(query);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <input
        className={styles.input}
        type="text"
        autoComplete="off"
        placeholder="Search Movies"
        value={query}
        autoFocus
        onChange={handleQueryChange}
      />
      <Button type="submit" title="Search" />
    </form>
  );
}

MovieSearchForm.propType = {
  onSubmitForm: PropTypes.func.isRequired,
};
