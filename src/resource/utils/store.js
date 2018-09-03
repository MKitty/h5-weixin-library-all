const app = getApp()
// 获取用户标识
let getSeid = function (state, callback) {
  if (state.seid === -1) {
    wx.getUserInfo({
      success: (data) => {
        wx.login({
          success: (res) => {
            app.util.request({
              url: 'entry/wxapp/getSeid',
              data: {
                code: res.code,
                ...data.userInfo
              },
              success(res) {
                state.seid = res.data.data
                callback && callback(res.data.data)
              },
              fail(err) {

              }
            })
          }
        })
      }
    })
  } else {
    callback(state.seid)
  }
}
// 积分换取的值
let getCredit = function (state, callback) {
  if (state.credit === -1) {
    app.util.request({
      url: 'entry/wxapp/credit2money',
      success(res) {
        state.credit = res.data.data
        callback && callback(res.data.data)
      }
    })
  } else {
    callback(state.credit)
  }
}
const state = {
  seid: -1,
  credit: -1
}
let store = function (action,callback) {
  switch (action.type) {
    case 'GET_SEID':
      getSeid(state, callback)
      return
    case 'GET_CREDIT':
      getCredit(state, callback)
      return
    default:
      return state;
  }
}
module.exports = {
  store
}