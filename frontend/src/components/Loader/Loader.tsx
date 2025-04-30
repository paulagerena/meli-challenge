import { FC, JSX } from 'react';
import './Loader.scss';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ isLoading }): JSX.Element => {
  if (!isLoading) {
    return <></>;
  }

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
