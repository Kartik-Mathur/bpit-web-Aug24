import React from 'react'
// import useMyState from './hooks/useMyState'
import useMyState from './hooks/useMyStateAdvanced';

const App = () => {
  // useMyState is a customhook
  const [cnt, setCnt] = useMyState(0);
  // const reduceCnt = () => {
  //   setCnt(cnt - 1);
  // }

  // const updateCnt = () => {
  //   setCnt(cnt + 1);
  // }
  return (
    <div>
      <button onClick={() => setCnt(cnt - 1)}>-</button>
      {cnt}
      <button onClick={() => setCnt(cnt + 1)}>+</button>
    </div>
  )
}

export default App
