
function checkConnection() {
    if (window.location.href == "https://zeus.ionis-it.com/login") {
        document.querySelector("body > zeus-root > div > mat-sidenav-container > mat-sidenav-content > zeus-login > div > button").click()
    }
}

addEventListener("focus", checkConnection);
setInterval(checkConnection, 1000);