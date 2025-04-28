import { FC, JSX, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home: FC = (): JSX.Element => {
  const [results, setResults] = useState<unknown[]>([]);

  return (
    <div>
      <header>
        <SearchBar onSearchSuccess={data => setResults(data)} />
      </header>
      <main>
        {results.length > 0 ?
          <div>
            <h1>Resultados de búsqueda</h1>
            <ul>
              {results.map((result, index) => (
                <li key={index}>{JSON.stringify(result)}</li>
              ))}
            </ul>
          </div> : <section>
            <h1>Bienvenido a la tienda</h1>
            <p>Explorá nuestros productos y encontrá lo que necesitás.</p>
          </section>}
      </main>
    </div>
  );
}

export default Home;
