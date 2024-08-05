import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  const [Numara, setCount] = useState(0);


  const increase = () => {
    setCount(Numara + 1);
  }
  const N = () => {
    if (Numara > 0) {
      setCount(Numara - 1);
    }
  }


  return (
    <div class="click" >

      <div><button class="a" onClick={increase}>Artır +</button></div>
      <div class="count">{Numara}</div>
      <div><button class="b" onClick={N}>Azalt -</button></div>

    </div>
  );
}

export default App;
