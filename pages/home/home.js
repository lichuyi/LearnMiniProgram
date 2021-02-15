// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath:''
  },
  handleChooseAlbum() {
    //系统API，让用户在相册中选择图片（或者拍照）
    wx.chooseImage({
      success:(res)=>{
        console.log(res);
        //1.取出路径
        const path = res.tempFilePaths[0]
        //2.设置imagePath
        this.setData({
          imgPath:path
        })
      }
    })
  }
})