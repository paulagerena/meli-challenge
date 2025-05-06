import React, { FC, JSX, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router';
import SearchService from '../../services/Search.service.tsx';
import Logo from '../../assets/logo.svg';
import './SearchBar.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import {
  updateLoading,
  updateResults,
  updateLatestSearchTerm,
  updateBreadcrumbItems,
  clearSearchState
} from '../../redux/features/searchSlice.ts';

const SearchBar: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { keywords } = useParams();

  const latestSearchTerm = useAppSelector((state) => state.search.latestSearchTerm);

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const getSearchResults = useCallback(async (searchTerm: string) => {
    dispatch(updateLoading(true));

    try {
      const response = await SearchService.searchByKeywords(searchTerm);

      dispatch(updateResults(response.items));
      dispatch(updateBreadcrumbItems(response.category_path));
      dispatch(updateLatestSearchTerm(searchTerm));
      // Navigate to the search results page
      navigate(`/resultados/${searchTerm}`);
    } catch (error) {
      dispatch(updateResults([]));
      dispatch(updateLatestSearchTerm(null));
      navigate(`/resultados/error`);
      console.error('Error fetching data', error);
    } finally {
      dispatch(updateLoading(false));
    }
  }, []);

  const handleSearch = async (
    event: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Check if the search term is empty
    if (searchTerm.trim() === '') {
      return;
    }

    if (searchTerm) {
      dispatch(updateLoading(true));

      const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, '+');

      // Fetch search results
      await getSearchResults(formattedSearchTerm);
    }
  };

  useEffect(() => {
    if (keywords && keywords !== latestSearchTerm) {
      const formattedKeywords = keywords.replace(/\+/g, ' ');
      setSearchTerm(formattedKeywords);

      // Fetch search results based on the keywords in the URL
      getSearchResults(formattedKeywords);
    }
  }, [keywords]);

  return (
    <section className="search-bar">
      <div className="search-bar__content">
        <Link className="search-bar__logo" to="/" onClick={() => dispatch(clearSearchState())}>
          <Logo />
        </Link>
        <form onSubmit={handleSearch} className="search-bar__form">
          <input
            type="text"
            name="search"
            value={searchTerm}
            placeholder="Nunca dejes de buscar..."
            onChange={handleInputChange}
            className="search-bar__input"
          />
          <button type="submit" className="search-bar__submit" onClick={handleSearch}>
            {' '}
            <i className="material-icons">search</i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
