const getStorage = function (val) {
  wx.getStorage({
    key: val,
    success: function(res) {
      return res
    }
  })
} 

const saveStorage = function (key, val) {
  wx.setStorage({
    key: key,
    data: val,
    success: function (res) {
      return res
    }
  })
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  getStorage,
  saveStorage
}
