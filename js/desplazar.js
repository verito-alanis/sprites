//La variable game sirve para una instancia del juego

var game = new Phaser.Game(554, 290, Phaser.AUTO, ' ', {preload: preload, create: create, update: update});

var player;

//El juego se divide en 3 fases: precarga, crear y cargar.
//Con preload cargamos la memoria de los elementos que se van a utilizar
function preload(){
    game.load.spritesheet('heroe', 'sprites/personaje4.png', 32, 32);
    game.load.image('bosque', 'fondos/fondo2.png');
};

//La funcion create nos permite colocar los objetos en el escenario
function create(){
    //Agregar imagen de fondo que se desplaza
    fondo = game.add.tileSprite(0, 0, 554, 290, 'bosque');

    //Colocar el heroe en el escenario
    player = game.add.sprite(game.width / 2, 235, 'heroe');

    //Las animacion
    player.animations.add('der', [6, 7,8], 10, true);
    player.animations.add('izq', [3, 4, 5 ], 10, true);


    //Asignar las teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);

};


//la funcion update permite actualizar las animaciones con velocidad que elegimos
function update (){
    if (derecha.isDown){
        fondo.tilePosition.x -= 1;
        player.animations.play('der');
    }
    else if (izquierda.isDown){
        fondo.tilePosition.x += 1;
        player.animations.play('izq');
    }
    else {
        player.animations.stop();
        player.frame = 128;
    }
};