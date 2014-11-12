/**
  * 游戏公用方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法如：Global.setCookie()
  */
var Global;
(function (Global) {
    // 储存数据需要key和value，都必须是字符串
    // var key:string = "bestscore";
    // var value:string = "95";
    // egret.localStorage.setItem(key,value);
    // 这样就把数据存在本地了.
    // 读取数据
    // var score:string = egret.localStorage.getItem(key);
    // 删除数据
    // egret.localStorage.removeItem(key);
    // 将所有数据清空
    // egret.localStorage.clear();
    // 在游戏初始化的地方增加如下代码
    // this.stage.addChild(GameConfig.gameScene());
    //新建事件
    function Event(type, obj, bubbles, cancelable) {
        if (obj === void 0) { obj = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return new lcp.LEvent(type, obj, bubbles, cancelable);
    }
    Global.Event = Event;
    //派发事件
    function dispatchEvent(type, obj, bubbles, cancelable) {
        if (obj === void 0) { obj = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        console.log(type);
        var event = new lcp.LEvent(type, obj, bubbles, cancelable);
        lcp.LListener.getInstance().dispatchEvent(event);
    }
    Global.dispatchEvent = dispatchEvent;
    //监听事件
    function addEventListener(type, listener, thisObject, useCapture, priority) {
        if (useCapture === void 0) { useCapture = false; }
        if (priority === void 0) { priority = 0; }
        lcp.LListener.getInstance().addEventListener(type, listener, thisObject, useCapture, priority);
    }
    Global.addEventListener = addEventListener;
    //存储cookies 存储临时数据如最高分最低分之类的
    function setCookie(name, value) {
        document.cookie = name + "=" + value;
    }
    Global.setCookie = setCookie;
    //读取cookies 读取临时数据如最高分最低分之类的
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return arr[2];
        else
            return null;
    }
    Global.getCookie = getCookie;
    //一键分享到新浪微博、腾讯微博、qq空间等代码
    function share(type, title, url, imgUrl) {
        if (type == 1) {
            //分享到新浪微博
            var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url + '&pic=' + imgUrl;
            window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');
        }
        else if (type == 2) {
            //分享到疼讯微博
            var shareqqstring = 'http://v.t.qq.com/share/share.php?title=' + title + '&url=' + url + '&pic=' + imgUrl;
            window.open(shareqqstring, 'newwindow', 'height=100,width=100,top=100,left=100');
        }
        else if (type == 3) {
            //分享到QQ空间
            var shareqqzonestring = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + title + '&url=' + url + '&pics=' + imgUrl;
            window.open(shareqqzonestring, 'newwindow', 'height=400,width=400,top=100,left=100');
        }
    }
    Global.share = share;
    //通过微信分享api
    function shareToWeiXin(title, desc, link, imgUrl) {
        var self = this;
        WeixinApi.ready(function (api) {
            var info = new WeixinShareInfo();
            info.title = title; //分享的标题 长度不能超过512字节
            info.desc = desc; //分享的内容 长度不能超过1K
            info.link = link; //分享的连接
            info.imgUrl = imgUrl; //分享图片的地址 图片大小不能超过32k
            var backInfo = new WeixinShareCallbackInfo();
            backInfo.confirm = self.confirmBack;
            api.shareToFriend(info, backInfo);
            api.shareToTimeline(info, backInfo);
        });
    }
    Global.shareToWeiXin = shareToWeiXin;
    //调用摄像头
    function getCamera() {
    }
    Global.getCamera = getCamera;
    //调用麦克风
    function getMic() {
    }
    Global.getMic = getMic;
    //调用canvas截屏
    function getScreen() {
    }
    Global.getScreen = getScreen;
})(Global || (Global = {}));
