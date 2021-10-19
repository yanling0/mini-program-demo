// components/filterBar/filterBar.js
const dataList = require('../../utils/data')
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
    filterData: dataList.data,
    isActive: [false, false, false],
    isSelected: false,
    options: [
      [],
      [],
      []
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onActive(e) {
      let isActive = [false, false, false];
      let index = e.currentTarget.dataset.index
      isActive[index] = !this.data.isActive[index];
      this.setData({
        isActive
      })
    },
    closeMask() {
      this.setData({
        isActive: [false, false, false]
      })
    },
    handleSelect(e) {
      // console.log(e)
      let filterData = JSON.parse(JSON.stringify(this.data.filterData));
      let index1 = e.currentTarget.dataset.index1;
      let index2 = e.currentTarget.dataset.index2;
      let index3 = e.currentTarget.dataset.index3;
      let options = [[],[],[]];

      filterData[index1].child[index2].childType[index3].selected = !filterData[index1].child[index2].childType[index3].selected;

      if (filterData[index1].child[index2].childType[index3].selected) {
        filterData.map(rank1 => {
        rank1.child.map(rank2 => {
          // console.log(rank2)
          if (rank2.title === '学院') {
            rank2.childType.map(rank3 => {
              if (rank3.selected) {
                options[0].push(rank3.text)
              }
            })
          } else if (rank2.title === '类别') {
            rank2.childType.map(rank3 => {
              if (rank3.selected) {
                options[1].push(rank3.text)
              }
            })
          } else if (rank2.title === '时间') {
            rank2.childType.map(rank3 => {
              if (rank3.selected) {
                options[2].push(rank3.text)
              }
            })
          }
        })
      })
      this.setData({
        options,
        isSelected:true
      })
      } else if (!filterData[index1].child[index2].childType[index3].selected) {
        filterData.map(rank1 => {
          rank1.child.map(rank2 => {
            // console.log(rank2)
            if (rank2.title === '学院') {
              rank2.childType.map(rank3 => {
                if (rank3.selected) {
                  options[0].push(rank3.text)
                }
              })
            } else if (rank2.title === '类别') {
              rank2.childType.map(rank3 => {
                if (rank3.selected) {
                  options[1].push(rank3.text)
                }
              })
            } else if (rank2.title === '时间') {
              rank2.childType.map(rank3 => {
                if (rank3.selected) {
                  options[2].push(rank3.text)
                }
              })
            }
          })
        })
        if (options[0].length===0&&options[1].length===0&&options[2].length===0) {
          this.setData({
            isSelected: false
          })
        }
        this.setData({
          // academy,
          // category,
          // day,
          options
        })
      }
      this.setData({
        filterData
      })
    },
    clearFilter(e) {
      // console.log(e)
      let filterData = JSON.parse(JSON.stringify(this.data.filterData));
      let options= [[],[],[]];

      filterData.map(first => {
        first.child.map(second => {
          second.childType.map(third => {
            third.selected = false;
          })
        })
      })

      this.setData({
        filterData,
        isSelected: false,
        options
      })
    },
    confirmFilter(e) {
      // console.log(e)
      let filterData = JSON.parse(JSON.stringify(this.data.filterData));
      let options= this.data.options;
      // this.clearFilter();

      

      this.setData({
        isActive: [false, false, false],
      })
    }
  },


  pageLifetimes: {
    show() {
      // console.log(this.data.filterData)
    }
  }
})