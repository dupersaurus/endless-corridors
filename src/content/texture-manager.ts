import {GameManager} from "../states/game-manager";

export class TextureManager {

	constructor(private _game: GameManager) {

	}

	getTexture(name:string): PIXI.RenderTexture {
		switch (name) {
			case "nurse":
				return this.drawNurse();

			case "nurse-foot":
				return this.drawNurseFoot();

			case "grandpa":
				return this.drawGrandpa();

			case "grandpa-foot":
				return this.drawGrandpaFoot();

			case "dummy-world":
				return this.drawDummyItemWorld();

			case "dummy-inv":
				return this.drawDummyItemInv();
			
			default:
				return null;
		}
	}

	private drawGrandpa(): PIXI.RenderTexture {
		var graphics = this._game.add.graphics(0, 0, this._game.world);

		// shadow
		graphics.beginFill(0x000000, 0.4);
		graphics.drawRect(-30, 3, 60, 12);
		graphics.endFill();

		// Body
		graphics.beginFill(0x6b8e23);
		graphics.drawRect(-30, -40, 60, 40);
		graphics.drawRect(-35, -30, 5, 10);
		graphics.endFill();

		// head
		graphics.beginFill(0xfbdcbd);
		graphics.drawRect(-25, -50, 40, 30);
		graphics.drawRect(-40, -30, 5, 10);
		graphics.endFill();

		// hair
		graphics.beginFill(0xd7d7d7);
		graphics.drawRect(10, -45, 15, 10);
		graphics.endFill();

		// face
		// ...eyes
		graphics.beginFill(0xffffff);
		graphics.drawRect(-20, -35, 10, 5);
		graphics.drawRect(-5, -35, 10, 5);
		graphics.endFill();

		graphics.beginFill(0x87ceeb);
		graphics.drawRect(-20, -35, 5, 5);
		graphics.drawRect(-5, -35, 5, 5);
		graphics.endFill();

		// ...mouth
		graphics.beginFill(0x8a6643, 0.5);
		graphics.drawRect(-20, -25, 25, 2);
		graphics.drawRect(-20, -23, 2, 2);
		graphics.drawRect(3, -23, 2, 2);
		graphics.endFill();

		// cane
		graphics.beginFill(0xa16e2c);
		graphics.drawRect(-40, -25, 5, 35);
		graphics.endFill();

		var texture = graphics.generateTexture();

		this._game.world.remove(graphics, true);

		return texture;
	}

	private drawGrandpaFoot(): PIXI.RenderTexture {
		var graphics = this._game.add.graphics(0, 0, this._game.world);

		graphics.beginFill(0x303030);
		graphics.drawRect(5, 0, 10, 5);
		graphics.drawRect(0, 5, 15, 5);
		graphics.endFill();

		var texture = graphics.generateTexture();
		this._game.world.remove(graphics, true);
		return texture;
	}

	private drawNurse(): PIXI.RenderTexture {
		var graphics = this._game.add.graphics(0, 0, this._game.world);

		// shadow
		graphics.beginFill(0x000000, 0.4);
		graphics.drawRect(-5, 115, 50, 12);
		graphics.endFill();

		// Body
		graphics.beginFill(0xffb7c5);
		graphics.drawRect(0, 0, 40, 100);
		graphics.endFill();

		// hair
		graphics.beginFill(0x622419);
		graphics.drawRect(0, -35, 35, 10);
		graphics.endFill();

		// head
		graphics.beginFill(0xfbdcbd);
		graphics.drawRect(0, -30, 30, 40);
		graphics.endFill();

		graphics.beginFill(0x622419);
		graphics.drawRect(25, -35, 10, 30);
		graphics.endFill();

		// ...eyes
		graphics.beginFill(0xffffff);
		graphics.drawRect(5, -15, 7, 5);
		graphics.drawRect(15, -15, 7, 5);
		graphics.endFill();

		graphics.beginFill(0x87ceeb);
		graphics.drawRect(5, -15, 4, 5);
		graphics.drawRect(15, -15, 4, 5);
		graphics.endFill();

		var texture = graphics.generateTexture();
		this._game.world.remove(graphics, true);

		return texture;
	}

	private drawNurseFoot(): PIXI.RenderTexture {
		var graphics = this._game.add.graphics(0, 0, this._game.world);

		graphics.beginFill(0x303030);
		graphics.drawRect(5, 0, 10, 18);
		graphics.drawRect(0, 18, 15, 5);
		graphics.endFill();

		var texture = graphics.generateTexture();
		this._game.world.remove(graphics, true);
		return texture;
	}

	private drawDummyItemWorld(): PIXI.RenderTexture {
		var graphics = this._game.add.graphics(0, 0, this._game.world);

		graphics.beginFill(0xa700a7);
		graphics.drawRect(0, 0, 40, 40);
		graphics.endFill();

		var texture = graphics.generateTexture();
		this._game.world.remove(graphics, true);
		return texture;
	}

	private drawDummyItemInv(): PIXI.RenderTexture {
		var graphics = this._game.add.graphics(0, 0, this._game.world);

		graphics.beginFill(0xa700a7);
		graphics.drawRect(0, 0, 20, 20);
		graphics.endFill();

		var texture = graphics.generateTexture();
		this._game.world.remove(graphics, true);
		return texture;
	}
}