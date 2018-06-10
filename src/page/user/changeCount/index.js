// import { getUserInfo } from '../../resource/utils/comment.js'
Page({
    data: {
		info: {}
    },

    onLoad: function (options) {
		this.setData({
			info: {
				headImg: 'http://xxb.xuexunbao.com.cn/201806062227018863cfc5b771da58f0ae5acd19064476b22.jpg',
				name: '许刚',
				phone: 13797071376
			}
		})
    },

    change(){
    	wx.redirectTo({
	        url: "/src/page/home/login/index"
    	})
    }  
})