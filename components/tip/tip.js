// components/tip/tip.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoLogin(){
      wx.navigateTo({
        url: '/pages/buy_page/page/login/login',
      })
    }
  }
})
