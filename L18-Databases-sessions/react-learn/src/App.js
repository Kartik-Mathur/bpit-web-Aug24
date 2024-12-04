import { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
// npx create-react-app .

function App() {
  const name = "Kislay Kumar Yadav";
  const timeStatus = 'Morning';

  // const [count, setCount] = useState(initialValue);
  const [count, setCount] = useState(0);
  // count: Immutable, we cannot do count++ or count = count+1
  /*
    let cnt = 0;
  
    function increaseCounter() {
      cnt++;
      console.log(cnt);
    }
  */
  function increaseCounter() {
    setCount(count + 1); // count variable ko update krne ke liye we use setCount
    // we cannot do count++ or count = count+1
  }

  function decreaseCounter() {
    setCount(count - 1); // count variable ko update krne ke liye we use setCount
    // we cannot do count++ or count = count+1
  }
  return (
    <div className="App">
      Good {timeStatus == 'Morning' ? "Morning" : "Evening"} {name}

      {timeStatus == 'Morning' && <div>Good Morning {name}</div>}
      {timeStatus !== 'Morning' && <div>Good Evening {name}</div>}

      <MovieList />

      {/* <div>
      <button onClick={decreaseCounter}>Decrease Counter</button>
        Counter: {count}
        <button onClick={increaseCounter}>Increase Counter</button>
      </div> */}

      <button onClick={()=> setCount(count-1)}>Decrease Counter</button>
      Counter: {count}
      <button onClick={()=> setCount(count+1)}>Increase Counter</button>

    </div>
  );
}

export default App;
