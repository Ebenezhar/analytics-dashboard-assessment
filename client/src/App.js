import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Provider } from 'react-redux';
import Home from './Pages/Home';
import NavLayout from './components/Nav/NavLayout';
import Charts from './Pages/Charts';
import Analaysis from './Pages/Analaysis';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes >
          <Route element={<NavLayout />}>

            <Route path='/' element={<Home />} />
            <Route path='/charts' element={<Charts />} />
            <Route path='/analaysis' element={<Analaysis />} />
            
          </Route>
        </Routes>
      </Provider>

    </BrowserRouter>
  );
}

export default App;
