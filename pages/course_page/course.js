// pages/course_page/course.js
const dataList = require('../../utils/data');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filterData: [],
    isFilter: [false, false, false],
    filterTitle: '',
    isExist: false,
    options: [
      [],
      [],
      []
    ]
  },

  filterTab(e) {
    let data = JSON.parse(JSON.stringify(this.data.filterData));
    let index = e.currentTarget.dataset.index;
    // console.log(index)
    data.map(d => d.active = false)

    data[index].active = !this.data.filterData[index].active;

    this.setData({
      filterData: data,
    })
  },

  selectOption(e) {
    // console.log(e);
    let data = JSON.parse(JSON.stringify(this.data.filterData));

    let index1 = e.currentTarget.dataset.index1;
    let index2 = e.currentTarget.dataset.index2;
    let index3 = e.currentTarget.dataset.index3;
    // data[index1].child[index2].childType.map(i => i.selected = false);

    data[index1].child[index2].childType[index3].selected = !data[index1].child[index2].childType[index3].selected
    if (data[index1].child[index2].childType[index3].selected) {
      // this.data.options[index1].push(data[index1].child[index2].childType[index3]);
      
      this.data.options[index1].push(data[index1].child[index2].childType[index3]);
      // console.log(this.data.options[index1])
      if (this.data.options[index1].length >=1) {
        this.setData({
          filterTitle: this.data.options[index1][0].text
        })
      }



      let isFilter = this.data.isFilter;
      isFilter[index1] = true;

      this.setData({
        isFilter
      })
    }
    this.setData({
      filterData: data
    })
  },

  clearFilter(e) {
    let data = JSON.parse(JSON.stringify(this.data.filterData));
    let isFilter = this.data.isFilter;
    let index = e.currentTarget.dataset.index1;

    isFilter[index] = false;

    data.map(i => {
      i.child.map(c => {
        c.childType.map(ct => {
          if (i.active) {
            ct.selected = false;
          }
        })
      })
    })


    this.setData({
      filterData: data,
      isFilter
    })
  },

  confirmFilter(e){
    let data = this.data.filterData;
    let selectedOptions=[];

    data.forEach(i1 => {
      i1.active=false;
      i1.child.forEach(i2 => {
        i2.childType.forEach(i3 => {
          if(i3.selected){
            selectedOptions.push(i3.text)
          }
        })
      })
    })

    this.setData({
      filterData: data
    })

    console.log(selectedOptions)
  },
  handleAddOrRemove(e){
    // let isExist = !this.data.isExist
    // this.setData({
    //   isExist
    // })
    // console.log(e)
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '课程管理',
    });
    this.setData({
      filterData: dataList.data
    })
    // console.log(this.data.filterData)
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