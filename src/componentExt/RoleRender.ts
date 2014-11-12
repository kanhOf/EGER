
class RoleRender extends egret.Sprite{

    private imgs:egret.SpriteSheet = RES.getRes("asserts");
    private w:number = 0;
    private h:number = 0;
    private roleNum:number = 0;
    public constructor(stageW,stageH,roleNum){
        super();
        this.w = stageW;
        this.h = stageH;
        this.roleNum = roleNum;
        this.createView();
    }
    private role:egret.Bitmap = new egret.Bitmap();
    private roleName:egret.Bitmap = new egret.Bitmap();
    private checkNo:egret.Bitmap = new egret.Bitmap();
    private checkSect:egret.Bitmap = new egret.Bitmap();
    private kuang:egret.Bitmap = new egret.Bitmap();
    public createView():void {
        this.kuang.texture = this.imgs.getTexture("guangQuanImg");
        this.kuang.x = -12;
        this.kuang.y = -12;
        this.addChild(this.kuang);    
        this.kuang.visible = false;

        this.checkNo.texture = this.imgs.getTexture("kuang2");
        this.checkNo.x = -5;
        this.checkNo.y = -6;
        this.addChild(this.checkNo);   

        this.role.texture = this.imgs.getTexture("role"+this.roleNum);
        this.addChild(this.role);   

        this.roleName.texture = this.imgs.getTexture("roleName"+this.roleNum);
        this.roleName.y = 100;
        this.roleName.x = 85/2 - this.roleName.width/2;
        this.addChild(this.roleName);  

        this.checkSect.texture = this.imgs.getTexture("kuang2");
        this.checkSect.x = -5;
        this.checkSect.y = -6;
        this.addChild(this.checkSect);    
        // this.checkSect.visible = false;      

        this.role.touchEnabled = true;
        this.role.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectBtnTouchTap, this);
    }
    public setSelect(bool):void{
        // this.checkNo.visible = !bool;
        this.checkSect.visible = !bool;
        this.kuang.visible = bool;
    }


    public onSelectBtnTouchTap(e:egret.TouchEvent):void{
        // this.checkNo.visible = !this.checkNo.visible;
        this.kuang.visible = !this.kuang.visible;
        this.checkSect.visible = !this.checkSect.visible;
        this.dispatchEvent(new egret.Event("onSelectBtnEvent")); 
    }

    // public onAdLinkBtnTouchTap(e:egret.TouchEvent):void{
    //     window.open("http://www.baidu.com",'_self'); 
    // }
}
