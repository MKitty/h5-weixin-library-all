// import { getUserInfo, getImageSocket, getLocation } from '../../resource/utils/comment.js'
import { Index } from 'index-model.js'

var index = new Index()
let app = getApp();
let animationShowHeight = 300; 
const LENGTH = 10;

Page({
	data: {
		advs: ['https://m.360buyimg.com/babel/jfs/t20695/118/711678007/159042/81b387b2/5b157234Na31baa10.png',
			'https://m.360buyimg.com/babel/jfs/t20887/304/737271706/39873/327236a2/5b166eb7Nba515084.png',
			'https://m.360buyimg.com/babel/jfs/t22222/31/459858983/48865/8768dca/5b0e5419N0855116e.jpg',
			'https://m.360buyimg.com/babel/jfs/t21301/283/505859890/95478/7f6a9596/5b0f9953Nd4ac7ccc.jpg'
		],
		noticeList: [{
			id: 1,
			content: '1、2018年5月18日，图书馆一楼会议室在上午08:00- 12:00，暂停对外开放，请各位注意调整预约。'
		},{
			id: 2,
			content: '2、2018年5月19日，图书馆因检查更换设备，暂停对外开放使用，请各位注意调整预约时间。'
		}],
		orderList: [{
			id: 1,
			content: '图书馆一楼A区阅读区',
			time: "2018/5/18 09:00-13:00",
			status: 0
		},{
			id: 1,
			content: '图书馆三楼C区多功能区',
			time: "2018/5/18 09:00-13:00",
			status: 1
		},{
			id: 1,
			content: '图书馆二楼D区多功能区 ',
			time: "2018/5/18 09:00-13:00",
			status: 0
		},{
			id: 1,
			content: '图书馆二楼D区多功能区',
			time: "2018/5/18 09:00-13:00",
			status: 0
		}]
	},
	
	onLoad: function(){

	},

	// 扫描二维码
	scanCode() {
	    wx.scanCode({
	        success: (res) => {
	        	console.log('res:',res)
	        	// wx.redirectTo({
          //          url: `/yc_youliao/page/coupon/detail/index?id=${res.result}`
          //       })
	        },
	        fail: (res) => {
	        	wx.showModal({
	                title: '扫描错误',
	                content: res,
	                showCancel: false,
	                confirmColor: '#333',
	                success: function (res) {
	                    if (res.confirm) {
	                        console.log('用户点击确定')
	                    } else if (res.cancel) {
	                        console.log('用户点击取消')
	                    }
	                }
	            })
	        }
	    })
	},

	createOrder(e){
		let name = e.currentTarget.dataset.name, url = '';
		switch (name) {
			case 'space':
				url = "/src/page/order/create/space/index/index"
				break;
			case 'seat':
				url = "/src/page/order/create/seat/index/index"
				break;
			case 'lecture':
				url = "/src/page/order/create/lecture/index/index"
				break;
		}
		wx.navigateTo({
	        url: url
    	})
	}

})