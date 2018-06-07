// import { getUserInfo } from '../../resource/utils/comment.js'
Page({
    data: {
		info: {},
		scoreList: []
    },

    onLoad: function (options) {
		this.setData({
			info: {
				name: '许刚',
				id: 1,
				headImg: 'http://xxb.xuexunbao.com.cn/201806062227018863cfc5b771da58f0ae5acd19064476b22.jpg',
				count: 200
			},
			scoreList: [{
				id:1,
				title: '每日签到',
				time: '2018-5-23 08:24',
				score: '+30'
			},{
				id:1,
				title: '座位预约',
				time: '2018-5-23 08:24',
				score: '-10'
			},{
				id:1,
				title: '每日签到',
				time: '2018-5-23 08:24',
				score: '+30'
			},{
				id:1,
				title: '空间预约-完成',
				time: '2018-5-23 08:24',
				score: '+30'
			}]
		})
    }
})