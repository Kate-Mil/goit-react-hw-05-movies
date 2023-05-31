import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const formRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();

    if (!query) {
      return;
    }
    setSearchParams({ query });
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} class="form">
      <button type="submit" class="button">
        <span class="button-label">Search</span>
      </button>

      <input
        class="input"
        type="text"
        autocomplete="off"
        name="query"
        autofocus
        placeholder="Search movies"
      />
    </form>
  );
};

export default SearchForm;
