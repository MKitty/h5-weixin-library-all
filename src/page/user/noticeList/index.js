// import { getUserInfo } from '../../resource/utils/comment.js'
let app = getApp();
Page({
    data: {
		noticeList: [],
        code: ''
    },

    onLoad: function (options) {
        let code = wx.getStorageSync('userCode')
        this.setData({
            code: code
        })

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



		// var socketOpen = false
  //       var socketMsgQueue = []
        let data = {
            flag: 1002,
            code: code,
            start: 1,
            end: 5
        }

        //建立连接
        wx.connectSocket({
          url: app.url
        })

		// //连接成功
  //       wx.onSocketOpen((res) => {
  //           socketOpen = true
  //           sendSocketMessage(data)
  //           socketMsgQueue = []
  //       })

  //       const sendSocketMessage = (msg)=> {
  //           if (socketOpen) {
	            wx.sendSocketMessage({
	                data:JSON.stringify(data)
	            })
            // } else {
            // 	socketMsgQueue.push(msg)
            // }
        // }

		//接收数据
        wx.onSocketMessage((res) => {
            let _this = this
            if(res && res.data){
                var jsonStr= res.data;
                jsonStr = jsonStr.replace(" ","");
                if(typeof jsonStr!= 'object'){
                    jsonStr= jsonStr.replace(/\ufeff/g,"");    //重点
                    var obj = JSON.parse(jsonStr);
                    
                    
                    console.log('收到服务器内容：:',obj)
                }
            }
        })

        //连接失败
	    wx.onSocketError(() => {
	        console.log('websocket连接失败！');
	    })
    },

    goToDetail(e){
		let id = e.currentTarget.dataset.item.id;
		wx.navigateTo({
	        url: `/src/page/user/noticeDetail/index?id=${id}`
    	})
    }
})