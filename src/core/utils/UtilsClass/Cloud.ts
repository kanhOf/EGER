/**
 * Created by shaorui on 14-9-3.
 */
class Cloud extends egret.DisplayObjectContainer {
 
    private imgArr:CloudImage[];
    private imgCount:number = 300;
    private screenWidth:number = 480;
    private screenHeight:number = 800;
    private focal:number=400;
    private stageRect:egret.Rectangle;
    private vpX:number;
    private vpY:number;
    private touchX:number=240;
    private touchY:number=540;
 
    public constructor() {
        super();
        this.touchEnabled = true;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        this.initGame();
    }
    private initGame():void {
        this.vpX=this.stage.stageWidth/2;
        this.vpY=this.stage.stageHeight/2;
        this.stageRect = new egret.Rectangle(-480,0,this.stage.stageWidth*3,this.stage.stageHeight);
        this.imgArr = [];
        for (var i:number = 0; i < this.imgCount; i++)
        {
            var item:CloudImage = new CloudImage(RES.getRes("cloud10"));
            item.anchorX = 0.5;
            item.anchorY = 0.5;
            //item.x = Math.random()*2000;
            //item.y = this.screenHeight-200+Math.random()*200;
            this.setAShape(item);
            this.imgArr.push(item);
            this.addChild(item);
        }
        this.addEventListener(egret.Event.ENTER_FRAME,this.enterFrameHandler,this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMoveHandler,this);
    }
    private touchMoveHandler(evt:egret.TouchEvent):void {
        this.touchX = evt.stageX;
        //this.touchY = evt.stageY;
    }
    /**重置位置*/
    private setAShape(shape:CloudImage):void
    {
        shape.scale = 0.001;
        shape.scaleX = shape.scale;
        shape.scaleY = shape.scale;
        shape.startX=this.screenWidth*Math.random();
        shape.startY=this.screenHeight/2+this.screenHeight/2*Math.random()-100;
        shape.x = shape.startX;
        shape.y = shape.startY;
        shape.zpos = Math.random()*800+400;
        shape.rotation = Math.random()*Math.PI;
    }
    /**Z排序*/
    private sortArray():void
    {
        this.imgArr.sort(this.zSortFunction);
    }
    /**排序方法*/
    private zSortFunction(a:CloudImage,b:CloudImage):number
    {
        if(a.zpos > b.zpos)
            return -1;
        else if(a.zpos < b.zpos)
            return 1;
        else
            return 0;
    }
    /**判断一个对象是否已经不在屏幕区域*/
    private shapeAvisible(shape:CloudImage):Boolean
    {
        var shapeRect:egret.Rectangle = shape.getBounds();
        return this.stageRect.intersects(shapeRect);
    }
    /**每帧调用*/
    private enterFrameHandler(event:Event=null):void
    {
        var centerPoint:egret.Point = new egret.Point(this.touchX,this.touchY);
        var xpos:number;
        var ypos:number;
        var item:CloudImage;
        for (var i:number = 0; i < this.imgCount; i++)
        {
            item = this.imgArr[i];
            //reset properties
            item.zpos-=4;
            var x1:number = this.screenWidth/2-item.startX;
            var y1:number = this.screenHeight/2-item.startY;
            if (item.zpos>-this.focal && this.shapeAvisible(item))
            {
                xpos=centerPoint.x-this.vpX-x1;//x维度
                xpos*=2;
                ypos=centerPoint.y-this.vpY-y1;//y维度
                item.scale=this.focal/(this.focal+item.zpos);//缩放产生近大远小，取值在0-1之间；
                item.scaleX = item.scale;
                item.scaleY = item.scale;
                item.x=this.vpX+xpos*item.scale;
                item.y=this.vpY+ypos*item.scale;
            }
            else
            {
                this.setAShape(item);
            }
        }
        this.sortArray();
        for (i = 0; i < this.imgCount; i++)
        {
            item = this.imgArr[i];
            this.addChild(item);
        }
    }
}
class CloudImage extends egret.Bitmap
{
    private itemWidth:number = 256;
    private itemHeight:number = 256;
 
    public startX:number;
    public startY:number;
    public zpos:number=0;
 
    public scale:number = 1;
 
    public getBounds():egret.Rectangle
    {
        var w:number = this.itemWidth*this.scale;
        var h:number = this.itemHeight*this.scale;
        var rect:egret.Rectangle = new egret.Rectangle(this.x-w/2,this.y-h/2,w/2,h/2);
        rect.width = Math.max(1,rect.width);
        rect.height = Math.max(1,rect.height);
        return rect;
    }
}