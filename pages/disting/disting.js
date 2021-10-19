// pages/disting/disting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputDisable: true,
    oldPassword: '',
    newPassword:'',
    newPasswordAgain:'',
    isValid: false,
    errorTip: '',
    errorTip2: '',
  },
  modifyPassword(e){
    console.log(e)
    wx.request({
      url: 'url',
      method:'',
      data:{

      },
      header:{},
      success: res => {
        if (condition) {
          wx.showModal({
            showCancel: true,
            title: "",
            content:{},
          })
        }
      },
    })
  },
  validatePassword(str){
    const reg = /^\w{8,12}$/;
    const isValid = reg.test(str);
    if (!isValid) {
      this.setData({
        errorTip: "密码输入不符合要求",
        isValid: false
      })
    } else {
      this.setData({
        errorTip: "",
        isValid: true
      })
      
    }
    if(this.data.newPassword!==this.data.newPasswordAgain){
      this.setData({
        errorTip2: "两次密码输入不一致"
      })
    } else {
      this.setData({
        errorTip2: ""
      })
    }
  },
  getPassword(e){
    this.setData({
      oldPassword:e.detail.value
    });
    this.changeInputDisable();
  },
  getNewPassword(e){
    this.validatePassword(e.detail.value);
    this.setData({
      newPassword:e.detail.value
    });
    this.changeInputDisable();
  },
  getNewPasswordAgain(e){
    this.validatePassword(e.detail.value);
    this.setData({
      newPasswordAgain:e.detail.value
    });
    this.changeInputDisable();
  },
  
  changeInputDisable(){
    if (this.data.oldPassword&&this.data.newPassword&&this.data.newPasswordAgain&&this.data.isValid&&(this.data.newPassword===this.data.newPasswordAgain)) {
      this.setData({
        inputDisable: false
      })
    } else {
      this.setData({
        inputDisable: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '修改密码',
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