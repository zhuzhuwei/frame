// pages/question/question.js
var util = require('../../utils/util.js');
var url = util.getBaseUrl();

Page({



  /**
   * 页面的初始数据
   */
  data: {
  
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log(options);

    var category = options.category;

    console.log(category);
    var category = options.category;
    var searchUrl = url+'/user/get_by_category_id_question?category='+category;
    this.getMovieListData(searchUrl);
  },

  onMoreTap: function (event) {

    console.log(event.target.dataset);

    var categoryid = event.target.dataset.categoryid;
    var nextid = event.target.dataset.nextid;
    var searchUrl = url+'/user/get_by_category_id_question?category=' + categoryid + "&nextid=" + nextid;
    this.getMovieListData(searchUrl);
  },


  getMovieListData: function (url) {
    var that = this;
    wx.request({
      url: url,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res);
        var readyData = {};
        readyData = {
          title: res.data.data.title,
          body: res.data.data.body,
          next: res.data.data.next,
          category: res.data.data.category
        }
        that.setData(readyData);

      },
      fail: function (error) {
        // fail
        console.log(error)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})