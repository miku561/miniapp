//index.js
const app = getApp()

Page({
  data: {
    dataList: [
      {
        choose: false,
        color: 'b9ceeb',
        content: 'test001'
      },
      {
        choose: true,
        color: 'fff8a1',
        content: 'test002'
      },
      {
        choose: true,
        color: '73dbc4',
        content: 'test003'
      },
      {
        choose: true,
        color: 'b9ceeb',
        content: 'test003'
      },
      {
        choose: true,
        color: '73dbc4',
        content: 'test003'
      },
      {
        choose: true,
        color: '73dbc4',
        content: 'test003'
      },
      {
        choose: true,
        color: 'b9ceeb',
        content: 'test003'
      }
    ]
  },
  onLoad: function () {
    
  },
  complete: function (e) {
    if (e.target.id == "" || e.target.id == 'undefined' ) {
      return
    } 
    this.data.dataList[e.target.id].choose = !this.data.dataList[e.target.id].choose
    this.setData({
      dataList: this.data.dataList
    })
  },
  editNode: function (e) {
    console.log(e)
  }
})
