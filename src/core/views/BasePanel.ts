  /**
    * 面板基类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 面板的基本属性和方法
    */
class BasePanel extends egret.DisplayObjectContainer{

    public asserts:egret.SpriteSheet;
    public w:number = 0;
    public h:number = 0;

    // 构造函数
    public constructor(assertsName = "asserts"){
        super();
        this.asserts = RES.getRes(assertsName);
        this.w = GameConfig.curWidth();
        this.h = GameConfig.curHeight();
        this.initPanel();
    }

    // 初始化面板
    public initPanel():void{

    }

    // 初始化面板数据
    public initData():void{

    }

    // 进入面板
    // effectType 特效类型 0：无特效 1：2：3：4：5：6：7：
    public onEnter(effectType:number = 0):void{
        switch(effectType){
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            default:
                break;
        }
    }

    // 退出面板
    // effectType 特效类型 0：无特效 1：2：3：4：5：6：7：
    public onExit(effectType:number = 0):void{
        switch(effectType){
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            default:
                break;
        }
    }

    // 关闭面板
    public closePanel():void{
        PopUpManager.removePopUp(this);
    }    

    // // 获取面板宽度
    // public getWidth():void{
        
    // }    

    // // 获取面板高度
    // public getHeight():void{
        
    // }    

}

