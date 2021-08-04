import { useState } from 'react';

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
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search Movies"
        value={query}
        autoFocus
        onChange={handleQueryChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
