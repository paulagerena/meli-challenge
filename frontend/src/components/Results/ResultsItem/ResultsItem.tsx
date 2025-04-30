import { JSX, FC } from 'react';
import './ResultsItem.scss';
import { Currency } from '../../../models/Search.model';
import NumberUtils from '../../../utils/numberUtils';

interface ResultsItemProps {
  id: string;
  title: string;
  price: number;
  currency: Currency;
  imageSrc: string;
  city: string;
}

const ResultsItem: FC<ResultsItemProps> = ({
  id,
  title,
  price,
  currency,
  imageSrc,
  city
}): JSX.Element => {
  return (
    <li className="results-item" onClick={() => console.log(id)}>
      <img src={imageSrc} alt={title} />
      <div className="results-item__info">
        <span className="results-item__price">{NumberUtils.getCurrency(price, currency)}</span>
        <h2 className="results-item__title">{title}</h2>
      </div>
      <div className="results-item__location">
        <span>{city}</span>
      </div>
    </li>
  );
};

export default ResultsItem;
