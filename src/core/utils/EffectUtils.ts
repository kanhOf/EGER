  /**
	* 游戏特效汇总
	* by zhaoxin
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* 使用方法如：EffectUtils.rotationEffect()
    */

module EffectUtils {

	//对象旋转特效
	export function rotationEffect(obj:egret.Bitmap):void{
        var onComplete1:Function = function(){
        	if(obj != null){
	        	obj.rotation = 0;
	            egret.Tween.get(obj).to({rotation:360},30000).call(onComplete1,this);   
        	}
        };
		egret.Tween.get(obj).to({rotation:360},30000).call(onComplete1,this);   
	}

	//对象闪烁特效
	export function blinkEffect(obj:egret.Bitmap,interval:number):void{
        new BitmapBlink(obj,interval); 
	}

	//云层飘动特效
	export function cloudEffect(obj):void{
        var cloud:Cloud = new Cloud(); 
        obj.addChild(cloud);
	}

	//抖动对象特效
	export function shakeObj(obj:egret.Bitmap):void{
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

	var oldY:number = 0;
	//抖动对象特效2
	export function waveObj(obj:egret.Bitmap):void{
		var shakeNum = 140;
		if(this.oldY == 0){
			this.oldY = obj.y;
		}
		var oldRotation:number = 0;
		egret.Tween.get(obj).to({rotation:oldRotation - 20},shakeNum,egret.Ease.sineOut); 
		egret.Tween.get(obj).to({y:this.oldY - 50},shakeNum*2,egret.Ease.sineOut); 
        egret.setTimeout(function () {              
			egret.Tween.get(obj).to({rotation:oldRotation + 20},shakeNum,egret.Ease.sineOut); 
        }, this, shakeNum); 
        egret.setTimeout(function () {              
			egret.Tween.get(obj).to({rotation:oldRotation},shakeNum,egret.Ease.sineOut); 
        }, this, shakeNum*2); 
			
        egret.setTimeout(function () {              
			egret.Tween.get(obj).to({y:this.oldY + 50},shakeNum*2,egret.Ease.sineIn); 
        }, this, shakeNum*3); 
	}

	//飘字特效1
	export function showTips(obj,x,y,str,type):void{
        var effectTips = new egret.TextField();

        x = x + 400 * Math.random();
        y = y + 310 * Math.random();

        effectTips.size = 24;
        effectTips.x = x;
       	effectTips.y = y;    
        
        effectTips.anchorX = 0.5;
        effectTips.text = str;
        if(type == 1){
        	effectTips.textColor = 0xFFFFFF;
        }else if(type == 2){
        	effectTips.textColor = 0x33a3dc;
        }else if(type == 3){
        	effectTips.textColor = 0x00ff00;
        }else if(type == 4){
        	effectTips.textColor = 0xc77eb5;
        }else if(type == 5){
        	effectTips.textColor = 0xe0861a;
        }
        effectTips.strokeColor = 0x000000;
        
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        obj.addChild( effectTips );  
        effectTips.touchEnabled = true;

        var onComplete2:Function = function(){
            obj.removeChild(effectTips);
        };
        var onComplete1:Function = function(){
        	egret.Tween.get(effectTips).to({alpha:0},200).call(onComplete2,this);       
        };
        effectTips.visible = true;
        egret.Tween.get(effectTips).to({y:effectTips.y - 70},700,egret.Ease.backOut).call(onComplete1,this);   
        egret.Tween.get(effectTips).to({scaleX:2.5,scaleY:2.5},700,egret.Ease.backOut);   
	}

	//飘字特效2
	export function showTips2(obj,x,y):void{
        console.log("method_name1");

        var effectTips = new egret.TextField();

        effectTips.size = 24;
        effectTips.x = x;
       	effectTips.y = y;    
        
        effectTips.anchorX = 0.5;
        effectTips.text = "+1";
        effectTips.strokeColor = 0x000000;
        
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        obj.addChild( effectTips );  
        effectTips.touchEnabled = true;

        var onComplete1:Function = function(){
            obj.removeChild(effectTips);
        };
        effectTips.visible = true;
        egret.Tween.get(effectTips).to({y:effectTips.y - 100},700).call(onComplete1,this);   
        console.log("method_name");
	}

}