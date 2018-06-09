// import { getUserInfo } from '../../resource/utils/comment.js'
Page({
    data: {
		info: {},
		tagList: ['看书','旅行','唱歌','做甜点'],
        hiddenModal: true,
        showModalStatus: false,
        animationData: null
    },

    onLoad: function (options) {
		this.setData({
			info: {
				name: '许刚',
				count: 13797071376,
				headImg: 'http://xxb.xuexunbao.com.cn/201806062227018863cfc5b771da58f0ae5acd19064476b22.jpg'
			}
		})
    },

	// 我的学币
    goToMyMoney(){
    	wx.navigateTo({
	        url: `/src/page/user/money/index`
    	})
    },

	// 我的预约码
    goToMyQrcode(){
    	wx.navigateTo({
	        url: `/src/page/user/qrcode/index`
    	})
    },

	// 公告提醒
    goToNotice(){
    	wx.navigateTo({
	        url: `/src/page/user/noticeList/index`
    	})
    },

	// 我的权限
    goToMyAuth(){
    	wx.navigateTo({
	        url: `/src/page/user/auth/index`
    	})
    },
	
	// 修改密码
    changePassword(){
    	wx.navigateTo({
	        url: `/src/page/user/password/index`
    	})
    },

    // 重置密码
	resetPassword(){
    	this.setData({
            hiddenModal: false
        })
    },
    // 确认重置密码
    listenerConfirm(){
        this.setData({
            hiddenModal: true
        })
    },
    // 取消重置密码
    listenerCancel(){
        this.setData({
            hiddenModal: true
        })
    },

	// 绑定微信号
    bindWechat(){
    	wx.navigateTo({
	        url: `/src/page/user/bindWechat/index`
    	})
    },

	// 切换账号
    changeCount(){
    	wx.navigateTo({
	        url: `/src/page/user/changeCount/index`
    	})
    },

	// 客服
    goToServicer(){
    	wx.navigateTo({
	        url: `/src/page/user/custormService/index`
    	})
    },

    // 退出登录,显示对话框
    loginOut: function () {
        // 显示遮罩层
        var animation = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        })
        this.animation = animation
        animation.translateY(300).step()
        this.setData({
            animationData: animation.export(),
            showModalStatus: true
        })
        setTimeout(function () {
            animation.translateY(0).step()
            this.setData({
                animationData: animation.export()
            })
        }.bind(this), 200)
    },

    //隐藏对话框
    hideModal: function () {
        // 隐藏遮罩层
        var animation = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        })
        this.animation = animation
        animation.translateY(300).step()
        this.setData({
            animationData: animation.export(),
        })
        setTimeout(function () {
            animation.translateY(0).step()
            this.setData({
                animationData: animation.export(),
                showModalStatus: false
            })
        }.bind(this), 200)
    }, 

    loginOutConfirm(){
        this.hideModal()
    }
})