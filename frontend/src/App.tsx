import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router';
import { store } from './redux/store';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import { JSX } from 'react';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Results from './components/Results/ResultsList/ResultsList';
import Welcome from './components/Welcome/Welcome';

export const AppWrapper = (): JSX.Element => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
          <Route path="resultados/error" element={<Results />} />
          <Route path="resultados/:keywords" element={<Results />} />
          <Route path="resultados/productos/:id" element={<ItemDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppWrapper;
