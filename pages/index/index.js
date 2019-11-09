let animation = wx.createAnimation({
  duration: 2000,
  timingFunction: 'linear'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rotateData: {},
    turning: false
  },
  start() {
    let degree = 0;
    if (!this.data.turning) {
      degree = Math.floor(Math.random() * 3600);
      animation.rotate(-degree).step();
      this.setData({ turning: false, rotateData:animation.export()});
    } else {
      wx.showModal({
        title: '警告',
        content: '不要太贪心哦，你已经抽过了!',
      })
      return;
    }
    let bonus = ['50元', '100元', '150元', '200元', '250元', '300元', '500元'];
    setTimeout(()=>{
      let bonusIndex = Math.floor(degree % 360 / 51.4286 % 7);
      wx.showModal({
        title: '中奖咯',
        content: '恭喜您，中了' + Math.abs(bonusIndex + 1) + '等奖，奖金' + bonus[bonusIndex],
      });
    },2000);
  }
})