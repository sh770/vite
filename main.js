import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { setupNavBar } from './components/NavBar.js'

document.querySelector('#app').innerHTML = `
  
  <div>
  <nav id="nav"></nav>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
setupNavBar(document.querySelector('#nav'))

