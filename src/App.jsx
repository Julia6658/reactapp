import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import './App.css';
import Cards from './componets/Cards/Cards'
import Hero from './componets/Hero/Hero';
import Tarif from './componets/Tarif/Tarif';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';
import NotFound from './componets/NotFound/NotFound';
import Main from './componets/Main/Main';
import heroes from './data/heroes.json';
import tarifs from './data/tarifs.json';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Header/>
            <Routes>
              <Route exact path="/reactapp/game" element={<Cards indexCard={0}/>} />
              <Route exact path="/reactapp" element={<Main />} />
              <Route path="*" element={<NotFound />} />
           </Routes>
            <Footer/>

        <div className="heroes_wrap">
          <h2>Задание с героями</h2>
          {
            heroes.map((hero, index) => 
              <Hero key={index} info={hero.info} friends={hero.friends} superpowers={hero.superpowers} url={hero.url} name={hero.name} universe={hero.universe} alterego={hero.alterego} occupation={hero.occupation} ></Hero>
            )
          }
        </div>
        <div id="tarifs-wrap">
          <h2>Задание c тарифами</h2>
          {
            tarifs.map((tarif, index) => 
              <Tarif key={index} color={tarif.color} plan={tarif.plan} price={tarif.price} speed={tarif.speed} isSelected={tarif.isSelected}></Tarif>
              )
          }
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
