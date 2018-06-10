// import { getUserInfo, getImageSocket, getLocation } from '../../resource/utils/comment.js'
import { Index } from 'index-model.js'

var index = new Index()
let app = getApp();
let animationShowHeight = 300; 
const LENGTH = 10;

Page({
	data: {
		code: '',
		count: null
	},
	
	onLoad: function(){
		
	},
	
	listenerCountInput(e){
		this.setData({
            count: e.detail.value,
        })
	},

	listenerCodeInput(e){
		this.setData({
            code: e.detail.value,
        })
	},

	reset(){
		if(!this.data.count){
			wx.showToast({
	            title:'请输入账号',
	            image: '../../../resource/images/warn.png',
	        })
	        return
		}
		if(!this.data.code){
			wx.showToast({
	            title:'请输入验证码',
	            image: '../../../resource/images/warn.png',
	        })
	        return
		}
		wx.redirectTo({
	        url: "/src/page/user/passwordReset/index?from='home'",
    	})
		
	}
	

})