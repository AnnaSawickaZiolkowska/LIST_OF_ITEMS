import logo from '../../assets/DeSmart-logo-black-500px.png'

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <p>Please select multiple items:</p>
      </header>
      <div>
        {/* render list here */}
      </div>
    </div>
  )
}

export default App
