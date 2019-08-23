import React from "react";
import { Route } from 'react-router-dom';

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

import WelcomePage from './components/WelcomePage';
import LocationsList from './components/LocationsList';
import CharacterList from "./components/CharacterList.js";
import EpisodeList from './components/EpisodeList';


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationsList} />
      <Route path="/episode" component={EpisodeList} />
    </main>
  );
}
