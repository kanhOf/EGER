  /**
	* 游戏特效汇总
	* by zhaoxin
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* 使用方法如：EffectUtils.rotationEffect()
    */

module EffectUtils {

	// //对象旋转特效
	// export function rotationEffect(obj:egret.DisplayObjectContainer):void{
 //        var onComplete1:Function = function(){
 //        	if(obj != null){
	//         	obj.rotation = 0;
	//             egret.Tween.get(obj).to({rotation:360},30000).call(onComplete1,this);   
 //        	}
 //        };
	// 	egret.Tween.get(obj).to({rotation:360},30000).call(onComplete1,this);   
	// }

	// //对象闪烁特效
	// export function blinkEffect(obj,interval:number):void{
 //        new BitmapBlink(obj,interval); 
	// }

	// //云层飘动特效
	// export function cloudEffect(obj):void{
 //        var cloud:Cloud = new Cloud(); 
 //        obj.addChild(cloud);
	// }

	// //抖动对象特效
	// export function shakeObj(obj):void{
	// 	var shakeNum = 80;
	// 	var oldX:number = obj.x;
	// 	egret.Tween.get(obj).to({x:obj.x - 10},shakeNum); 

 //        egret.setTimeout(function () {              
	// 		egret.Tween.get(obj).to({x:obj.x + 20},shakeNum); 
 //        }, this, shakeNum*2); 
 //        egret.setTimeout(function () {              
	// 		egret.Tween.get(obj).to({x:obj.x - 20},shakeNum); 
 //        }, this, shakeNum*3); 
 //        egret.setTimeout(function () {              
	// 		egret.Tween.get(obj).to({x:obj.x + 20},shakeNum); 
 //        }, this, shakeNum*4); 
 //        egret.setTimeout(function () {              
	// 		egret.Tween.get(obj).to({x:oldX},shakeNum); 
 //        }, this, shakeNum*5); 			
	// }


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
    * effectType      动画类型 0：从下到上弹出 1：从左至右弹出 2：从右至左弹出 3：从中间弹出渐渐消失 4：从大变小 5：从小变大 等等
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


}