var app = getApp();
import { store } from '../../resource/utils/store.js'

class Base{
    constructor(){
		this.baseRequestUrl = ''
		this.store = store          // 一个简单的仓库
    }

    request(params){
		var url = params.url;
		var that = this;
		// 数据上传时带上acid
		if (app.sq_acid) {
		    if(!params.data) {
				params.data = { sq_acid: app.sq_acid}
		    }else{
				if (typeof params.data == 'object') {
				  params.data.sq_acid = app.sq_acid
				}
		    }
		}
		app.util.request({
		    url: url,
		    data:params.data,
		    method:params.type,
		    showLoading:false,
		    header: params.header,
		    success:function(res){
				params.sCallback && params.sCallback(res);
		    },
		    fail:function(err){
				that._processError(err);
		    }
		})
    }

    _processError(err) {
		if(err.data.errno === 1) {
		    wx.showModal({
				title: '提示',
				content: err.data.message,
				success: function (res) {
				    if (res.confirm) {

				    } else if (res.cancel) {

				    }
				}
		    })
		}
    }

    setNavigationBarTitle() {
		wx.getStorage({
		    key: 'title',
		    success: function (res) {
				if (!res.data) {
				  getTitle()
				  return
				}
				wx.setNavigationBarTitle({
				  title: res.data
				})
		    },
		    fail(err) {
				getTitle()
		    }
		})

		var getTitle = () => {
		    var param = {
				url: 'entry/wxapp/getTitle',
				sCallback: (res) => {
				    wx.setNavigationBarTitle({
						title: res.data.data
				    })
				    wx.setStorage({
						key: "title",
						data: res.data.data
				    })
				}
		    }
		    this.request(param)
		}
	}

    /*获得元素上的绑定的值*/
    getDataSet(event, key) {
		return event.currentTarget.dataset[key];
    }
}
export {Base};