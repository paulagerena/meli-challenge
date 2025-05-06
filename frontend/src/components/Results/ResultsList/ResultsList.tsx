import { FC, JSX } from 'react';
import ResultsItem from '../ResultsItem/ResultsItem';
import './ResultsList.scss';
import { useAppSelector } from '../../../redux/hooks';

const ResultsList: FC = (): JSX.Element => {
  const loading = useAppSelector((state) => state.search.loading);
  const items = useAppSelector((state) => state.search.results);

  return (
    <>
      {items && items?.length > 0 ? (
        <ul className="results-list">
          {items.map((item, index) => (
            <ResultsItem
              key={`${index}-${item.id}`}
              id={item.id}
              title={item.title}
              price={item.price}
              currency={item.currency}
              imageSrc={item.image}
              city={item.location.city}
            />
          ))}
        </ul>
      ) : (
        items &&
        items?.length === 0 &&
        !loading && (
          <span className="results-list__empty">
            No hay resultados que coincidan con tu búsqueda
          </span>
        )
      )}
    </>
  );
};

export default ResultsList;
