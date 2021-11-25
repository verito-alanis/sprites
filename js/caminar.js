var game = new Phaser.Game(600, 346, Phaser.AUTO, ' ', {preload: preload, create: create, update: update});

var player;

function preload(){
    game.load.spritesheet('heroe', 'sprites/personaje3.png', 32, 32);
    game.load.image('bosque', 'fondos/fondo1.jpg');
};

function create(){
    //Agregar imagen de fondo
    game.add.sprite(0, 0, 'bosque');

    //Colocar el heroe en el escenario
    player = game.add.sprite(game.width / 2, 255, 'heroe');

    //Las animacion
    player.animations.add('der', [6, 7,8], 10, true);
    player.animations.add('izq', [3, 4, 5 ], 10, true);

    //Asignar las teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);

};

function update (){
    if (derecha.isDown){
        player.x += 1;
        player.animations.play('der');
    }
    else if (izquierda.isDown){
        player.x -=1;
        player.animations.play('izq');
    }
    else {
        player.animations.stop();
        player.frame = 1;
    }
};