Page({
    data: {

    },

    onLoad: function (options) {
		
    },

    goToDetail(e){
		let type = e.currentTarget.dataset.type;
		let status = e.currentTarget.dataset.status;

		wx.navigateTo({
	        url: status == 1 ?  `/src/page/order/listAll/index?type=${type}&status=${status}`
	        				 :  `/src/page/order/list/index?type=${type}&status=${status}`
    	})
    }
})