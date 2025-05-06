import { FC, JSX } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.scss';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../redux/hooks';
import { Outlet } from 'react-router';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const Home: FC = (): JSX.Element => {
  const loading = useAppSelector((state) => state.search.loading);
  const results = useAppSelector((state) => state.search.results);

  return (
    <section className="home">
      {loading && <Loader />}
      <header>
        <SearchBar />
      </header>
      <main className="home__content">
        {results && results.length > 0 && <Breadcrumbs />}
        <Outlet />
      </main>
    </section>
  );
};

export default Home;
