// pages/buy_page/page/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTitle: ["推荐","鞋类","潮服","手表","箱包","美妆","配饰","家电"],
    currentTabIndex: 0,
    idx:'idx0',
    testData:[],
    isSignin: false,
    iconName:'pencil',
    error: '',
    userInfo:''
  },
  goToLogin(e){
   if(e.detail.userInfo) {
     this.setData({
       userInfo: e.detail.userInfo
     }) 
   } else {
     wx.showModal({
       title: '当前账号未登录，请登录',
       content: '登录后体验完整版',
       cancelText: '立即登录',
       confirmText: '稍后登录',
       cancelColor: 'blue',
       confirmColor: 'blue',
       success: res => {
         if (res.cancel) {
           wx.navigateTo({
             url: '/pages/buy_page/page/login/login',
           })
         } 
       }
     })
   }
  },
  onShow() {
    this.setData({
        error: '这是一个错误提示'
    })
},

  async getData(){
    // let that = this;
    await wx.request({
      url: 'http://106.55.142.207:3001/api/rest/students',
      success: (res)=>{
        this.setData({
          testData: res.data
        })
      }
    })
  },

  onTab(e) {
    this.setData({
      currentTabIndex: e.currentTarget.dataset.idx,
      idx: e.currentTarget.id
    });
  },

  onTabItemTap(){
    wx.reLaunch({
      url: '/pages/buy_page/page/buy/buy',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  
})