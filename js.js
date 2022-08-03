window.onload = function () {
    var bot = ["piedra", "papel", "tijera"]
    var divs = document.querySelectorAll('div')
    divs.forEach((e, i) => {
        e.className = i == 0 ? "piedra" : i == 1 ? "papel" : "tijera";
        e.addEventListener('click', function (i) {
            let selection = bot[Math.floor(Math.random() * bot.length)]
            document.getElementById("choose").innerText = "El ha elegido :" + selection

            document.getElementById("state").innerText = "Has ganado"
            if (e.className == selection) { document.getElementById("state").innerText = "Empate - Vuelve a tirar" }
            else if (e.className == "piedra" && selection == "papel") { document.getElementById("state").innerText = "Has perdido - Vuelve a tirar" }
            else if (e.className == "tijera" && selection == "piedra") { document.getElementById("state").innerText = "Has perdido - Vuelve a tirar" }
            else if (e.className == "papel" && selection == "tijera") { document.getElementById("state").innerText = "Has perdido - Vuelve a tirar" }
        });
    })
}