class Hulk {

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./hulk2.png"), 0, 0, 132, 133, 5, 0.3);
    
        this.x = -100;
        this.y = 0;
        this.speed = 180;
    };
    
    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) {
            this.x = -100; 
            this.y += 25;
        };
    };
    
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y,1.5);
    };
};