
class GameApp extends egret.DisplayObjectContainer{
    /**
     * 加载进度界面
     */
    private loadingView:LoadingUI;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event){
        this.stage.addChild(GameConfig.gameScene());
        //设置加载进度界面
        this.loadingView  = new LoadingUI();
        PopUpManager.addPopUp(this.loadingView);

        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.loadConfig("resource/resource.json","resource/");
    }
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete(event:RES.ResourceEvent):void{
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
        RES.loadGroup("preload");
    }
    /**
     * preload资源组加载完成
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if(event.groupName=="preload"){
            PopUpManager.removePopUp(this.loadingView);

            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
            this.createGameScene();
        }
    }
    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if(event.groupName=="preload"){
            this.loadingView.setProgress(event.itemsLoaded,event.itemsTotal);
        }
    }

    private startPanel:StartPanel;
    private gamePanel:GamePanel;
    private gameOverPanel:GameOverPanel;
    private sharePanel:SharePanel;
    private notice:Notice;
    private stageW:number = 0;
    private stageH:number = 0;
    /**
     * 创建游戏场景
     */
    private createGameScene():void{

        if(GameConfig.isDebug){
            egret.Profiler.getInstance().run();
        }

        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;

        PanelManager.initPanel();
        Global.dispatchEvent(MainNotify.openStartPanelNotify,null,false);

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


    }

    // private SHAKE_THRESHOLD = 3000;
    // private last_update = 0;
    // private temp_x = 0;
    // private temp_y = 0;
    // private temp_z = 0;
    // private last_x = 0;
    // private last_y = 0;
    // private last_z = 0;
    // public deviceMotionHandler(eventData):void{
    //     var acceleration = eventData.accelerationIncludingGravity;
    //     var curTime = new Date().getTime();
    //     if ((curTime - this.last_update) > 100) {
    //         var diffTime = curTime - this.last_update;
    //         this.last_update = curTime;
    //         this.temp_x = acceleration.x;
    //         this.temp_y = acceleration.y;
    //         this.temp_z = acceleration.z;
    //         var speed = Math.abs(this.temp_x + this.temp_y + this.temp_z - this.last_x - this.last_y - this.last_z) / diffTime * 10000;

    //         if (speed > this.SHAKE_THRESHOLD) {
    //             // alert("摇动了");
    //             lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent(MainNotify.onDeviceMotion,eventData,false));
    //         }
    //         this.last_x = this.temp_x;
    //         this.last_y = this.temp_y;
    //         this.last_z = this.temp_z;
    //     }
    // }

    // private test(e):void{
    //     var angleX:number = e.param.beta;
    //     var angleY:number = e.param.gamma;
    //     var angleZ:number = e.param.alpha;
    //     document.title = "度数：" + angleX +angleY +angleZ ;
    // }
    // private readOver():void{
    //     if(this.contains(this.notice)){
    //         this.removeChild(this.notice);
    //     }
    // }
    // private onStartBtn():void{
    //     GlobalData.myName = this.startPanel.myName.text;
    //     GlobalData.fightName = this.startPanel.fightName.text;
    //     if(this.contains(this.startPanel)){
    //         this.removeChild(this.startPanel);
    //         this.startPanel = null;
    //     }
    
    //     this.gamePanel.visible = true;
    //     this.gamePanel.onRetry();

    // }

    // private gameOver():void{
    //     this.gamePanel.visible = false;
    //     this.gameOverPanel.updateData();
    //     this.gameOverPanel.visible = true;

    //     var name = "";
    //     if(GlobalData.isBoss){
    //         name = GlobalData.bossName;
    //     }else{
    //         name = GlobalData.fightName;
    //     }

    //     if(GlobalData.winerNum == 1){
    //         document.title = "我战斗吧！女神中，用"+GlobalData.myAttackNum+"招成功击败"+name+"，不服来战!";
    //     }else{
    //         document.title = "我被"+name+"在"+GlobalData.aiAttackNum+"招之内击败，兄弟姐妹们，帮我报仇啊!";
    //     }
    //     Global.shareToWeiXin("战斗吧！女神之姓名大作战",document.title,"http://wx.9ria.com/games/nvshen/","http://wx.9ria.com/public/images/nvShenIcon.png");

    //     this.updateGameOverPanel();
    // }
    // private retryBtn():void{
    //     this.gamePanel.visible = true;
    //     this.gameOverPanel.visible = false;
    //     this.gamePanel.onRetry();
    // }
    // private retryBtn2():void{
    //     this.gameOverPanel.visible = false;
    //     this.startPanel = new StartPanel(this.stageW,this.stageH);
    //     this.addChild(this.startPanel);
    //     this.startPanel.addEventListener("onStartBtnEvent" , this.onStartBtn ,this);
    //     this.startPanel.myName.text = GlobalData.myName;
    //     this.startPanel.fightName.text = GlobalData.fightName;
    // }

    // private shareBtn():void{
    //     this.sharePanel.visible = true;
    //     this.sharePanel.show();
    // }
    // private updateGameOverPanel():void{
    //     this.gameOverPanel.setCuScore(this.gamePanel.getScore());
    //     var maxScore:number = <any>Global.getCookie("WuXiaMaxScore");
    //     if((maxScore == null)||(maxScore < this.gamePanel.getScore())){
    //         this.gameOverPanel.setBestCuScore(this.gamePanel.getScore());
    //         Global.setCookie("WuXiaMaxScore",""+this.gamePanel.getScore());
    //     }else{
    //         this.gameOverPanel.setBestCuScore(maxScore);
    //     }
    // }

    // private confirmBack():void {
    //     window.open("http://mp.weixin.qq.com/s?__biz=MzA3Njc3ODEzMw==&mid=200906381&idx=1&sn=55881e356e89cbb24160869b82b9f1b5#rd",'_self') 
    // }  

}


