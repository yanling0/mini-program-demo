App({
	onLaunch(options) {
		wx.getSystemInfo({
			success: (result) => {
				console.log(result)
				this.globalData.height = result.statusBarHeight
			},
		})
	},
	onShow(options) {
		//  do something when show
	
	},
	onHide(options) {
		//  do something when hide
	},
	onError(msg) {
		console.log(msg);
	},
	globalData: {
		userInfo:null,
		openid: '',
		height: 0
	},
});

