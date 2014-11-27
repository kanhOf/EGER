var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var StartPanel = (function (_super) {
    __extends(StartPanel, _super);
    function StartPanel() {
        _super.call(this);
    }
    // 初始化面板
    StartPanel.prototype.initPanel = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("bg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.logoImg = new egret.Bitmap();
        this.logoImg.texture = this.assets.getTexture("logoImg");
        this.logoImg.anchorX = 0.5;
        this.logoImg.anchorY = 1;
        this.logoImg.x = this.w / 2;
        this.logoImg.y = 60 + this.logoImg.height;
        this.addChild(this.logoImg);
        this.logoImg.visible = false;
        this.startBtn = new ImgButton("startBtn", this.onStartBtnTouchTap);
        this.startBtn.x = this.w / 2 - this.startBtn.width / 2;
        this.startBtn.y = this.h / 2 - this.startBtn.height / 2;
        this.addChild(this.startBtn);
        this.startBtn.visible = false;
        this.helpBtn = new ImgButton("helpBtn", null, "", 30, 1);
        this.helpBtn.x = 20;
        this.helpBtn.y = this.h - this.helpBtn.height - 20;
        this.addChild(this.helpBtn);
        this.helpBtn.visible = false;
        this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelpTouchTap, this);
        this.shopBtn = new ImgButton("shopBtn", null, "", 30, 2);
        this.shopBtn.x = 150;
        this.shopBtn.y = this.h - this.shopBtn.height - 20;
        this.addChild(this.shopBtn);
        this.shopBtn.visible = false;
        this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopTouchTap, this);
        this.fbBtn = new ImgButton("fbBtn", null, "", 30, 3);
        this.fbBtn.x = 270;
        this.fbBtn.y = this.h - this.fbBtn.height - 20;
        this.addChild(this.fbBtn);
        this.fbBtn.visible = false;
        this.fbBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFbTouchTap, this);
        // okButton.label = RES.getRes("ui_text.ok");
        this.setBtn = new ImgButton("setBtn", null, RES.getRes("ui_text.ok"), 30, 1);
        this.setBtn.x = this.w - this.setBtn.width - 20;
        this.setBtn.y = this.h - this.setBtn.height - 20;
        this.addChild(this.setBtn);
        this.setBtn.visible = false;
        this.setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetTouchTap, this);
        // TipsManager.addTips(this.setBtn,"有tips喽！",2);
        // TipsManager.addTips(this.startBtn,"开始按钮tips！",1);
        // TipsManager.addTips(this.helpBtn,"帮助按钮tips！",3);
        this.initEffect();
    };
    StartPanel.prototype.initEffect = function () {
        this.logoImg.y = -350;
        this.startBtn.alpha = 0;
        this.helpBtn.y = this.h + 150;
        this.shopBtn.y = this.h + 150;
        this.fbBtn.y = this.h + 150;
        this.setBtn.y = this.h + 150;
        var onComplete = function () {
            egret.Tween.get(this.startBtn).to({ alpha: 1 }, 300);
            egret.Tween.get(this.setBtn).to({ y: this.h - this.setBtn.height - 20 }, 300, egret.Ease.backOut);
            egret.Tween.get(this.fbBtn).to({ y: this.h - this.fbBtn.height - 20 }, 300, egret.Ease.backOut);
            egret.Tween.get(this.shopBtn).to({ y: this.h - this.shopBtn.height - 20 }, 300, egret.Ease.backOut);
            egret.Tween.get(this.helpBtn).to({ y: this.h - this.helpBtn.height - 20 }, 300, egret.Ease.backOut);
        };
        this.logoImg.visible = true;
        this.startBtn.visible = true;
        this.helpBtn.visible = true;
        this.shopBtn.visible = true;
        this.fbBtn.visible = true;
        this.setBtn.visible = true;
        egret.Tween.get(this.logoImg).to({ y: 60 + this.logoImg.height }, 600, egret.Ease.backOut).call(onComplete, this);
    };
    StartPanel.prototype.onStartBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openGamePanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    StartPanel.prototype.onHelpTouchTap = function (e) {
        EffectUtils.rotationEffect(this.helpBtn, 1000);
        EffectUtils.flyObj(this.logoImg, 1000, 30);
    };
    StartPanel.prototype.onShopTouchTap = function (e) {
        EffectUtils.removeRotationEffect(this.helpBtn);
        EffectUtils.rockObj(this.logoImg, 1000, 20);
    };
    StartPanel.prototype.onFbTouchTap = function (e) {
        EffectUtils.blinkEffect(this.helpBtn, 1000);
    };
    StartPanel.prototype.onSetTouchTap = function (e) {
        EffectUtils.shakeObj(this.fbBtn);
    };
    return StartPanel;
})(BasePanel);
