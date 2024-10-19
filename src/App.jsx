import invertedLogo from './assets/main_logo.svg'
import logo from './assets/baseLogo.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://www.instagram.com/ciphersoft.tech" target="_blank">
          <img src={logo} className="logo__cipher" alt="Cipher logo" style={{ width: '200px', height: 'auto' }} />
        </a>
      </div>
      <h1>Coming Soon...</h1>
    </>
  )
}

export default App
