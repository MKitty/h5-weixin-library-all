// import { getUserInfo } from '../../resource/utils/comment.js'
let animationShowHeight = 300; 
Page({
    data: {
		floor: ['1F','2F','3F','4F','5F','6F'],
		floorIndex: 0,
		spaceList: [{
			id: 1,
			name: '阅览室C101',
			timeList: [{
				id: 1,
				time: '8:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '9:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '10:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '11:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '12:00',
				status: 2      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '13:00',
				status: 2      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '14:00',
				status: 2      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '15:00',
				status: 2      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '16:00',
				status: 2      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '17:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '18:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '19:00',
				status: 1      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '20:00',
				status: 1      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '21:00',
				status: 1      // 0过期/关闭， 1未预约， 2已预约
			}]
		},{
			id: 1,
			name: '阅览室B103',
			timeList: [{
				id: 1,
				time: '8:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '9:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '10:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '11:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '12:00',
				status: 1      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '13:00',
				status: 1      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '14:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '15:00',
				status: 0      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '16:00',
				status: 1      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '17:00',
				status: 1      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '18:00',
				status: 1     // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '19:00',
				status: 2      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '20:00',
				status: 2      // 0过期/关闭， 1未预约， 2已预约
			},{
				id: 1,
				time: '21:00',
				status: 2      // 0过期/关闭， 1未预约， 2已预约
			}]
		}],
		dates: '',
    },

    onLoad: function (options) {
		var today = new Date();                                // 获取当日日历
        var year = today.getFullYear(),
            month = today.getMonth() + 1,
            day = today.getDate();

        this.setData({
            dates: year + '-' + month + '-' + day
		})
    },

    bindFloorPickerChange: function (e) {
        this.data.floor.forEach((ele, index) => {
            // if(ele == casArray[e.detail.value]){
            //     code = ele.code
            // }
        });
	    this.setData({
	    	floorIndex: e.detail.value,
	    })
	},

    bindDateChange: function (e) {
	    this.setData({
	        dates: e.detail.value
	    })
    },
})