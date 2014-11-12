  /**
    * 面板弹出管理类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 面板弹出的管理类
    */
module PopUpManager {

	export var darkSprite:egret.Sprite = new egret.Sprite();

	// 添加面板方法
	export function addPopUp(panel, dark:boolean = false, popUpWidth:number = 0,popUpHeight:number = 0):void{ 
		if(GameConfig.gameScene().uiLayer.contains(panel)){//判断是否包含panel
			return;
		}

		if(dark){
	        this.darkSprite.graphics.clear();
	        this.darkSprite.graphics.beginFill(0x000000, 0.3);
	        this.darkSprite.graphics.drawRect(0, 0, GameConfig.curWidth(), GameConfig.curHeight());
	        this.darkSprite.graphics.endFill();
	        this.darkSprite.width = GameConfig.curWidth();
	        this.darkSprite.height = GameConfig.curHeight();
	        if(!GameConfig.gameScene().uiLayer.contains(this.darkSprite)){
				GameConfig.gameScene().uiLayer.addChild( this.darkSprite );
	        }
	        this.darkSprite.touchEnabled = true;
		}

		GameConfig.gameScene().uiLayer.addChild(panel);
		if(popUpWidth != 0){
			panel.x = GameConfig.curWidth()/2 - popUpWidth/2;
			panel.y = GameConfig.curHeight()/2 - popUpHeight/2;
		}
	} 

	// 添加面板方法
	export function removePopUp(panel):void{ 
		if(GameConfig.gameScene().uiLayer.contains(panel)){//判断是否包含panel
			GameConfig.gameScene().uiLayer.removeChild(panel);
		}

        this.darkSprite.graphics.clear();
	} 

}


