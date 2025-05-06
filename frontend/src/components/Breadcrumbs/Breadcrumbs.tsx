import { FC, JSX } from 'react';
import { useAppSelector } from '../../redux/hooks';
import './Breadcrumbs.scss';
import { Link } from 'react-router';

const Breadcrumbs: FC = (): JSX.Element => {
  const items = useAppSelector((state) => state.search.breadcrumbItems);

  return (
    <nav className="breadcrumbs">
      {items &&
        items.length > 0 &&
        items.map((item, index) => (
          <>
            <Link key={index} to={`${item.link}`} className="breadcrumbs__item">
              {item.name}
            </Link>
            {index < items.length - 1 && (
              <i className="material-icons breadcrumbs__separator">chevron_right</i>
            )}
          </>
        ))}
    </nav>
  );
};

export default Breadcrumbs;
