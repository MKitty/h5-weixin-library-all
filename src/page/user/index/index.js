// import { getUserInfo } from '../../resource/utils/comment.js'
Page({
    data: {
		info: {},
		tagList: ['看书','旅行','唱歌','做甜点']
    },

    onLoad: function (options) {
		this.setData({
			info: {
				name: '许刚',
				count: 13797071376,
				headImg: 'http://xxb.xuexunbao.com.cn/201806062227018863cfc5b771da58f0ae5acd19064476b22.jpg'
			}
		})
    }
})