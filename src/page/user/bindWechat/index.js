// import { getUserInfo } from '../../resource/utils/comment.js'
Page({
    data: {
		count:''
    },

    onLoad: function (options) {

    },

    listenerCountInput(){
		this.setData({
            count: e.detail.value,
        })
	},
})