controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Nave_Epica, 0, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemigos.destroy(effects.spray, 200)
    info.changeScoreBy(1)
})
let enemigos: Sprite = null
let projectile: Sprite = null
let Nave_Epica: Sprite = null
Nave_Epica = sprites.create(assets.image`Nave`, SpriteKind.Player)
Nave_Epica.setStayInScreen(true)
info.setLife(3)
info.setScore(0)
controller.moveSprite(Nave_Epica)
forever(function () {
    if (info.score() == 100) {
        game.over(true)
    }
})
game.onUpdateInterval(500, function () {
    enemigos = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 2 5 2 5 . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . 5 . 5 2 2 2 5 . 5 . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemigos.setVelocity(0, 25)
    enemigos.setPosition(randint(0, 120), 0)
})
