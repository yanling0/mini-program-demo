// components/detailBar/detailBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    idx: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    day: [
      {
        name: '周一',
        num: 2
      },
      {
        name: '周二',
        num: 1
      },
      {
        name: '周三',
        num: 4
      },
      {
        name: '周四',
        num: 0
      },
      {
        name: '周五',
        num: 0
      },
      {
        name: '周六',
        num: 0
      },
      {
        name: '周日',
        num: 0
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoDetailPage(e){
      wx.redirectTo({
        url: `/pages/buy_page/page/detail/detail?id=${e.currentTarget.dataset.index}`,
      })
    }
  },
  pageLifetimes: {
    show: function() {
      console.log(this.data.idx)
    },
  }
})
