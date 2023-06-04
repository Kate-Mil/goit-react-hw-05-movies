import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import {
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchFormWrapper,
} from './SearchForm.styled';

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
    <SearchFormWrapper onSubmit={handleSubmit} ref={formRef}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>

      <SearchFormInput
        class="input"
        type="text"
        autocomplete="off"
        name="query"
        autofocus
        placeholder="Search movies"
      />
    </SearchFormWrapper>
  );
};

export default SearchForm;
