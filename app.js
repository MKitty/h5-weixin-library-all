// import { ToastPannel } from './resource/components/toast/toast'
App({
	onLaunch: function () {

	},
	onShow: function () {
		// console.log(getCurrentPages())
	},
	onHide: function () {
		// console.log(getCurrentPages())
	},
	onError: function (msg) {
		console.log(msg)
	},
    sq_acid: '',    // 系统有默认对应的公众号id，运营多公众号才需要修改,
                    // 小程序同步哪个公众号的id,
                    // 如复制手机端链接https://yun.0418it.com/app/index.php?i=43&c=entry&do=index&m=yc_youliao ,
                    // 那么43就是要同步公众号的id
	util: require('src/resource/js/util.js'),
	siteInfo : {
		"name": "",
		"uniacid": "2",
		"acid": "2",
		"multiid": "2",
		"version": "1.0",
		"siteroot": "https://tongcheng.iweiji.cc/app/index.php",
		"design_method": "3"
	},

})