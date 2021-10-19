// components/testCard/testCard.js
Component({
  properties:{
    courseId: Number,
    courseName:{
      type: String
    },
    iconName: {
      type: String,
      value:'pencil'
    },
  },

  data: {

  },

  methods:{
    gotoCourseDetail(e){
      if (this.data.courseId) {
        console.log(this.data.courseId)
        wx.navigateTo({
          url: `/pages/buy_page/page/detail/detail?courseId=${this.data.courseId}`,
        })
      }
    },
    ontap(){
      this.setData({
        iconName:'done2'
      })
      wx.request({
        url: 'url',
        data: {

        },
        success:(res)=>{
          wx.showModal({
            cancelColor: 'cancelColor',
          })
        }
      })
    }
  },
})