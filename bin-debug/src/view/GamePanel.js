var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        _super.call(this);
    }
    // 初始化面板
    GamePanel.prototype.initPanel = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = this.asserts.getTexture("bg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.startBtn = new egret.Bitmap();
        this.startBtn.texture = this.asserts.getTexture("playBtn");
        this.startBtn.x = this.w / 2 - this.startBtn.width / 2;
        this.startBtn.y = this.h / 2 - this.startBtn.height / 2;
        this.addChild(this.startBtn);
        this.startBtn.touchEnabled = true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartBtnTouchTap, this);
    };
    GamePanel.prototype.onStartBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openGameOverPanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeGamePanelNotify, null, false);
    };
    return GamePanel;
})(BasePanel);
