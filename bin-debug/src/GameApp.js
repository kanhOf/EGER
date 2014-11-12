var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        _super.call(this);
        this.stageW = 0;
        this.stageH = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    GameApp.prototype.onAddToStage = function (event) {
        this.stage.addChild(GameConfig.gameScene());
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        PopUpManager.addPopUp(this.loadingView);
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    GameApp.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     */
    GameApp.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            PopUpManager.removePopUp(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    };
    /**
     * preload资源组加载进度
     */
    GameApp.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建游戏场景
     */
    GameApp.prototype.createGameScene = function () {
        if (GameConfig.isDebug) {
            egret.Profiler.getInstance().run();
        }
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        PanelManager.initPanel();
        Global.dispatchEvent(MainNotify.openStartPanelNotify, null, false);
        // this.startPanel = new StartPanel();
        // this.addChild(this.startPanel);
        // this.gamePanel = new GamePanel(this.stageW,this.stageH);
        // this.addChild(this.gamePanel);
        // this.gamePanel.visible = false;
        // this.gameOverPanel = new GameOverPanel(this.stageW,this.stageH);
        // this.addChild(this.gameOverPanel);
        // this.gameOverPanel.visible = false;
        // this.sharePanel = new SharePanel(this.stageW,this.stageH);
        // this.addChild(this.sharePanel);
        // this.sharePanel.visible = false;
        // this.notice = new Notice(this.stageW,this.stageH);
        // this.addChild(this.notice);
        // this.notice.visible = true;
        // this.startPanel.addEventListener("onStartBtnEvent" , this.onStartBtn ,this);
        // this.gamePanel.addEventListener("gameOver" , this.gameOver ,this);
        // this.gameOverPanel.addEventListener("retryBtn" , this.retryBtn2 ,this);
        // this.gameOverPanel.addEventListener("shareBtn" , this.shareBtn ,this);
        // this.notice.addEventListener("readOver" , this.readOver ,this);
        // Global.shareToWeiXin("战斗吧！女神之姓名大作战",document.title,"http://wx.9ria.com/games/nvshen/","http://wx.9ria.com/public/images/nvShenIcon.png");
        // lcp.LListener.getInstance().addEventListener(MainNotify.onDeviceOrientation,this.test,this);
    };
    return GameApp;
})(egret.DisplayObjectContainer);
