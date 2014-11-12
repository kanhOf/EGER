
class PGRender extends egret.Sprite{

    private imgs:egret.SpriteSheet = RES.getRes("asserts");
    private w:number = 0;
    private h:number = 0;
    private isRight:boolean = false;
    public constructor(stageW,stageH,isRight){
        super();
        this.w = stageW;
        this.h = stageH;
        this.isRight = isRight;
        this.createView();
    }
    private pgBG:egret.Bitmap = new egret.Bitmap();
    private greenPG:egret.Bitmap = new egret.Bitmap();
    private contentTF = new egret.TextField();
    public createView():void {
        this.pgBG.texture = this.imgs.getTexture("pgBG");
        this.addChild(this.pgBG);   

        this.greenPG.texture = this.imgs.getTexture("greenPG");
        if(this.isRight){
            this.greenPG.anchorX = 1;
            this.greenPG.x = 2 + 194;
        }else{
            this.greenPG.anchorX = 0;
            this.greenPG.x = 2;
        }
        
        this.greenPG.y = 2;
        this.addChild(this.greenPG);  

        this.contentTF.size = 10;
        this.contentTF.width = 163;
        this.contentTF.x = 194/2 - 163/2;
        // this.contentTF.y = ;
        // this.contentTF.textColor = 0xffdd00;
        this.contentTF.strokeColor = 0x000000;
        this.contentTF.stroke  = 1;
        this.contentTF.bold = false;
        this.contentTF.text = "1055/269999";
        this.contentTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild( this.contentTF );  
    }

    private playEffect():void{
        this.contentTF.textColor = 0xff0505;
        egret.setTimeout(function () {              
            this.contentTF.textColor = 0xFFFFFF;             
        }, this, 200); 
        egret.setTimeout(function () {              
            this.contentTF.textColor = 0xff0505;
        }, this, 400); 
        egret.setTimeout(function () {              
            this.contentTF.textColor = 0xFFFFFF;
        }, this, 600); 
    }

    private maxWidth:number = 194;
    public setHP(init,curNum,maxNum):void{
        if(!init){
            this.playEffect();
        }
        var rate = Math.floor((curNum/maxNum)*10);
        if(rate <= 3){
            this.greenPG.texture = this.imgs.getTexture("redPG");
        }else{
            this.greenPG.texture = this.imgs.getTexture("greenPG");
        }
        this.greenPG.width = this.maxWidth*(curNum/maxNum);
        this.contentTF.text = ""+curNum+"/"+maxNum+"";
    }


    // public onSelectBtnTouchTap(e:egret.TouchEvent):void{
    //     this.checkNo.visible = !this.checkNo.visible;
    //     this.checkSect.visible = !this.checkSect.visible;
    //     this.dispatchEvent(new egret.Event("onSelectBtnEvent")); 
    // }

    // public onAdLinkBtnTouchTap(e:egret.TouchEvent):void{
    //     window.open("http://www.baidu.com",'_self'); 
    // }
}
