import { FC, JSX } from 'react';
import './Loader.scss';

const Loader: FC = (): JSX.Element => {
  return (
    <div>
      <div className="loader-overlay">
        <div className="loader-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
