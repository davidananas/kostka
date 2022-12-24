function pokyn () {
    cislo = randint(0, 5)
    rolldice()
    if (cislo == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (cislo == 1) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (cislo == 2) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (cislo == 3) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (cislo == 4) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (cislo == 5) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
}
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
    pokyn()
})
function rolldice () {
    list[cislo].showImage(0)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pokyn()
})
let list: Image[] = []
let cislo = 0
cislo = randint(0, 5)
setdicepatterns()
rolldice()
