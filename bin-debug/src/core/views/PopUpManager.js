/**
  * 面板弹出管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 面板弹出的管理类
  */
var PopUpManager;
(function (PopUpManager) {
    PopUpManager.darkSprite = new egret.Sprite();
    // 添加面板方法
    function addPopUp(panel, dark, popUpWidth, popUpHeight) {
        if (dark === void 0) { dark = false; }
        if (popUpWidth === void 0) { popUpWidth = 0; }
        if (popUpHeight === void 0) { popUpHeight = 0; }
        if (GameConfig.gameScene().uiLayer.contains(panel)) {
            return;
        }
        if (dark) {
            this.darkSprite.graphics.clear();
            this.darkSprite.graphics.beginFill(0x000000, 0.3);
            this.darkSprite.graphics.drawRect(0, 0, GameConfig.curWidth(), GameConfig.curHeight());
            this.darkSprite.graphics.endFill();
            this.darkSprite.width = GameConfig.curWidth();
            this.darkSprite.height = GameConfig.curHeight();
            if (!GameConfig.gameScene().uiLayer.contains(this.darkSprite)) {
                GameConfig.gameScene().uiLayer.addChild(this.darkSprite);
            }
            this.darkSprite.touchEnabled = true;
        }
        GameConfig.gameScene().uiLayer.addChild(panel);
        if (popUpWidth != 0) {
            panel.x = GameConfig.curWidth() / 2 - popUpWidth / 2;
            panel.y = GameConfig.curHeight() / 2 - popUpHeight / 2;
        }
    }
    PopUpManager.addPopUp = addPopUp;
    // 添加面板方法
    function removePopUp(panel) {
        if (GameConfig.gameScene().uiLayer.contains(panel)) {
            GameConfig.gameScene().uiLayer.removeChild(panel);
        }
        this.darkSprite.graphics.clear();
    }
    PopUpManager.removePopUp = removePopUp;
})(PopUpManager || (PopUpManager = {}));
