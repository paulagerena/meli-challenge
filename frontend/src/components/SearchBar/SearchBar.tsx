import React, { FC, JSX, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import "./SearchBar.scss";

interface SearchBarProps {
  onSearchSuccess: (data: unknown[]) => void;
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
        /* const response = await SearchService.searchByKeyword(searchTerm);

        if (!response) {
          console.error("No data found");
          return;
        } */

        const mockResponse = [
          { id: 1, name: "Producto 1", price: 100, city: "Buenos Aires" },
          { id: 2, name: "Producto 2", price: 200, city: "Rosario" },
          { id: 3, name: "Producto 3", price: 300, city: "La Plata" },
        ];

        onSearchSuccess(mockResponse);
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
