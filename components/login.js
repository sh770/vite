export function login() {
    document.querySelector('#login').innerHTML = `   
  
    <header id="nav"></header>
        <div class="container ">
            <div id="form" class="container login-form">
                <h1>אימות</h1>
                <form>
                    <label for="name">שם</label>
                    <input type="text" name="name" id="username" placeholder="שם">
                    <label for="password">סיסמה</label>
                    <input type="password" name="password" id="password" placeholder="סיסמה">
                </form>
                <button id="button" onclick="checknull()">אמת</button>

                <h2><label id="lbl"></label></h2>
                <h3><label id="lbl2"></label></h3>
                <label id="lbl3"></label>
            </div>
        </div>
`
}
