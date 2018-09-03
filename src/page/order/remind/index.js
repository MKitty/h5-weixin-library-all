// import { getUserInfo } from '../../resource/utils/comment.js'
var app = getApp();
Page({
    data:{
	    winHeight:"",//窗口高度
	    currentTab:0, //预设当前项的值
	    scrollLeft:0, //tab标题的滚动条位置
	    list: [],
	    isAllChecked: false,
	    hiddenModal: true
    },

    onLoad: function() { 
	    var that = this; 
	    // 高度自适应
	    wx.getSystemInfo( { 
	        success: function( res ) { 
		        var clientHeight=res.windowHeight,
		            clientWidth=res.windowWidth,
		            rpxR=750/clientWidth;
		        var calc=clientHeight*rpxR-180;
		        that.setData( { 
		            winHeight: calc 
		        }); 
	        } 
	    });

	    let list = [{ 
	    	id: 1,
			title: '巴南校区图书馆1F阅览室A103-001A',
			time: '5月14日 12:00-15:30',
			countDown: '00:20:45'
	    },{ 
	    	id: 2,
			title: '巴南校区图书馆1F阅览室A103-001A',
			time: '5月14日 12:00-15:30',
			countDown: '00:20:45'
	    },{ 
	    	id: 3,
			title: '巴南校区图书馆1F阅览室A103-001A',
			time: '5月14日 12:00-15:30',
			countDown: '00:20:45'
	    },{ 
	    	id: 4,
			title: '巴南校区图书馆1F阅览室A103-001A',
			time: '5月14日 12:00-15:30',
			countDown: '00:20:45'
	    },{ 
	    	id: 5,
			title: '巴南校区图书馆1F阅览室A103-001A',
			time: '5月14日 12:00-15:30',
			countDown: '00:20:45'
	    }];

	    list.forEach((item,index) => {
	    	item.isChecked = false
	    })

	    this.setData({
	    	list: list
	    })

	    console.log('this.data.list:',this.data.list)

    }, 

    // 滚动切换标签样式
    switchTab:function(e){
	    this.setData({
	        currentTab:e.detail.current
	    });
	    this.checkCor();
    },

    // 点击标题切换当前页时改变样式
    swichNav:function(e){
	    var cur=e.target.dataset.current;
	    if(this.data.currentTaB==cur){
	    	return 
	    }else{
	        this.setData({
	        	currentTab:cur
	        })
	    }
    },

    //判断当前滚动超过一屏时，设置tab标题滚动条。
    checkCor:function(){
	    if (this.data.currentTab>4){
		    this.setData({
		    	scrollLeft:300
		    })
	    }else{
		    this.setData({
		    	scrollLeft:0
		    })
	    }
    },

    checkItem(e){
		let id = e.currentTarget.dataset.id;
		let list = this.data.list
		list.forEach((item,index)=>{
			if(id == item.id){
				item.isChecked = !item.isChecked
			}
		})

		this.setData({
			list: list
		})
    },

	// 全选 & 取消全选
    checkAllItem(){
    	let list = this.data.list
    	let arr = list.filter((ele,i)=> ele.isChecked == true)

		list.forEach((item,index)=>{
			item.isChecked = arr.length == list.length ? false : true
		})

		this.setData({
			list: list,
			isAllChecked: arr.length == list.length ? false : true
		})
    },

    cancelAllItem(){
    	let arr = this.data.list.filter((ele,i)=> ele.isChecked == true)
    	if(!arr.length){
			wx.showToast({
	            title:'请选择预约单',
	            image: '../../../resource/images/warn.png',
	        })
	        return
    	}else{
    		this.setData({
				hiddenModal: false
			})
    	}
    },

    listenerConfirm(){
    	wx.showToast({
            title:'取消成功',
            icon: 'success',
            duration: 2000,
            complete: () => {
                
            }
        })
    	this.setData({
			hiddenModal: true
		})
    },

    listenerCancel(){
    	this.setData({
			hiddenModal: true
		})
    },

})