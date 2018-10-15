Page({
  data: {
    dataList:[]
  },
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      methods: 'GET',
      success: function(res){
        let data = res.data.stories
        that.setData({
          dataList: data
        })
      }
    })
  },
  jumpDetail: function(e){
    wx.navigateTo({
      url: "./detail/detail?id=" + e.target.dataset.id
    })
  }
})