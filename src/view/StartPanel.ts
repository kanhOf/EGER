
class StartPanel extends BasePanel{

    public constructor(){
        super();
    }

    private bg:egret.Bitmap;
    private logoImg:egret.Bitmap;
    private setBtn:ImgButton;
    private helpBtn:ImgButton;
    private shopBtn:ImgButton;
    private fbBtn:ImgButton;

    private startBtn:ImgButton;
    private htmlTF:HtmlText;
    // 初始化面板
    public initPanel():void{
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("bg");
        this.addChild(this.bg);   
        this.bg.touchEnabled = true;   

        this.logoImg = new egret.Bitmap();
        this.logoImg.texture = this.assets.getTexture("logoImg");
        this.logoImg.x = this.w/2 - this.logoImg.width/2;
        this.logoImg.y = 60;
        this.addChild(this.logoImg);   
        this.logoImg.visible = false;

        this.startBtn = new ImgButton("startBtn",this.onStartBtnTouchTap);
        this.startBtn.x = this.w/2 - this.startBtn.width/2;
        this.startBtn.y = this.h/2 - this.startBtn.height/2;        
        this.addChild(this.startBtn);
        this.startBtn.visible = false;

        this.helpBtn = new ImgButton("helpBtn",null,"",30,1);
        this.helpBtn.x = 20;
        this.helpBtn.y = this.h - this.helpBtn.height - 20;
        this.addChild(this.helpBtn);   
        this.helpBtn.visible = false;

        this.shopBtn = new ImgButton("shopBtn",null,"",30,2);
        this.shopBtn.x = 150;
        this.shopBtn.y = this.h - this.shopBtn.height - 20;
        this.addChild(this.shopBtn);   
        this.shopBtn.visible = false;

        this.fbBtn = new ImgButton("fbBtn",null,"",30,3);
        this.fbBtn.x = 270;
        this.fbBtn.y = this.h - this.fbBtn.height - 20;
        this.addChild(this.fbBtn);   
        this.fbBtn.visible = false;

        this.setBtn = new ImgButton("setBtn",null,"设置",30,1);
        this.setBtn.x = this.w - this.setBtn.width - 20;
        this.setBtn.y = this.h - this.setBtn.height - 20;
        this.addChild(this.setBtn);   
        this.setBtn.visible = false;

        // TipsManager.addTips(this.setBtn,"有tips喽！",2);
        // TipsManager.addTips(this.startBtn,"开始按钮tips！",1);
        // TipsManager.addTips(this.helpBtn,"帮助按钮tips！",3);

        this.initEffect();
    }

    private initEffect():void{
        this.logoImg.y = -350;
        this.startBtn.alpha = 0;
        this.helpBtn.y = this.h + 150;
        this.shopBtn.y = this.h + 150;
        this.fbBtn.y = this.h + 150;
        this.setBtn.y = this.h + 150;
        var onComplete:Function = function(){
            egret.Tween.get(this.startBtn).to({alpha:1},300);
            egret.Tween.get(this.setBtn).to({y: this.h - this.setBtn.height - 20},300,egret.Ease.backOut);
            egret.Tween.get(this.fbBtn).to({y: this.h - this.fbBtn.height - 20},300,egret.Ease.backOut);
            egret.Tween.get(this.shopBtn).to({y: this.h - this.shopBtn.height - 20},300,egret.Ease.backOut);
            egret.Tween.get(this.helpBtn).to({y: this.h - this.helpBtn.height - 20},300,egret.Ease.backOut);
        };
        this.logoImg.visible = true;
        this.startBtn.visible = true;
        this.helpBtn.visible = true;
        this.shopBtn.visible = true;
        this.fbBtn.visible = true;
        this.setBtn.visible = true;
        egret.Tween.get(this.logoImg).to({y:60},600,egret.Ease.backOut).call(onComplete,this);   
    }

    public onStartBtnTouchTap(e:egret.TouchEvent):void{
        Global.dispatchEvent(MainNotify.openGamePanelNotify,null,false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify,null,false);
    }

    public onSetTouchTap(e:egret.TouchEvent):void{
        // Global.alert("提示","我是一个提示，哈哈");
        // this.htmlTF.setData([["绿色",0x55ff00],["黑色",0x000000],["绿色",0x55ff00],["黑色",0x000000]],30,false,1,0xFFFFFF);
    }

    public onHelpTouchTap(e:egret.TouchEvent):void{
        // Global.confirm("提示","我是一个提示，哈哈");
        // Global.confirm("选择","我是一个提示，哈哈");
    }

}

