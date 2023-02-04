var canvas = document.getElementById('canvas')
var container = canvas.getContext("2d")

container.fillStyle = "#8b8b8b"
var jogador1 = container.fillRect(80, 260, 30, 200)
var jogador2 = container.fillRect(1200, 260, 30, 200)
var bolinha = container.fillRect(1280/2 - 15 , 720/2 - 15,30,30)
