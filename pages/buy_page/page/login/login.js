// pages/buy_page/page/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: ''
  },
  login(){
    wx.request({
      url: 'url',
      method: 'POST',
      data: {
        code: this.data.code
      },
      success: res => {
        console.log(res)
        getApp().globalData.openid = res.data.msg
        if (res.data.code===200) {
          wx.reLaunch({
            url: 'url',
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success: res =>{
        console.log(res)
        this.setData({
          code: res.code
        })
      }
    })
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

  }
})