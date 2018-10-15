Page({
  data: {
    randNum: 0,
    repeatNum: 0,
    Nums: 5
  },
  onLoad: function (options) {
    this.getRandom()
  },
  getRandom: function (nums) {
    let str = ''
    for (let i = 0; i < this.data.Nums; i++){
      str += parseInt(Math.random() * 10)
    }
    this.setData({
      randNum: str
    })
  },
  removeNum: function () {
    if (this.data.Nums > 1){
      this.setData({
        Nums: --this.data.Nums,
        repeatNum: 0 
      })
      this.getRandom()
    }
  },
  freshNum: function () {
    this.setData({
      repeatNum: ++this.data.repeatNum
    })
    this.getRandom()
  },
  addeNum: function () {
    this.setData({
      Nums: ++this.data.Nums,
      repeatNum: 0
    })
    this.getRandom()
  },
})