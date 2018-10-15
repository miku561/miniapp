import config from "../../utils/config"
Page({
  data: {
    musicType: '冥想',
    lastTime: '',
    state: '开始',
    isStart: false,
    musicId: 0,
    initTime: 600,
    copyTime: 600,
    urlLink: config.common.musicUrl,
    musicList:[],
    musicObj: '',
    timer: ''
  },
  onUnload: function(){
    this.data.musicObj.destroy()
  },
  onLoad: function (options) {
    let that = this,
        idList = ["761305", "761315", "761319","761317"],
        arr = []
    for(let i = 0 ; i < idList.length; i++) {
      arr.push({ url: that.data.urlLink + idList[i] + ".mp3" })
    }
    this.setData({
      musicList: arr,
      musicObj: wx.createInnerAudioContext(),
      lastTime: that.formTime(that.data.copyTime)
    })  
    // this.data.musicObj.src = that.data.musicList[0].url
    this.data.musicObj.src = that.data.musicList[0].url
    this.data.musicObj.obeyMuteSwitch = false

    this.data.musicObj.onEnded( () => {
      let i = that.data.musicId + 1
      if( i == that.data.musicList.length ){
        this.data.musicObj.src =that.data.musicList[0].url
      }else{
        this.data.musicObj.src =that.data.musicList[i].url
      }
      setTimeout( () => {
        this.data.musicObj.play()
      },300)
    })
  },
  startMusic: function(){
    let that = this
    if(that.data.state == "重置") { 
      that.setData({
        state: '开始',
        isStart: false,
        initTime: that.data.copyTime,
        lastTime: that.formTime(that.data.copyTime)
      })
      return
    }
    if(!that.data.isStart){
      that.data.musicObj.autoplay = true
      that.data.musicObj.play()
      wx.setKeepScreenOn({
        keepScreenOn: true
      })
      that.setData({
        state: '暂停',
        isStart: true
      })
      that.initTimeFunc()
    }else{
      clearInterval(that.data.timer)
      that.data.musicObj.pause()
      that.setData({
        state: '开始',
        isStart: false
      })
    }
  },
  initTimeFunc: function(){
    let that = this
    this.setData({
      timer: setInterval( () =>{
        that.setData({
          initTime: that.data.initTime - 1 ,
          lastTime: that.formTime( that.data.initTime - 1 )
        })
      }, 1000)
    })
  },
  formTime: function(data){
    let that = this
    if(data > 0){
      let minitue = parseInt( data / 60 ) < 10 ? "0" + parseInt( data / 60 ) : parseInt( data / 60 ) 
      let second = ( data - minitue * 60 ) < 10 ? "0" + ( data - minitue * 60 ) : data - minitue * 60 
      return minitue + " : " + second
    }else{
      that.data.musicObj.pause()
      clearInterval(that.data.timer)
      that.setData({
        state: '重置'
      })
      return "00 : 00"
    }
  }
})