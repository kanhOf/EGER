  /**
    * 单行多颜色文本类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 多种颜色文本，超链接，回调
    * todo:超链接、下划线、回调等
    */

class HtmlText extends egret.DisplayObjectContainer{

    private tfArr:Array<any> = [];

    /**
    * contentArr       多文本数组
    * fontSize         文本字体大小
    * isBold           是否加粗
    * stroke           描边宽度
    * strokeColor      描边颜色
    * 如：[["black",0x000000],["green",0x55ff00]]
    */
    public constructor(contentArr:Array<any>,fontSize:number = 30,isBold:boolean = false,stroke:number = 0,strokeColor:number = 0x000000){
        super();
        this.setData(contentArr,fontSize,isBold,stroke,strokeColor);
    }


    public setData(contentArr:Array<any>,fontSize:number = 30,isBold:boolean = false,stroke:number = 0,strokeColor:number = 0x000000):void {
        var len1:number = this.tfArr.length;
        for (var i = 0; i < len1; i++){
            this.removeChild(this.tfArr[i]);
        }
        this.tfArr = [];

        var lastX:number = 0;
        //解析html标签
        var len2:number = contentArr.length;
        for (var i = 0; i < len2; i++){
            var contentRender = contentArr[i];
            var tf:egret.TextField = new egret.TextField();
            this.addChild(tf);
            tf.size = fontSize;
            tf.text = contentRender[0];
            tf.textColor = contentRender[1];
            tf.bold = isBold;
            tf.stroke = stroke;
            tf.strokeColor = strokeColor;

            tf.x = lastX;
            lastX += tf.width;

            this.tfArr[i] = tf;
        }

    }

}
