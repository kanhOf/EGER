/**
  * 面板管理类
  * by dily
  * (c) copyright false,0,0,2014 - 2035
  * All Rights Reserved.
  * 面板的管理类
  */
var PanelManager;
(function (PanelManager) {
    var startPanel;
    var gamePanel;
    var gameOverPanel;
    var sharePanel;
    // 初始化所有面板
    function initPanel() {
        Global.addEventListener(MainNotify.openStartPanelNotify, this.openStartPanel, this);
        Global.addEventListener(MainNotify.closeStartPanelNotify, this.closeStartPanel, this);
        Global.addEventListener(MainNotify.openGamePanelNotify, this.openGamePanel, this);
        Global.addEventListener(MainNotify.closeGamePanelNotify, this.closeGamePanel, this);
        Global.addEventListener(MainNotify.openGameOverPanelNotify, this.openGameOverPanel, this);
        Global.addEventListener(MainNotify.closeGameOverPanelNotify, this.closeGameOverPanel, this);
        Global.addEventListener(MainNotify.openSharePanelNotify, this.openSharePanel, this);
        Global.addEventListener(MainNotify.closeSharePanelNotify, this.closeSharePanel, this);
    }
    PanelManager.initPanel = initPanel;
    // 打开开始界面
    function openStartPanel() {
        if (this.startPanel == null) {
            this.startPanel = new StartPanel();
            PopUpManager.addPopUp(this.startPanel, false, 0, 0, 0);
        }
    }
    PanelManager.openStartPanel = openStartPanel;
    // 关闭开始界面
    function closeStartPanel() {
        if (this.startPanel != null) {
            PopUpManager.removePopUp(this.startPanel, 3);
            this.startPanel = null;
        }
    }
    PanelManager.closeStartPanel = closeStartPanel;
    // 打开游戏界面
    function openGamePanel() {
        if (this.gamePanel == null) {
            this.gamePanel = new GamePanel();
            PopUpManager.addPopUp(this.gamePanel, false, 0, 0, 3);
        }
    }
    PanelManager.openGamePanel = openGamePanel;
    // 关闭游戏界面
    function closeGamePanel() {
        if (this.gamePanel != null) {
            PopUpManager.removePopUp(this.gamePanel, 3);
            this.gamePanel = null;
        }
    }
    PanelManager.closeGamePanel = closeGamePanel;
    // 打开结束界面
    function openGameOverPanel() {
        if (this.gameOverPanel == null) {
            this.gameOverPanel = new GameOverPanel();
            PopUpManager.addPopUp(this.gameOverPanel, false, 0, 0, 3);
        }
    }
    PanelManager.openGameOverPanel = openGameOverPanel;
    // 关闭结束界面
    function closeGameOverPanel() {
        if (this.gameOverPanel != null) {
            PopUpManager.removePopUp(this.gameOverPanel, 3);
            this.gameOverPanel = null;
        }
    }
    PanelManager.closeGameOverPanel = closeGameOverPanel;
    // 打开分享界面
    function openSharePanel() {
        if (this.sharePanel == null) {
            this.sharePanel = new SharePanel();
            PopUpManager.addPopUp(this.sharePanel, false, 0, 0, 3);
        }
    }
    PanelManager.openSharePanel = openSharePanel;
    // 关闭分享界面
    function closeSharePanel() {
        if (this.sharePanel != null) {
            PopUpManager.removePopUp(this.sharePanel, 3);
            this.sharePanel = null;
        }
    }
    PanelManager.closeSharePanel = closeSharePanel;
})(PanelManager || (PanelManager = {}));
