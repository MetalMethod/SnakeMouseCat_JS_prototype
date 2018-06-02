// IMPORTS
import 'phaser';

// GLOBAL VARIABLES
const GAME_WIDTH = 678;
const GAME_HEIGHT = 596;
const PLAYER_SIZE = 24;

var cursors;

var mouse;
var mouseSpeed = 250;

//Phaser Config
var config = {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);

//preload all assets and assign object names
function preload() {
    
    this.load.image('splashScreen', 'assets/img/splash.png');
    this.load.image('gameBg', 'assets/img/bg.png');

    this.load.image('mouseUp', 'assets/img/mouseUp.png');
    this.load.image('mouseRight', 'assets/img/mouseRight.png');
    this.load.image('mouseDown', 'assets/img/mouseDown.png');
    this.load.image('mouseLeft', 'assets/img/mouseLeft.png');
    
    this.load.spritesheet('mouse', 'assets/img/mouseRight.png', { frameWidth: 32, frameHeight: 48 });
    
}



// CREATE FUNCTION PREvIOUS CODE

// ADD TO SCENE

//ANIMATIONS

function create() {
    // this.tweens.add({
    //         targets: splashScreen,
    //         y: -450,
    //         duration: 3000,
    //         ease: 'Power2',
    //         //yoyo: true,
    //         //loop: -1
    //     });
        
        //var splashScreen = this.add.image(GAME_WIDTH/2, GAME_HEIGHT/2, 'splashScreen');
        
    var gameBg = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, 'gameBg');

    // Create player
    mouse = this.physics.add.sprite(250, 250, "mouse");
    
    mouse.setCollideWorldBounds(true);
    // Create animations for player
    this.anims.create({
        key: "mouseLeft",
        // frames: this.anims.generateFrameNumbers("mouseLeft", { start: 0, end: 0 }),
        repeat: -1
    });
    this.anims.create({
        key: "mouseDown",
        //frames: this.anims.generateFrameNumbers("mouse", { start: 0, end: 0 }),
        //repeat: -1
    });
    this.anims.create({
        key: "mouseRight",
        //frames: this.anims.generateFrameNumbers("mouse", { start: 0, end: 0 })
    });
    this.anims.create({
        key: "mouseUp",
        //frames: this.anims.generateFrameNumbers("mouse", { start: 0, end: 0 })
    });

    // Player should collide with edges of the screen

    // Keyboard input
    cursors = this.input.keyboard.createCursorKeys();








}

function update() {
    // else
    // {
    //     player.setVelocityX(0);

    //     player.anims.play('turn');
    // }

    // if (cursors.up.isDown && player.body.touching.down)
    // {
    //     player.setVelocityY(-330);
    // }

    
    
    //keyboard input
    updateMouse();
}

function updateMouse(){
    if (cursors.left.isDown) {
        mouse.setVelocityX(-mouseSpeed);
        mouse.setVelocityY(0);
        
        //mouse.anims.play('mouseLeft', true);
    }
    else if (cursors.right.isDown) {
        mouse.setVelocityX(mouseSpeed);
        mouse.setVelocityY(0);
        //mosue.anims.play('mouseRight', true);
    }

    else if (cursors.up.isDown) {
        mouse.setVelocityY(-mouseSpeed);
        mouse.setVelocityX(0);

        //mouse.anims.play('mouseUp', true);
    }
    else if (cursors.down.isDown) {
        mouse.setVelocityY(mouseSpeed);
        mouse.setVelocityX(0);

        //mouse.anims.play('mouseDown', true);
    }
}