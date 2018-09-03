const app = getApp();

let dateToStr = function (formatStr, date) {
    formatStr = arguments[0] || "yyyy-MM-dd HH:mm:ss";
    date = arguments[1] || new Date();
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, date.getFullYear());
    str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));
    str = str.replace(/MM/, date.getMonth() >= 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1));
    str = str.replace(/M/g, date.getMonth());
    str = str.replace(/w|W/g, Week[date.getDay()]);

    str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
    str = str.replace(/d|D/g, date.getDate());

    str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
    str = str.replace(/h|H/g, date.getHours());
    str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
    str = str.replace(/m/g, date.getMinutes());

    str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
    str = str.replace(/s|S/g, date.getSeconds());

    return str;
}

// 处理时间戳字符串
let handleTime = function (data) {
    if(data.freshtime !== '0' && data.freshtime !== undefined) {
		data.freshtime = dateToStr("yyyy-MM-dd HH:mm:ss", new Date(parseInt(data.freshtime + '000')))
    }else {
		data.createtime = dateToStr("yyyy-MM-dd HH:mm:ss", new Date(parseInt(data.createtime + '000')))
    }
    return data
}

// 取经纬度信息 
let getLocation = function (reset = false, callback) {
    if(typeof reset == 'function') {
		callback = reset
		reset = false
    }
    if(reset) {
		wx.getLocation({
		    type: 'wgs84',
		    success: (res) => {
				wx.setStorage({
				    key: "location",
				    data: res
				})
				callback && callback(res)
			},
		    fail: (err) => {
				wx.getSetting({
				    success: (res) => {
						if(res.authSetting['scope.userLocation'] == false) {
						    wx.showModal({
								title: '是否要打开设置页面重新授权',
								content: '需要获取您的公开信息(昵称，头像，地址等),请到小程序的设置中打开授权',
								confirmText: '去设置',
								success: function (res) {
								    if(res.confirm) {
										wx.openSetting({
											success: (res) => {
												if(res.authSetting['scope.userLocation']) {
												    getLocation(true, callback)
												    return
												}
											}
										})
								    }
								    callback && callback('')
								}
						    })
						}
				    }
				})
		    }
		})
	}else{
		wx.getStorage({
		    key: 'location',
		    success: function (res) {
				callback && callback(res.data)
		    },
		    fail() {
				getLocation(true, callback)
		    }
		})
	}
}


// 得到用户信息
let getUserInfo = function (reset = false, callback) {
    if (typeof reset == 'function') {
		callback = reset
		reset = false
    }
    reset = true
    if (reset) {
		wx.getUserInfo({
		    success: (res) => {
				wx.setStorage({
				    key: "mUserInfo",
				    data: res.userInfo
				})
				callback && callback(res.userInfo)
		    },
		    fail() {
				wx.getSetting({
					success: (res) => {
						if (res.authSetting['scope.userInfo'] == false) {
						    wx.showModal({
								title: '是否要打开设置页面重新授权',
								content: '需要获取您的公开信息(昵称，头像，地址等),请到小程序的设置中打开授权',
								confirmText: '去设置',
								success: function (res) {
							    	if (res.confirm) {
										wx.openSetting({
										  success: (res) => {
											if (res.authSetting['scope.userInfo']) {
											  getUserInfo(true, callback)
											  return
											}
										  }
										})
								    }
								    callback && callback('')
								}
						    })
						}
				    }
				})
		    }
		})
    }else{
		wx.getStorage({
		    key: 'mUserInfo',
		    success: function (res) {
				callback && callback(res.data)
		    },
		    fail(err) {
				getUserInfo(true, callback)
		    }
		})
	}
}

// 获取图片前缀
let getImageSocket = function (callback) {
    wx.getStorage({
		key: 'imageSocket',
		success: function (res) {
		    if (!res.data) {
				getData()
				return
			}
		    callback && callback(res.data)
		},
		fail(err) {
		    getData()
		}
    })
    function getData() {
		app.util.request({
		    url: 'entry/wxapp/Attachurl',
		    data: { sq_acid: app.sq_acid },
		    success(res) {
				wx.setStorage({
				    key: "imageSocket",
				    data: res.data
				})
				callback && callback(res.data)
			}
		})
    }
}

// 获取微擎URL
let getWxUrl = function (ourl) {
    var that = this;
    var surl = app.util.url(ourl);
    var nowPage = getCurrentPages();
    var nowPage = getCurrentPages();
	if(nowPage){
		nowPage = nowPage[getCurrentPages().length - 1];
		if(nowPage.__route__){
		  surl = surl + '&m=' + nowPage.__route__.split('/')[0];
		}
	}
	return surl;
}

let getCredit = function (reset = false, callback) {
    if(typeof reset == 'function') {
		callback = reset
		reset = false
	}
    if(reset) {
		app.util.request({
		    url: 'entry/wxapp/credit2money',
		    success(res) {
				wx.setStorage({
				    key: "credit",
				    data: res.data.data
				})
				callback && callback(res.data.data)
		    }
		})
	}else{
		wx.getStorage({
		    key: 'credit',
		    success: function (res) {
				callback && callback(res.data)
		    },
		    fail(err) {
				getCredit(true, callback)
		    }
		})
	}
}

module.exports = {
    handleTime,
    getLocation,
    getUserInfo,
    getImageSocket,
    getWxUrl,
    getCredit,
    dateToStr
}