import { FC, JSX, useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Item } from '../../models/Search.model';
import './Home.scss';
import ResultsList from '../../components/Results/ResultsList/ResultsList';
import Loader from '../../components/Loader/Loader';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const Home: FC = (): JSX.Element => {
  const [results, setResults] = useState<Item[]>();
  const [showLoader, setShowLoader] = useState(false);

  const [id, setId] = useState<string>('7');

  return (
    <section className="home">
      {showLoader && <Loader />}
      <header>
        <SearchBar
          onSearchSuccess={(data) => setResults(data)}
          onLoading={(loading) => setShowLoader(loading)}
        />
      </header>
      <main className="home__content">
        {results && !showLoader && !id && <ResultsList results={results} />}

        {id && !results && <ItemDetail id={id} />}

        {!showLoader && !id && !results && (
          <section className="home__welcome">
            <h1>Bienvenido a Mercado Libre</h1>
            <p>Explorá nuestros productos y encontrá lo que necesitás.</p>
          </section>
        )}
      </main>
    </section>
  );
};

export default Home;
