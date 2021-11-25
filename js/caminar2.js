//La variable game sirve para una instancia del juego

var game = new Phaser.Game(554, 290, Phaser.AUTO, ' ', {preload: preload, create: create, update: update});

var player;

//El juego se divide en 3 fases: precarga, crear y cargar.
//Con preload cargamos la memoria de los elementos que se van a utilizar
function preload(){
    game.load.spritesheet('heroe', 'sprites/personaje2.png', 77, 77);
    game.load.image('bosque', 'fondos/fondo2.png');
};

//La funcion create nos permite colocar los objetos en el escenario
function create(){
    //Agregar imagen de fondo
    game.add.sprite(0, 0, 'bosque');

    //Colocar el heroe en el escenario
    player = game.add.sprite(game.width / 2, 190, 'heroe');

    //Las animacion
    player.animations.add('der', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
    player.animations.add('izq', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
    player.animations.add('arr', [24, 25, 26, 27, 28, 29, 30,31], 10, true);
    player.animations.add('aba', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);

    //Asignar las teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    arriba = game.input.keyboard.addKey(Phaser.Keyboard.W);
    abajo = game.input.keyboard.addKey(Phaser.Keyboard.S);

};


//la funcion update permite actualizar las animaciones con velocidad que elegimos
function update (){
    if (derecha.isDown){
        player.x += 1;
        player.animations.play('der');
    }
    else if (izquierda.isDown){
        player.x -=1;
        player.animations.play('izq');
    }
    else if (arriba.isDown){
        player.y -=1;
        player.animations.play('arr');
    }
    else if (abajo.isDown){
        player.y +=1;
        player.animations.play('aba');
    }
    else {
        player.animations.stop();
        player.frame = 128;
    }
};