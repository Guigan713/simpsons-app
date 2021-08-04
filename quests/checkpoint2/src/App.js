import { Switch, Route } from 'react-router-dom';

import Header from './components/Header'
import GameDetails from "./components/GameDetails"
import GameList from './components/GameList';

import "tailwindcss/tailwind.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name={"Gameplay Heroes"}/>
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/:id" component={GameDetails} />
      </Switch>
    </div>
  );
}

export default App;
