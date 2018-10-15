var WxParse = require('../../../utils/wxParse/wxParse.js');
Page({
  data: {
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "https://news-at.zhihu.com/api/4/news/" + options.id,
      methods: 'GET',
      success: function (res) {
        let string = res.data.body.replace(/<script.*?>.*?<\/script>/ig, ''); 
        var article = string;
        WxParse.wxParse('article', 'html', article, that, 5);
      }
    })
  }
})
