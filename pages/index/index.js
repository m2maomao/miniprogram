//index.js
//获取应用实例
const app = getApp();

Page({
  data:{
    motto:'Calculator',
    userInfo:{},
    defaultSize:'default',
    disabled:false,
    iconType:'info_circle'
  },
  bindViewTap:function(){
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  toCalc:function(){
    wx.navigateTo({
      url: '../calc/calc',
    })
  },
  onLoad:function(){
    if(app.globalData.userinfo) {
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })
    } else {
      wx.getUserInfo({
        success:res => {
          this.setData({
            userInfo:res.userInfo
          })
        }
      })
    }
  }
})