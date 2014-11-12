
class Role extends egret.Sprite{

	private imgs:egret.SpriteSheet = RES.getRes("asserts");
	private img:egret.Bitmap = new egret.Bitmap();
    public constructor(){
        super();
        this.createView();
    }
    private mc:egret.MovieClip;
    private deadImg:egret.Bitmap = new egret.Bitmap();
    private direction:string = "right";
    private createView():void {
        this.direction = "right";
        var data = RES.getRes("attack1_json");//获取动画文件的信息配置文件
        var texture = RES.getRes("attack1_png");//获取动画文件的图片
        this.mc = new egret.MovieClip(data, texture);//创建MovieClip
        this.addChild(this.mc);//添加到显示列表，显示影片剪辑
        this.mc.frameRate = 24;//设置动画的帧频
        this.mc.gotoAndStop(this.roleName);//跳转到指定帧并开始播放

        this.deadImg.texture = this.imgs.getTexture("dajiDead");
        // this.deadImg.x = 255;
        // this.deadImg.y = this.overBg.y + 250;
        this.addChild(this.deadImg); 
        this.deadImg.visible = false;

        this.mc.addEventListener("stop" , this.stopAction , this);
    }

    private roleName:string = "daji";
    public updateData(str):void {
        this.mc.removeEventListener("stop" , this.stopAction , this);
        this.removeChild(this.mc);
        this.mc.dispose();

        var tempIndex = 1;
        if((str == "baigu")||(str == "daji")||(str == "mozu")){
            tempIndex = 1;
        }else{
            tempIndex = 2;
        }
        this.roleName = str;

        var data = RES.getRes("attack"+tempIndex+"_json");//获取动画文件的信息配置文件
        var texture = RES.getRes("attack"+tempIndex+"_png");//获取动画文件的图片
        this.mc = new egret.MovieClip(data, texture);//创建MovieClip
        this.addChild(this.mc);//添加到显示列表，显示影片剪辑
        this.mc.frameRate = 24;//设置动画的帧频
        this.mc.gotoAndStop(this.roleName);//跳转到指定帧并开始播放        
        this.mc.addEventListener("stop" , this.stopAction , this);

        if(this.direction == "left"){
            this.mc.scaleX = -1;
        }else{
            this.mc.scaleX = 1;
        }

        this.deadImg.texture = this.imgs.getTexture(this.roleName+"Dead");
        this.deadImg.visible = false;
        this.mc.visible = true;
        if(this.direction == "left"){
            this.deadImg.scaleX = -1;
            this.deadImg.x = 0;
        }else{
            this.deadImg.scaleX = 1;
            this.deadImg.x = 0;
        }

        if(this.roleName == "renzu"){
            this.mc.y = 50;
            this.deadImg.y = 0;
        }else if(this.roleName == "mozu"){
            this.mc.y = 0;
            this.deadImg.y = -160;
        }else if(this.roleName == "xuanzang"){
            this.mc.y = 0;
            this.deadImg.y = -144;
        }else if(this.roleName == "baigu"){
            this.mc.y = 0;
            this.deadImg.y = -45;
        }else if(this.roleName == "daji"){
            this.mc.y = 24;
            this.deadImg.y = 0;
        }else if(this.roleName == "shenggongbao"){
            this.mc.y = 42;
            this.deadImg.y = 0;
        }else{
            this.mc.y = 0;
            this.deadImg.y = 0;
        }
    }
    public play():void {
        this.mc.gotoAndPlay(this.roleName);//跳转到指定帧并开始播放     
    }

    public getHeight():number {
        return this.mc.height; 
    }

    public dead():void {
        // this.mc.gotoAndPlay(this.roleName);//跳转到指定帧并开始播放   
        this.deadImg.visible = true;
        this.mc.visible = false;
    }

    public stopAction():void{
        this.mc.gotoAndStop(this.roleName);
         
    }
    private oldX:number = 0;
    public attack():void {
        this.oldX = this.mc.x;
        var tempLength = 220;
        if(this.roleName == "mozu"){
            tempLength = 120;
        }else{
            tempLength = 220;
        }
        if(this.direction == "right"){
            var onComplete1:Function = function(){
                this.play();
            };        

            egret.Tween.get(this.mc).to({x:this.mc.x + tempLength},300,egret.Ease.backIn).call(onComplete1,this);    

            egret.setTimeout(function () {
                egret.Tween.get(this.mc).to({x:this.oldX},500,egret.Ease.backOut);          
            }, this, 1200);    
            egret.setTimeout(function () {
                this.dispatchEvent(new egret.Event("attackToRight"));                 
            }, this, 800);  
        }else{
            var onComplete2:Function = function(){
                this.play();
            };        
            egret.Tween.get(this.mc).to({x:this.mc.x - tempLength},300,egret.Ease.backIn).call(onComplete2,this);    

            egret.setTimeout(function () {
                egret.Tween.get(this.mc).to({x:this.oldX},500,egret.Ease.backOut);    
            }, this, 1200); 
            egret.setTimeout(function () {
                this.dispatchEvent(new egret.Event("attackToLeft"));                 
            }, this, 800);      
        }  
    }

    public beAttack():void {
        this.oldX = this.mc.x;
        if(this.direction == "right"){
            egret.Tween.get(this.mc).to({x:this.mc.x - 50},200,egret.Ease.backOut);               
            egret.setTimeout(function () {
                egret.Tween.get(this.mc).to({x:this.oldX},200,egret.Ease.backOut);               
            }, this, 200);  
            egret.setTimeout(function () {
                this.dispatchEvent(new egret.Event("rightAttack"));                 
            }, this, 400);    
        }else{
            egret.Tween.get(this.mc).to({x:this.mc.x + 50},200,egret.Ease.backOut);               
            egret.setTimeout(function () {
                egret.Tween.get(this.mc).to({x:this.oldX},200,egret.Ease.backOut);               
            }, this, 200);   
            egret.setTimeout(function () {
                this.dispatchEvent(new egret.Event("leftAttack"));                 
            }, this, 400);    
        }
    }

    public setDirect(direction):void {
        this.direction = direction;
        if(direction == "left"){
            this.mc.scaleX = -1;
        }else{
            this.mc.scaleX = 1;
        }
        this.play(); 
    }

    public playEffect(type,str):void{
        var effectTips = new egret.TextField();

        effectTips.size = 24;
        var tempLength = 50;
        if(this.roleName == "mozu"){
            tempLength = 50;
        }else if(this.roleName == "xuanzang"){
            tempLength = 60;
        }else{
            tempLength = 0;
        }

        if(type == 1){
            effectTips.x = 60 + tempLength;
        }else{
            effectTips.x = -130 - tempLength; 
        }
        effectTips.y = 70;
        effectTips.textColor = 0xff0505;
        
        // effectTips.anchorX = 0.5;
        effectTips.text = "-"+str;
        effectTips.strokeColor = 0x000000;
        
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild( effectTips );  
        effectTips.touchEnabled = true;

        var onComplete1:Function = function(){
            this.removeChild(effectTips);
        };
        effectTips.visible = true;
        egret.Tween.get(effectTips).to({y:effectTips.y - 120},500,egret.Ease.backOut).call(onComplete1,this);   
    }

}
