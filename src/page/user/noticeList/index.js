// import { getUserInfo } from '../../resource/utils/comment.js'
Page({
    data: {
		noticeList: []
    },

    onLoad: function (options) {
		this.setData({
			noticeList:[{
				id: 1,
				title: "暂停开放通知",
				content: '2018年5月18日，图书馆一楼会议室在上午08:00-12:00，暂停对外开放，请各位注......',
				day: 16,
				month: 2018.05
			},{
				id: 1,
				title: "暂停开放通知",
				content: '2018年5月18日，图书馆一楼会议室在上午08:00-12:00，暂停对外开放，请各位注......',
				day: 16,
				month: 2018.05
			}]
		})
    },

    goToDetail(e){
		let id = e.currentTarget.dataset.item.id;
		wx.navigateTo({
	        url: `/src/page/user/noticeDetail/index?id=${id}`
    	})
    }
})