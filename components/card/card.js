// components/card/card.js
Component({
  properties: {
    isExist: false
  },

  /**
   * 页面的初始数据
   */
  data: {},
  methods: {
    gotoDetail(e) {
      wx.navigateTo({
        url: `/pages/buy_page/page/detail/detail?id=${e.currentTarget.dataset.no}`,
      })
    },
    ontap(e) {
      this.triggerEvent('handleaddorremove');
      let isExist = !this.data.isExist
      this.setData({
        isExist
      })
    }
  },

})