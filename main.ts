let szam = 0
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    szam = randint(0, 2)
    if (szam == 0) {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        `)
    } else if (szam == 1) {
        basic.showLeds(`
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        `)
    } else {
        basic.showLeds(`
            # . . # .
                        # . # . .
                        # # . . .
                        # . # . .
                        # . . # .
        `)
    }
    
})
