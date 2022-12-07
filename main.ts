function setdicepatterns () {
    list = [
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `),
    images.createImage(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `),
    images.createImage(`
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . .
        `),
    images.createImage(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `),
    images.createImage(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `),
    images.createImage(`
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        `)
    ]
}
input.onGesture(Gesture.Shake, function () {
    rolldice()
})
function rolldice () {
    list[randint(0, 5)].showImage(0)
}
let list: Image[] = []
setdicepatterns()
rolldice()
