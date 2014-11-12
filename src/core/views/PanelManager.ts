  /**
    * 面板管理类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 面板的管理类
    */
module PanelManager {

    var startPanel:StartPanel;
    var gamePanel:GamePanel;
    var gameOverPanel:GameOverPanel;
    var sharePanel:SharePanel;
    var notice:Notice;	
	// 初始化所有面板
	export function initPanel():void{ 

        Global.addEventListener(MainNotify.openStartPanelNotify,this.openStartPanel,this)
        Global.addEventListener(MainNotify.closeStartPanelNotify,this.closeStartPanel,this)

        Global.addEventListener(MainNotify.openGamePanelNotify,this.openGamePanel,this)
        Global.addEventListener(MainNotify.closeGamePanelNotify,this.closeGamePanel,this)

        Global.addEventListener(MainNotify.openGameOverPanelNotify,this.openGameOverPanel,this)
        Global.addEventListener(MainNotify.closeGameOverPanelNotify,this.closeGameOverPanel,this)

        Global.addEventListener(MainNotify.openSharePanelNotify,this.openSharePanel,this)
        Global.addEventListener(MainNotify.closeSharePanelNotify,this.closeSharePanel,this)

	} 

	// 打开开始界面
	export function openStartPanel():void{ 
		if(this.startPanel == null){
			this.startPanel = new StartPanel();
			PopUpManager.addPopUp(this.startPanel);
		}
	} 
	// 关闭开始界面
	export function closeStartPanel():void{ 
		if(this.startPanel != null){
			PopUpManager.removePopUp(this.startPanel);
			this.startPanel = null;
		}
	} 

	// 打开游戏界面
	export function openGamePanel():void{ 
		if(this.gamePanel == null){
			this.gamePanel = new GamePanel();
			PopUpManager.addPopUp(this.gamePanel);
		}
	} 
	// 打开游戏界面
	export function closeGamePanel():void{ 
		if(this.gamePanel != null){
			PopUpManager.removePopUp(this.gamePanel);
			this.gamePanel = null;
		}
	} 
	// 打开结束界面
	export function openGameOverPanel():void{ 
		if(this.gameOverPanel == null){
			this.gameOverPanel = new GameOverPanel();
			PopUpManager.addPopUp(this.gameOverPanel);
		}
	} 
	// 打开结束界面
	export function closeGameOverPanel():void{ 
		if(this.gameOverPanel != null){
			PopUpManager.removePopUp(this.gameOverPanel);
			this.gameOverPanel = null;
		}
	} 
	// 打开分享界面
	export function openSharePanel():void{ 
		if(this.sharePanel == null){
			this.sharePanel = new SharePanel();
			PopUpManager.addPopUp(this.sharePanel);
		}
	} 
	// 打开分享界面
	export function closeSharePanel():void{ 
		if(this.sharePanel != null){
			PopUpManager.removePopUp(this.sharePanel);
			this.sharePanel = null;
		}
	} 
}

