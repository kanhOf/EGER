  /**
    * 游戏特效汇总
    * by zhaoxin
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 使用方法如：EffectUtils.rotationEffect()
    */

module EffectUtils {

    // 存储旋转对象
    var rotationArr:Array<any> = [];
    //对象旋转特效
    //obj   旋转对象
    //time  旋转一周用时，毫秒
    export function rotationEffect(obj,time:number = 1000):void{
        if(this.rotationArr == null){
            this.rotationArr = [];
        }
        if(this.rotationArr[obj.hashCode]){
            return;
        }
        if((this.rotationArr[obj.hashCode] == null)||!this.rotationArr[obj.hashCode]){
            this.rotationArr[obj.hashCode] = true;
        }
        var onComplete1:Function = function(){
            if(this.rotationArr[obj.hashCode]&&(obj != null)){
                obj.rotation = 0;
                egret.Tween.get(obj).to({rotation:360},time).call(onComplete1,this);   
            }
        };
        obj.rotation = 0;
        egret.Tween.get(obj).to({rotation:360},time).call(onComplete1,this);   
    }

    //取消对象旋转
    //obj    旋转对象
    export function removeRotationEffect(obj):void{
          this.rotationArr[obj.hashCode] = false;
    }

    //对象闪烁特效
    //obj         闪烁对象
    //interval    闪烁总工时间
    export function blinkEffect(obj,interval:number = 1000):void{
        new BitmapBlink(obj,interval); 
    }

    //抖动对象特效
    //类似ios密码输入错误的特效
    export function shakeObj(obj):void{
        var shakeNum = 80;
        var oldX:number = obj.x;
        egret.Tween.get(obj).to({x:obj.x - 10},shakeNum); 

        egret.setTimeout(function () {              
            egret.Tween.get(obj).to({x:obj.x + 20},shakeNum); 
        }, this, shakeNum*2); 
        egret.setTimeout(function () {              
            egret.Tween.get(obj).to({x:obj.x - 20},shakeNum); 
        }, this, shakeNum*3); 
        egret.setTimeout(function () {              
            egret.Tween.get(obj).to({x:obj.x + 20},shakeNum); 
        }, this, shakeNum*4); 
        egret.setTimeout(function () {              
            egret.Tween.get(obj).to({x:oldX},shakeNum); 
        }, this, shakeNum*5);           
    }


    //抖动对象特效
    // 1：抖动  2：震动
    export function shakeScreen(effectType:number = 1):void{
        var panel = GameConfig.curPanel;
        var shakeNum = 40;
        var oldX:number = panel.x;
        var oldY:number = panel.y;

        if(effectType == 1){
            egret.Tween.get(panel).to({x:panel.x - 10},shakeNum); 

            egret.setTimeout(function () {              
                egret.Tween.get(panel).to({x:panel.x + 20},shakeNum); 
            }, this, shakeNum*2); 
            egret.setTimeout(function () {              
                egret.Tween.get(panel).to({x:panel.x - 20},shakeNum); 
            }, this, shakeNum*3); 
            egret.setTimeout(function () {              
                egret.Tween.get(panel).to({x:panel.x + 20},shakeNum); 
            }, this, shakeNum*4); 
            egret.setTimeout(function () {              
                egret.Tween.get(panel).to({x:oldX},shakeNum); 
            }, this, shakeNum*5);      
        }else{
            egret.Tween.get(panel).to({x:panel.x - 10,y:panel.y},shakeNum); 

            egret.setTimeout(function () {              
                egret.Tween.get(panel).to({x:panel.x + 20,y:panel.y},shakeNum); 
            }, this, shakeNum*2); 
            egret.setTimeout(function () {              
                egret.Tween.get(panel).to({x:panel.x,y:panel.y + 15},shakeNum); 
            }, this, shakeNum*3); 
            egret.setTimeout(function () {              
                egret.Tween.get(panel).to({x:panel.x,y:panel.y - 20},shakeNum); 
            }, this, shakeNum*4); 
            egret.setTimeout(function () {              
                egret.Tween.get(panel).to({x:panel.x,y:panel.y + 10},shakeNum); 
            }, this, shakeNum*5); 
            egret.setTimeout(function () {              
                egret.Tween.get(panel).to({x:oldX,y:oldY},shakeNum); 
            }, this, shakeNum*6);      
        }
    }

    /**
    * str             提示内容
    * effectType      动画类型 1：从下到上弹出 2：从左至右弹出 3：从右至左弹出 4：从中间弹出渐渐消失 5：从大变小 等等
    * isWarning       是否是警告，警告是红色
    */
    export function showTips(str:string = "",effectType:number = 1,isWarning:boolean = false):void{
        switch (effectType)
        {
            case 1: {
                TipsUtils.showTipsDownToUp(str,isWarning);
                break;
            }
            case 2: {
                TipsUtils.showTipsLeftOrRight(str,isWarning,true);
                break;
            }
            case 3: {
                TipsUtils.showTipsLeftOrRight(str,isWarning,false);
                break;
            }
            case 4: {
                TipsUtils.showTipsFromCenter(str,isWarning);
                break;
            }
            case 5: {
                TipsUtils.showTipsBigToSmall(str,isWarning);
                break;
            }
            default: {
                // TODO: Implemente default case
            }
        }

    }    

    //========================== a lot of effect will coming! ============================
}