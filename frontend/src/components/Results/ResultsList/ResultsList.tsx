import { FC, JSX } from "react";
import ResultsItem from "../ResultsItem/ResultsItem";
import { Item } from "../../../models/Search.model";
import "./ResultsList.scss";

interface ResultsListProps {
  results: Item[];
}

const ResultsList: FC<ResultsListProps> = ({ results }): JSX.Element => {
  return (
    <div>
      {results.length > 0 ? (
        <ul className="results-list">
          {results.map((item, index) => (
            <ResultsItem
              key={`${index}-${item.id}`}
              id={item.id}
              title={item.title}
              price={item.price}
              currency={item.currency}
              imageSrc={item.image}
              city={item.location.city} />
          ))}
        </ul>
      ) : (
        <span className="results-list__empty">No hay resultados que coincidan con tu búsqueda</span>
      )}
    </div >
  );
}

export default ResultsList;
