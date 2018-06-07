// import { getUserInfo } from '../../resource/utils/comment.js'
Page({
    data: {
		info: {}
    },

    onLoad: function (options) {
		this.setData({
			info: {
				title: '暂停开放通知',
				time: '2018年5月16日',
				content: '2018年5月18日，图书馆一楼会议室在上午08:00-12:00，暂停对外开放，请各位注意安排预约时间。'
			}
		})
    }
})