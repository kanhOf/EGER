var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
  * 面板基类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 面板的基本属性和方法
  */
var BasePanel = (function (_super) {
    __extends(BasePanel, _super);
    // 构造函数
    function BasePanel(assertsName) {
        if (assertsName === void 0) { assertsName = "asserts"; }
        _super.call(this);
        this.w = 0;
        this.h = 0;
        this.asserts = RES.getRes(assertsName);
        this.w = GameConfig.curWidth();
        this.h = GameConfig.curHeight();
        this.initPanel();
    }
    // 初始化面板
    BasePanel.prototype.initPanel = function () {
    };
    // 初始化面板数据
    BasePanel.prototype.initData = function () {
    };
    // 进入面板
    // effectType 特效类型 0：无特效 1：2：3：4：5：6：7：
    BasePanel.prototype.onEnter = function (effectType) {
        if (effectType === void 0) { effectType = 0; }
        switch (effectType) {
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
    };
    // 退出面板
    // effectType 特效类型 0：无特效 1：2：3：4：5：6：7：
    BasePanel.prototype.onExit = function (effectType) {
        if (effectType === void 0) { effectType = 0; }
        switch (effectType) {
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
    };
    // 关闭面板
    BasePanel.prototype.closePanel = function () {
        PopUpManager.removePopUp(this);
    };
    return BasePanel;
})(egret.DisplayObjectContainer);
