const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./hulk2.png");
ASSET_MANAGER.queueDownload("./chicken_2.png");



ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Hulk(gameEngine));
	gameEngine.addEntity(new Chicken(gameEngine));


	gameEngine.init(ctx);

	gameEngine.start();
});
