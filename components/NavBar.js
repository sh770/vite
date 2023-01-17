export function setupNavBar(element){
element.innerHTML = `
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
                <li class="nav-item btn btn-dark me-2"> <a class="nav-link" id="darkmode">מצב כהה</a></li>
                <li class="nav-item btn btn-warning me-2"> <a class="nav-link"
                        href="https://sh770.github.io/progex/p19/">משחק O X</a> </li>
                <li class="nav-item btn btn-danger me-2"> <a class="nav-link" onclick="logout()">התנתק</a> </li>
                <li class="nav-item btn btn-secondary me-2"> <a class="nav-link" onclick="login()">התחבר</a> </li>
            </ul>
        </div>
    </div>
</nav>
</header>

`
}