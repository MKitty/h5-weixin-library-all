// import { getUserInfo, getImageSocket, getLocation } from '../../resource/utils/comment.js'
import { Index } from 'index-model.js'

var index = new Index()
let app = getApp();
let animationShowHeight = 300; 
const LENGTH = 10;

Page({
	data: {
	    casArray: ['中南民族大学', '武汉大学', '重庆大学'],
	    casIndex: 0
	},
	
	onLoad: function(){
		var socketOpen = false
        var socketMsgQueue = []
        let data = {
            flag: 1,
			// code: '9fcdb26bd2888529b',
			// UserName: 'admin',
			// password: 'test1234'
        }

        //建立连接
        wx.connectSocket({
          url: 'wss://tang.eternalstop.com/wss'
        })

		//连接成功
        wx.onSocketOpen((res) => {
            socketOpen = true
            sendSocketMessage(data)
            socketMsgQueue = []
        })

        const sendSocketMessage = (msg)=> {
            if (socketOpen) {
	            wx.sendSocketMessage({
	              data:JSON.stringify(msg)
	            })
            } else {
            	socketMsgQueue.push(msg)
            }
        }
		//接收数据
        wx.onSocketMessage((res) => {
            console.log('收到服务器内容：' + res.data)
        })

        //连接失败
	    wx.onSocketError(() => {
	        console.log('websocket连接失败！');
	    })
	},
	
	forgetPassword(){
		wx.navigateTo({
	        url: "/src/page/user/passwordForget/index",
    	})
	},

	bindCasPickerChange: function (e) {
	    this.setData({
	    	casIndex: e.detail.value
	    })
	 
	},

	login(){
		wx.showToast({
            title:'登录成功',
            icon: 'success',
            duration: 2000,
            complete: () => {
            	console.log('11111')
                wx.switchTab({
			        url: "/src/page/home/index/index",
		    	})
            }
        })
	}


	

})