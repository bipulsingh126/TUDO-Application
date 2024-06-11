import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/Store'
import Todo from './Components/Todo'
function App() {

  return (
    <Provider store={store}>
     <Todo />
    </Provider>
  )
}

export default App
