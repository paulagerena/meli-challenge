import React, { FC, JSX, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchService from "../../services/Search.service.tsx";
import Logo from '../../assets/logo.svg';
import "./SearchBar.scss";
import { Item } from "../../models/Search.model.tsx";

interface SearchBarProps {
  onSearchSuccess: (data: Item[]) => void;
  onLoading: (loading: boolean) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearchSuccess, onLoading }): JSX.Element => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if the search term is empty
    if (searchTerm.trim() === "") {
      return;
    }

    if (searchTerm) {
      onLoading(true);

      const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+")

      // Call the search service
      try {
        const response = await SearchService.searchByKeywords(searchTerm);

        if (!response) {
          console.error("No data found");
          return;
        }

        onSearchSuccess(response.items);

        // Navigate to the search results page
        navigate(`/productos/${formattedSearchTerm}`, { replace: true });
      } catch (error) {
        onSearchSuccess([]);
        console.error("Error fetching data", error);
      } finally {
        onLoading(false)
      }
    }
  }

  return (
    <section className="search-bar">
      <div className="search-bar__content">
        <div className="search-bar__logo" >
          <Logo />
        </div>
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
            <i className="material-icons">search</i>
          </button>
        </form>
      </div>
    </section >
  );
}

export default SearchBar;
