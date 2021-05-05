import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Game from './components/Game'

ReactDOM.render(<Game />, document.getElementById('root'));




const App = () => {
    return(
        <div>
        <Game />
        </div>
    )   
}

export default App