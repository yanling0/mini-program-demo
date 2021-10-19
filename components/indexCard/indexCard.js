// components/indexCard/indexCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    url: String,
    isLogin: Boolean
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
    gotoPage(){
      if(!this.data.isLogin){
        wx.showModal({
          title: '当前账户未登录,请先登录',
          content:'登陆体验完整功能',
          cancelText:'立即登录',
          cancelColor: 'blue',
          confirmText:'稍后登录',
          confirmColor:'blue',
          success(res){
            if (res.confirm) {
              
            } else if(res.cancel){
              wx.navigateTo({
                url: '/pages/buy_page/page/login/login',
              })
            }
          }
        })
      }
      else{
        wx.navigateTo({
          url: this.data.url,
        })
      }
      
    }
  }
})
