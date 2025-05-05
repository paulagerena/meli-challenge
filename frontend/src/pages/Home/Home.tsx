import { FC, JSX } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.scss';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../redux/hooks';
import { Outlet } from 'react-router';

const Home: FC = (): JSX.Element => {
  const loading = useAppSelector((state) => state.search.loading);

  return (
    <section className="home">
      {loading && <Loader />}
      <header>
        <SearchBar />
      </header>
      <main className="home__content">
        <Outlet />
      </main>
    </section>
  );
};

export default Home;
