var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var fish;

function preload() {
    this.load.image("mar", "assets/mar.png");
    this.load.image("logo", "assets/logo.png");
    this.load.image("laranja", "assets/imagens/laranja.png");
    this.load.image("concha", "assets/imagens/concha.png")
}

function create() {
    this.add.image(400, 300, "mar");
    this.add.image(400, 525, "logo").setScale(0.5);
    fish = this.add.image(400, 300, "laranja")
    fish.setOrigin(0.5, 0.5).setFlip(true, false);
    this.add.image(400, 300, "concha")
}

function update() {
    fish.x = this.input.x;
    fish.y = this.input.y;
}