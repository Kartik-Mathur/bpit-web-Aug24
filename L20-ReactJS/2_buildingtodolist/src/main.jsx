import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import TodoList from './components/TodoList.jsx'
import TodoListA from './components/TodoListA.jsx'
import TodoListB from './components/TodoListB.jsx'
import TodoListC from './components/TodoListC.jsx'
import TodoListRemoveItem from './components/TodoListRemoveItem.jsx'



createRoot(document.getElementById('root')).render(
    <TodoListRemoveItem />
)
