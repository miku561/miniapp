
Page({
  data: {
    isText: false,
    nowImage: 'http://7jptey.com1.z0.glb.clouddn.com/FhOfAcvrUU8LccDVfT0rlUAOlsxz',
    nowText: '开心',
    textareaText: '',
    emojiData:[
      { id: 1, txt:'幸福', url: "http://7jptey.com1.z0.glb.clouddn.com/Fi-5HsHeWb2Kytp1YT82KQzN6V9A"},
      { id: 2, txt: '开心', url: "http://7jptey.com1.z0.glb.clouddn.com/FrNRSWShkVjvzM97h6qLwWVYbcJL"},
      { id: 3, txt:'元气', url: "http://7jptey.com1.z0.glb.clouddn.com/FpXJRV4_7MAcFl6THdYtY9G9CHmq"},
      { id: 4, txt:'兴奋', url: "http://7jptey.com1.z0.glb.clouddn.com/Fmzz1-IgIYLdXiNVQ2PrIR-BHWdT"},
      { id: 5, txt:'剁手', url: "http://7jptey.com1.z0.glb.clouddn.com/FhZaghHqUuQ_UOXesmTTWTiapT6V"},
      { id: 6, txt:'努力', url: "http://7jptey.com1.z0.glb.clouddn.com/FuDtZ6DD0Dsir3caGamfiZlXykAK"},
      { id: 7, txt:'悠闲', url: "http://7jptey.com1.z0.glb.clouddn.com/FtAaKBj0wNDO-tjcesw2IaWyDFbX"},
      { id: 8, txt:'迷茫', url: "http://7jptey.com1.z0.glb.clouddn.com/FuYiESvm7baqtwzZ-wCDwqjRgCh7"},
      { id: 9, txt:'震惊', url: "http://7jptey.com1.z0.glb.clouddn.com/FrLEv8X4JhDwMrN_6N_1J9k7BAM2"},
      { id: 10,txt:'劳累', url: "http://7jptey.com1.z0.glb.clouddn.com/FjB6Fud62Sewt2bBmyC-wFzJFqdU"},
      { id: 11,txt:'高冷', url: "http://7jptey.com1.z0.glb.clouddn.com/FuEiFF380qnhHvdo2RYY7aqXuPNZ"},
      { id: 12,txt:'羞涩', url: "http://7jptey.com1.z0.glb.clouddn.com/FsbjZtSQNcFMInmcjpQhWFvxoNJs"},
      { id: 13,txt:'内疚', url: "http://7jptey.com1.z0.glb.clouddn.com/Fq7UQkxJFbvItDF6yGi0guHCvgMd"},
      { id: 14,txt:'叹气', url: "http://7jptey.com1.z0.glb.clouddn.com/FnyX7ig0qK-5Ry26OGZqNse2qZvN"},
      { id: 15,txt:'逃避', url: "http://7jptey.com1.z0.glb.clouddn.com/FrvG3_FJKVJjRn2lUA9aksRk_ULf"},
      { id: 16,txt:'郁闷', url: "http://7jptey.com1.z0.glb.clouddn.com/FlG9oWLK4ZiLN9Rsyvha8SXN_Gx3"},
      { id: 17,txt:'伤心', url: "http://7jptey.com1.z0.glb.clouddn.com/FjQGwpebn8IALnPehXFTvSh5L-x5"},
      { id: 18,txt:'烦躁', url: "http://7jptey.com1.z0.glb.clouddn.com/FpiAka6ohCZKDP0hlFyI7niwHbAp"},
      { id: 19,txt:'愤怒', url: "http://7jptey.com1.z0.glb.clouddn.com/Fp8cM-ep1dBppzEIsDdJLAtbaC6J"},
      { id: 20,txt:'哭泣', url: "http://7jptey.com1.z0.glb.clouddn.com/FkH8iViM1OR9EcjbshUv7sdixHAN"}
    ]
  },
  recordText: function(e){
    this.setData({
      isText: true,
      nowImage: e.currentTarget.dataset.image,
      nowText: e.currentTarget.dataset.txt
    })
  },
  inpListener: function(e){
    this.setData({
      textareaText: e.detail.value
    })
  },
  cancel: function(){
    this.setData({
      isText: false,
      nowImage: "",
      nowText: "",
      textareaText: ''
    })
  },
  subMit: function(){
    console.log('提交数据成功')
  },
  showMore: function() {
    wx.navigateTo({
      url: './emotionDetail/emotionDetail'
    })
  }
})