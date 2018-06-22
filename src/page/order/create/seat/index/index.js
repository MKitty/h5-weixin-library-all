// import { getUserInfo } from '../../resource/utils/comment.js'
let animationShowHeight = 300; 
Page({
    data: {
		floor: ['1F','2F','3F','4F','5F','6F'],
		floorIndex: 0,
		room: ['阅览室A103','阅览室B102','阅览室C105','阅览室D106'],
		roomIndex: 0,
		tableList: [{
			name: '01',
			id: 1,
			seatList: [{
				name: 'A',
				id: 1,
				status: 0       // 0有人， 1空闲， 2已预约
			},{
				name: 'B',
				id: 2,
				status: 1       // 0有人， 1空闲， 2已预约
			},{
				name: 'C',
				id: 3,
				status: 2       // 0有人， 1空闲， 2已预约
			},{
				name: 'D',
				id: 4,
				status: 0       // 0有人， 1空闲， 2已预约
			}]
		},{
			name: '02',
			id: 2,
			seatList: [{
				name: 'A',
				id: 5,
				status: 0       // 0有人， 1空闲， 2已预约
			},{
				name: 'B',
				id: 6,
				status: 1       // 0有人， 1空闲， 2已预约
			},{
				name: 'C',
				id: 7,
				status: 2       // 0有人， 1空闲， 2已预约
			},{
				name: 'D',
				id: 8,
				status: 0       // 0有人， 1空闲， 2已预约
			}]
		},{
			name: '03',
			id: 3,
			seatList: [{
				name: 'A',
				id: 9,
				status: 0       // 0有人， 1空闲， 2已预约
			},{
				name: 'B',
				id: 10,
				status: 1       // 0有人， 1空闲， 2已预约
			},{
				name: 'C',
				id: 11,
				status: 2       // 0有人， 1空闲， 2已预约
			},{
				name: 'D',
				id: 12,
				status: 0       // 0有人， 1空闲， 2已预约
			}]
		},{
			name: '04',
			id: 4,
			seatList: [{
				name: 'A',
				id: 13,
				status: 0       // 0有人， 1空闲， 2已预约
			},{
				name: 'B',
				id: 14,
				status: 1       // 0有人， 1空闲， 2已预约
			},{
				name: 'C',
				id: 15,
				status: 2       // 0有人， 1空闲， 2已预约
			},{
				name: 'D',
				id: 16,
				status: 0       // 0有人， 1空闲， 2已预约
			}]
		},{
			name: '05',
			id: 5,
			seatList: [{
				name: 'A',
				id: 17,
				status: 0 
			},{
				name: 'B',
				id: 18,
				status: 1 
			},{
				name: 'C',
				id: 19,
				status: 2 
			},{
				name: 'D',
				id: 20,
				status: 0 
			}]
		},{
			name: '06',
			id: 6,
			seatList: [{
				name: 'A',
				id: 21,
				status: 0 
			},{
				name: 'B',
				id: 22,
				status: 1 
			},{
				name: 'C',
				id: 23,
				status: 2 
			},{
				name: 'D',
				id: 24,
				status: 0 
			}]
		},{
			name: '07',
			id: 7,
			seatList: [{
				name: 'A',
				id: 25,
				status: 0 
			},{
				name: 'B',
				id: 26,
				status: 1 
			},{
				name: 'C',
				id: 27,
				status: 2 
			},{
				name: 'D',
				id: 28,
				status: 0 
			}]	
		}],
		dates: '',
		showDate: false,
		weekList: ['一','二','三','四','五','六','日'],          // 星期池
        dayList: [],                                           // 日期池
        year: '',                                              // 当前年
        currentMonth: '',                                      // 当前月
        month: '',                                             // 当前月
        day: '',                                               // 选中日
        today: '',                                             // 当前日
        chooseDay: '',                                         // 选中日
        WeekDay: '1',                                          // 当前日期是本周几
        eventList:[],                                          // 事件池
        currentMonthList:[],                                   // 当月日历
    },

    onLoad: function (options) {
		let arr = this.data.tableList;
			
		arr.forEach((item, index) => {
			var arr1 = [],
				arr2 = [];
			if(item.seatList && item.seatList.length){
				item.seatList.forEach((ele,i)=>{
					if(i< item.seatList.length/2){
						arr1.push(ele)
					}else{
						arr2.push(ele)
					}
				})
			}
			
			item.arr1 = arr1
			item.arr2 = arr2
		});
		console.log('arr:',arr)
		this.setData({
			tableList: arr
		})

		var today = new Date();                                // 获取当日日历
        var year = today.getFullYear(),
            month = today.getMonth() + 1,
            day = today.getDate();

        this.setData({
			year: year,
			month: month,
			currentMonth: month,
			day: day,
            today: day,
            dates: year + '-' + month + '-' + day
		})
        this.fetchMonthData(year, month)                     // 获取本月日历
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

	bindRoomPickerChange: function (e) {
        this.data.room.forEach((ele, index) => {
            // if(ele.school == casArray[e.detail.value]){
            //     code = ele.code
            // }
        });
	    this.setData({
	    	roomIndex: e.detail.value,
	    })
	},

	// 阻止蒙层下滚动
	preventD(){

	},

	showDate(){
		var _this = this;
		
		var animation = wx.createAnimation({  
			duration: 200,  
			timingFunction: "linear",  
			delay: 0  
		});  
		_this.animation = animation;  
		animation.translateY(animationShowHeight).step(); 

		_this.setData({  
			animationData: animation.export(),  
			showDate: !this.data.showDate
		});

		setTimeout(function () {  
			animation.translateY(0).step()  
			_this.setData({  
				animationData: animation.export()  
			})  
		}.bind(_this), 200);  
	},

	closeDateMask(){
		var _this = this;
		var animation = wx.createAnimation({  
			duration: 200,  
			timingFunction: "linear",  
			delay: 0  
		});  

		_this.animation = animation;  
		animation.translateY(animationShowHeight).step();

		_this.setData({  
			animationData: animation.export(),  
		});

		setTimeout(function () {  
			animation.translateY(0).step();  
			_this.setData({  
				animationData: animation.export(),  
				showDate: false 
			})  
		}.bind(_this), 200);  
	},

	// 获取月日历
    fetchMonthData(year, month) {
    	var year = year ? year : this.data.year;
    	var month = month ? month : this.data.month;

        var ret = []

        var firstDay = new Date(year, month -1, 1)
        var firstDayWeekDay = firstDay.getDay()
        if(firstDayWeekDay === 0) firstDayWeekDay = 7

        var lastDayLastMonth = new Date(year , month -1, 0)
        var lastDayOfLastMonth = lastDayLastMonth.getDate()

        var preMonthDayCount = firstDayWeekDay - 1

        var lastDay = new Date(year, month , 0);
        var lastDate = lastDay.getDate()

        for(var i=0; i<7*6; i++){
            var date = i + 1 - preMonthDayCount;
            var showDate = date
            var thisMonth = month

            // 上一月
            if(date <= 0){
                thisMonth = month -1
                showDate = lastDayOfLastMonth + date
            }
            // 下一月
            else if (date > lastDate) {
                thisMonth = month + 1
                showDate = showDate - lastDate
            };

            if(thisMonth === 0) thisMonth = 12
            if(thisMonth === 13) thisMonth = 1

            ret.push(showDate)
        }

        var arr = []

        // 去除非本月日历
        ret.forEach((element, index) =>{
            if(index < preMonthDayCount){
                element = ''
            }else if(index >20 && element <15){
                element = ''
            }
            arr.push(element)
        })

        this.setData({
            currentMonthList: arr
        })
    },

    chooseDay(e){
    	let item = e.currentTarget.dataset.choosed
    	if(item < this.data.day && this.data.currentMonth == this.data.month){
    		return
    	}else{
    		this.setData({
	    		day: item
	    	})
    	}
    },

    changeMonth(e){
    	let type = e.currentTarget.dataset.type

    	if(type-0){
			this.setData({
				year: this.data.month == 12 ? this.data.year + 1 : this.data.year,
				month: this.data.month == 12 ? 1 : this.data.month + 1,
				day: 1
			})
			this.fetchMonthData()
    	}else{
    		if(this.data.currentMonth < this.data.month){
    			this.setData({
					month: this.data.month - 1,
					day: 1
				})
				this.fetchMonthData()
    		}
    	}
    },

    bindDateChange: function (e) {
	    this.setData({
	        dates: e.detail.value
	    })
    },

    confirm(e){
    	wx.navigateTo({
	        url: "/src/page/order/create/seat/confirm/index"
    	})
    }
})