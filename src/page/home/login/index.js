// import { getUserInfo, getImageSocket, getLocation } from '../../resource/utils/comment.js'
import { Index } from 'index-model.js'

var index = new Index()
let app = getApp();
let animationShowHeight = 300; 
const LENGTH = 10;

Page({
	data: {
	    casArray: [],
	    casIndex: 0,
        code: '',
        schoolList: [],
        userName: '',
        password: ''
	},
	
	onLoad: function(){
		var socketOpen = false
        var socketMsgQueue = []
        let data = {
            flag: 1
        }

        //建立连接
        wx.connectSocket({
          url: app.url
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
            let _this = this
            if(res && res.data){
                var jsonStr= res.data;
                jsonStr = jsonStr.replace(" ","");
                if(typeof jsonStr!= 'object'){
                    jsonStr= jsonStr.replace(/\ufeff/g,"");    //重点
                    var obj = JSON.parse(jsonStr);
                    
                    let arr = []
                    obj.list.forEach((item,index)=>{
                        arr.push(item.school)
                    })
                    _this.setData({
                        casArray: arr,
                        schoolList: obj.list,
                        code: obj.list[0].code
                    })
                    console.log('收到服务器内容：:',obj.list)
                }
            }
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
        let code = "";
        this.schoolList.forEach((ele, index) => {
            if(ele.school == casArray[e.detail.value]){
                code = ele.code
            }
        });
	    this.setData({
	    	casIndex: e.detail.value,
            code: code
	    })
	 
	},

    listenerPasswordInput(e){
        this.setData({
            password: e.detail.value
        })
    },

    listenerUserNameInput(e){
        this.setData({
            userName: e.detail.value
        })
    },

	login(){
        if(!this.data.code){
            wx.showToast({
                title:'请选择学校',
                image: '../../../resource/images/warn.png',
            })
            return
        }
        if(!this.data.userName || !this.data.userName.trim()){
            wx.showToast({
                title:'请输入账号',
                image: '../../../resource/images/warn.png',
            })
            return
        }
        if(!this.data.password || !this.data.password.trim()){
            wx.showToast({
                title:'请输入密码',
                image: '../../../resource/images/warn.png',
            })
            return
        }

        let data = {
            flag: 1001,
            code: 't4s5c1a0',
            userName: 'admin',
            password: 'test1234'
        }

        let socketOpen = false
        let socketMsgQueue = []

        //建立连接
        // wx.connectSocket({
        //   url: app.url
        // })

        // //连接成功
        // wx.onSocketOpen((res) => {
        //     socketOpen = true
        //     sendSocketMessage(data)
        //     socketMsgQueue = []
        // })

        // const sendSocketMessage = (msg)=> {
        //     if (socketOpen) {
                wx.sendSocketMessage({
                  data:JSON.stringify(data)
                })
            // } else {
            //     socketMsgQueue.push(msg)
            // }
        // }

        //接收数据
        wx.onSocketMessage((res) => {
            if(res){
                wx.showToast({
                    title:'登录成功',
                    icon: 'success',
                    duration: 2000,
                    complete: () => {
                        wx.closeSocket()
                        wx.switchTab({
                            url: "/src/page/home/index/index",
                        })
                    }
                })
            }
        })

        //连接失败
        wx.onSocketError(() => {
            console.log('websocket连接失败！');
        })
	}
})