import React, { FC, JSX, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchService from "../../services/Search.service.tsx";
import Logo from '../../assets/logo.svg';
import "./SearchBar.scss";
import { Item } from "../../models/Search.model.tsx";

interface SearchBarProps {
  onSearchSuccess: (data: Item[]) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearchSuccess }): JSX.Element => {
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
      const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+")

      // Call the search service
      try {
        const response = await SearchService.searchByKeywords(searchTerm);

        console.log("SearchBar received response:", response);

        if (!response) {
          console.error("No data found");
          return;
        }

        onSearchSuccess(response.items);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }

      // Navigate to the search results page
      navigate(`/productos/${formattedSearchTerm}`, { replace: true });
    }
  }

  return (
    <section className="search-bar">
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
    </section >
  );
}

export default SearchBar;
