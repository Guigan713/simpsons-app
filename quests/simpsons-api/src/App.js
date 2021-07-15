import QuoteCard from './components/QuoteCard';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
const [quoteCard, setQuoteCard] = useState(null);


const randomSimpson = () => {
  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then ((res) => res.data)
    .then ((data) => {
      setQuoteCard(data[0]);
    });
}

  return (
    <div className="App">
      <h1>Random Simpson Quote</h1>
      <button type="button" onClick = {randomSimpson}>Random Simpson Character</button>
      {quoteCard && <QuoteCard {...quoteCard}/>}

    </div>
  );
}

export default App;
