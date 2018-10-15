
Page({
  data: {
    idx: 1,
    income: 100,
    used: 99,
    month: 8,
    isShow: false,
    tagList: [
      {
        'icon': 'http://7jptey.com1.z0.glb.clouddn.com/FsGIcdUl8cJRbYaWpEIQfwAUGwlD',
        'txt': '吃喝'
      },
      { 
        'icon': 'http://7jptey.com1.z0.glb.clouddn.com/FruBOA_LoH8h6R1TJ1IhuhANGUYa',
        'txt': '交通'
      },
      {
        'icon': 'http://7jptey.com1.z0.glb.clouddn.com/FnScfJ-D7_Ylygw7I9xwUax6Ccqm',
        'txt': '购物'
      },
      {
        'icon': 'http://7jptey.com1.z0.glb.clouddn.com/FqXeyyWGw68i7EvgEyydNU0l7lze',
        'txt': '日用'
      },
      {
        'icon': 'http://7jptey.com1.z0.glb.clouddn.com/FnHaAWoIicKp0_YOeawSdTvYztKb',
        'txt': '人际'
      },
      {
        'icon': 'http://7jptey.com1.z0.glb.clouddn.com/Fuo1c8N5HOSysnL16Op0xY1YABJR',
        'txt': '娱乐'
      },
      {
        'icon': 'http://7jptey.com1.z0.glb.clouddn.com/FsnNs5eFgey59ew8_z5a6ZWXqoCc',
        'txt': '收入'
      },
      {
        'icon': 'http://7jptey.com1.z0.glb.clouddn.com/FhRyF9I8LF3FMWvTSxTyXItg4jkB',
        'txt': '其他'
      }
    ],
    selectImg: "http://7jptey.com1.z0.glb.clouddn.com/FnScfJ-D7_Ylygw7I9xwUax6Ccqm",
    selectTxt: "测试"
  },
  onLoad: function (options) {
  },
  focusInp: function(){
    this.setData({
      isShow: false
    })
  },
  addTag: function (e){
    let icon = e.target.dataset.icon,
        txt  = e.target.dataset.txt
    this.setData({
      isShow: true,
      selectImg: e.target.dataset.icon,
      selectTxt: e.target.dataset.txt
    })
  },
  sendData: function(){
    wx.showToast({
      title: '提交成功'
    })
  }
})