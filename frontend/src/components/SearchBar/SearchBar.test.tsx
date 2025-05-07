import { render, screen, fireEvent, RenderResult } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchBar from './SearchBar';
import { BrowserRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import SearchService from '../../services/Search.service';
import { SearchResponse } from '../../models/Search.model';

const searchWithKeywodsSpy = vi.spyOn(SearchService, 'searchByKeywords');

const getRender = (): RenderResult => {
  return render(
    <Provider store={store}>
      <Router>
        <SearchBar />
      </Router>
    </Provider>
  );
};

describe('SearchBar', () => {
  it('should render', () => {
    getRender();

    // Check if the component is rendered
    const searchBar = screen.getByTestId('search-bar');
    expect(searchBar).toBeInTheDocument();
  });

  it('should show Meli logo', () => {
    getRender();

    // Check if the logo is rendered
    const logo = screen.getByTestId('meli-logo');
    expect(logo).toBeInTheDocument();
  });

  it('should show the search input', () => {
    getRender();

    // Check if the search input is rendered
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    const placeholder = searchInput.getAttribute('placeholder');
    expect(placeholder).toBe('Nunca dejes de buscar...');
  });

  it('should call the search function when the search button is clicked', async () => {
    searchWithKeywodsSpy.mockResolvedValue({
      items: [],
      category_path: [],
      total_count: 0
    } as SearchResponse);

    await SearchService.searchByKeywords('ipod');

    getRender();

    // Check if the search input is rendered
    const searchInput = screen.getByTestId('search-input');

    // User inputs a search term
    fireEvent.change(searchInput, { target: { value: 'ipod' } });
    expect(searchInput).toHaveValue('ipod');

    // User submits the form
    const searchButton = screen.getByTestId('search-submit');
    fireEvent.click(searchButton);

    // Check if the search function was called
    expect(searchWithKeywodsSpy).toHaveBeenCalledWith('ipod');
    expect(searchWithKeywodsSpy).toHaveResolvedWith({
      items: [],
      category_path: [],
      total_count: 0
    });
  });
});
