
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
        this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHelpTouchTap,this); 

        this.shopBtn = new ImgButton("shopBtn",null,"",30,2);
        this.shopBtn.x = 150;
        this.shopBtn.y = this.h - this.shopBtn.height - 20;
        this.addChild(this.shopBtn);   
        this.shopBtn.visible = false;
        this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShopTouchTap,this); 

        this.fbBtn = new ImgButton("fbBtn",null,"",30,3);
        this.fbBtn.x = 270;
        this.fbBtn.y = this.h - this.fbBtn.height - 20;
        this.addChild(this.fbBtn);   
        this.fbBtn.visible = false;
        this.fbBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onFbTouchTap,this); 

        this.setBtn = new ImgButton("setBtn",null,"设置",30,1);
        this.setBtn.x = this.w - this.setBtn.width - 20;
        this.setBtn.y = this.h - this.setBtn.height - 20;
        this.addChild(this.setBtn);   
        this.setBtn.visible = false;
        this.setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSetTouchTap,this); 

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

    public onHelpTouchTap(e:egret.TouchEvent):void{
        EffectUtils.rotationEffect(this.helpBtn,1000);
    }

    public onShopTouchTap(e:egret.TouchEvent):void{
        EffectUtils.removeRotationEffect(this.helpBtn);
    }

    public onFbTouchTap(e:egret.TouchEvent):void{
        EffectUtils.blinkEffect(this.helpBtn,1000);
    }

    public onSetTouchTap(e:egret.TouchEvent):void{
        EffectUtils.shakeObj(this.fbBtn);
    }

}

