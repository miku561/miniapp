// pages/rgbToHx/rgbToHx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: "000000",
    r: 0,
    g: 0,
    b: 0,
    result: "000000",
    bgColor: "#000000"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  changeInp: function(e){
    let value = 0,
        id = e.currentTarget.dataset.id,
        val = e.detail.value
        if(val > 255 ){ 
          val = 255 
        }else{
          val = parseInt(val)
        }
    if(id == 1){
      this.setData({ r: val })
    }
    if(id == 2){
      this.setData({ g: val })
    }
    if(id == 3){
      this.setData({ b: val })
    }
  },
  changeOpt: function(e){
    let rNum1 = this.selectNum(this.data.r / 16),
        rNum2 = this.selectNum(this.data.r % 16),
        gNum1 = this.selectNum(this.data.g / 16),
        gNum2 = this.selectNum(this.data.g % 16),
        bNum1 = this.selectNum(this.data.b / 16),
        bNum2 = this.selectNum(this.data.b % 16)
    let str = rNum1 + "" + rNum2 + "" + gNum1 + "" + gNum2 + "" + bNum1 + "" + bNum2
    this.setData({
      result: str,
      bgColor: "#"+str
    })
  },
  selectNum: function(num){
    let val = ""
    switch(parseInt(num)){
      case 15:{ val = 'F'; break; }
      case 14:{ val = 'E'; break; }
      case 13:{ val = 'D'; break; }
      case 12:{ val = 'C'; break; }
      case 11:{ val = 'B'; break; }
      case 10:{ val = 'A'; break; }
      default:{ val = parseInt(num); break; }
    }
    return val 
  }
})