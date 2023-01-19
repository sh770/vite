import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './components/counter.js'
import { setupNavBar } from './components/NavBar.js'
import { login } from './components/login.js'
import { toggleDarkMode } from './components/DarkMode.js'

document.querySelector('#app').innerHTML = `  
  <div>
    <header id="nav"></header>
  
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button><br>
      <button id="DarkMode" type="button">כהה</button><br>
      <button id="login" type="button">לוגאין</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
setupNavBar(document.querySelector('#nav'))
document.querySelector('.DarkMode').addEventListener("click",()=>{
  toggleDarkMode()
})
document.querySelector('#DarkMode').addEventListener("click",()=>{
  toggleDarkMode()
})
document.querySelector('#login').addEventListener("click",()=>{
  login()
})
