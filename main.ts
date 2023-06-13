input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Faenger.turn(Direction.Left, 90)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Faenger.turn(Direction.Right, 90)
})
let Faenger: game.LedSprite = null
Faenger = game.createSprite(2, 2)
let Ziel = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (game.score() < 5) {
        Faenger.ifOnEdgeBounce()
        Faenger.move(1)
        basic.pause(500 + (game.score() + 1))
        if (Faenger.isTouching(Ziel)) {
            game.addScore(1)
            Ziel.delete()
            Ziel = game.createSprite(randint(0, 4), randint(0, 4))
        }
    } else {
        game.gameOver()
    }
})
