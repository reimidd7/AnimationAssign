class Chicken {

    constructor(game) {
        this.game = game;

        this.animator = new Animator(ASSET_MANAGER.getAsset("./chicken_2.png"), 0, 0, 98, 88, 2, 0.2);
    
        this.x = 205;
        this.y = 75;
        
        this.speed = 150;
    };
    
    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) {
            this.x = 90; 
            this.y += 25;
        };
    };
    
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    };
};