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
        password: '',
        ready: false
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
                }
            }
        })


        //连接失败
	    wx.onSocketError((e) => {
            console.log('e:',e)
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
        if(this.data.userName && this.data.userName.trim()){
            this.setData({
                ready: e.detail.value && e.detail.value.trim().length ? true : false
            })
        }
    },

    listenerUserNameInput(e){
        this.setData({
            userName: e.detail.value
        })
        if(this.data.password && this.data.password.trim()){
            this.setData({
                ready: e.detail.value && e.detail.value.trim().length ? true : false
            })
        }
    },

	login(){
        wx.switchTab({
            url: "/src/page/home/index/index",
        })
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
            flag: 2,
            code: this.data.code,
            UserName: this.data.userName,
            password: this.data.password
        }
        
        // 发送数据
        wx.sendSocketMessage({
            data: JSON.stringify(data)
        })

        // 接收数据
        wx.onSocketMessage((res) => {
            if(res && res.data){
                var jsonStr = res.data;
                jsonStr = jsonStr.replace(" ","");
                if(typeof jsonStr != 'object'){
                    jsonStr= jsonStr.replace(/\ufeff/g,"");    //重点
                    var obj = JSON.parse(jsonStr);
                    
                    if(obj.status == 200){
                        wx.showToast({
                            title:'登录成功',
                            icon: 'success',
                            duration: 2000,
                            success: () => {
                                wx.setStorage({
                                    key:"userCode",
                                    data: this.data.code
                                })
                                setTimeout(()=>{
                                    wx.switchTab({
                                        url: "/src/page/home/index/index",
                                    })
                                },2000)
                            }
                        })
                    }
                }
            }
        })

        //连接失败
        wx.onSocketError(() => {
            console.log('websocket连接失败！');
        })
	}
})