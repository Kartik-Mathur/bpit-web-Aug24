import React from 'react'
import Todos from './components/Todos'
import CreateTodo from './components/CreateTodo'

const App = () => {
  return (
    <div>
      <CreateTodo />
      <Todos />
    </div>
  )
}

export default App
