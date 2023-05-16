import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/componentes item/ContainterCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/componentes item/DetailsItem';
import { createContext, useState } from 'react';
import ProviderContextoListCart from './components/componentes item/ProviderContextoListCart';


function App() {

  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
          </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
    
    
  );
}

export default App;