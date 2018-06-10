// import { getUserInfo, getImageSocket, getLocation } from '../../resource/utils/comment.js'
import { Index } from 'index-model.js'

var index = new Index()
let app = getApp();
let animationShowHeight = 300; 
const LENGTH = 10;

Page({
	data: {
		password: '',
		count: null,
		passwordConfirm: '',
		from: ''
	},
	
	onLoad: function(options){
		if(options && options.from){
			this.setData({
				from: options.from
			})
		}
	},
	
	listenerCountInput(){
		this.setData({
            count: e.detail.value,
        })
	},

	listenerPasswordInput(e){
		this.setData({
            password: e.detail.value,
        })
	},

	listenerPasswordAgainInput(e){
		this.setData({
            passwordConfirm: e.detail.value
        })
	},
	
	confirm(){
		if(this.data.from){
			wx.showToast({
	            title:'密码重置成功，请重新登录',
	            icon: 'success',
	            duration: 2000,
	            complete: () => {
	                wx.redirectTo({
				        url: "/src/page/home/login/index"
			    	})
	            }
	        })
		}else{
			wx.showToast({
	            title:'密码修改成功',
	            icon: 'success',
	            duration: 2000,
	            complete: () => {
	                wx.switchTab({
				        url: "/src/page/user/index/index"
			    	})
	            }
	        })
		}
		
	}

})