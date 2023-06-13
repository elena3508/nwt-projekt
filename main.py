def on_button_a():
    Faenger.turn(Direction.LEFT, 45)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    Faenger.turn(Direction.RIGHT, 45)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Faenger: game.LedSprite = None
Faenger = game.create_sprite(2, 2)
Ziel = game.create_sprite(randint(0, 4), randint(0, 4))

def on_forever():
    if game.score() < 5:
        pass
basic.forever(on_forever)
