
Page({

  data: {
    listAll:[
      {"name":"所有商品",id:0},
      {"name":"医美",id:1},
      {"name":"休闲",id:2},
      {"name":"健身",id:3},
      {"name":"体检",id:4},
      {"name":"日用品",id:5},
      {"name":"健康食品",id:6},
      {"name":"辣木系列",id:7}
    ],
    currentItem:''
  },
  tagChoose:function(e){
    var that = this
    var id = e.currentTarget.dataset.id;
    console.log(id)
    //设置当前样式
    that.setData({
    'currentItem':id
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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