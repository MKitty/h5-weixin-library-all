Page({
    data: {

    },

    onLoad: function (options) {
		
    },

    goToDetail(e){
        // type 1为当前预约， 2为历史预约， 3为违纪预约
        // status 1为所有预约， 2为座位预约， 3为空间预约， 4为讲座预约
		let type = e.currentTarget.dataset.type;
		let status = e.currentTarget.dataset.status;

        let url = ''
        switch (type) {
            case 1:
                url = `/src/page/order/listCurrent/index?type=${type}&status=${status}`
                break;
            default:
                url = `/src/page/order/list/index?type=${type}&status=${status}`
                break;
        }

		wx.navigateTo({
	        url: url
    	})
    }
})