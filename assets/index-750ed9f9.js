(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s="/assets/javascript-8dac5379.svg";function c(n){let a=0;const o=r=>{a=r,n.innerHTML=`count is ${a}`};n.addEventListener("click",()=>o(a+1)),o(0)}function i(){document.body.style.display="none"}function d(n){n.innerHTML=`
<header>
<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid ">
         <a class="nav-item btn btn-primary me-2 active nav-link" href="" >פרויקט ונילה</a> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse nav justify-content-center" id="navbarNav">
            <ul class="navbar-nav dropdown-center">
                <li class="nav-item btn btn-success me-2"> <a class="nav-link btn btn-link"
                        href="https://sh770.github.io/calc/">מחשבון</a> </li>
                <li class="nav-item btn btn-primary me-2"> <a class="nav-link" href="">פרויקט לדוגמה</a> </li>
                <li class="nav-item btn btn-info me-2"> <a class="nav-link" href="">פרויקט לדוגמה</a> </li>
                <li class="nav-item btn btn-dark me-2"> <a class="nav-link DarkMode">מצב כהה</a></li>
                <li class="nav-item btn btn-warning me-2"> <a class="nav-link"
                        href="https://sh770.github.io/progex/p19/">משחק O X</a> </li>
                <li class="nav-item btn btn-danger me-2"> <a class="nav-link" onclick="logout()">התנתק</a> </li>
                <li class="nav-item btn btn-secondary me-2"> <a class="nav-link" onclick="login()">התחבר</a> </li>
            </ul>
        </div>
    </div>
</nav>
</header>

`}document.querySelector("#app").innerHTML=`
  
  <div>
  <nav id="nav"></nav>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${s}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="DarkMode" type="button">כהה</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;c(document.querySelector("#counter"));d(document.querySelector("#nav"));document.querySelector(".DarkMode").addEventListener("click",()=>{i()});document.querySelector("#DarkMode").addEventListener("click",()=>{i()});
