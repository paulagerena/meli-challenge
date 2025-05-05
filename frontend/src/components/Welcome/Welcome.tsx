import { FC, JSX } from 'react';
import './Welcome.scss';

const Welcome: FC = (): JSX.Element => {
  return (
    <section className="welcome">
      <h1>Bienvenido a Mercado Libre</h1>
      <p>Explorá nuestros productos y encontrá lo que necesitás.</p>
    </section>
  );
};

export default Welcome;
