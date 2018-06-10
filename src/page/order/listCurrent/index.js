// import { getUserInfo } from '../../resource/utils/comment.js'
Page({
    data: {
      type: null,
      num: null,
      list: []
    },

    onLoad: function (options) {
    	let type = options.type,
    		status = options.status;
		      
      let list = [{
        type: 0,                     // 0空间预约， 1座位预约， 2讲座预约
        cutOffTime: '10:20:35',
        address: '巴南校区图书馆2F阅览室C202-015D',
        time: '2018-05-15 12:00-15:30',
        number: 'sqxqtsg220180515C202015D24',
        status: 0,                   // 0预约成功， 1签到成功， 2取消预约成功， 3被动暂离， 4签离成功
      },{
        type: 1,                     // 0空间预约， 1座位预约， 2讲座预约
        cutOffTime: '10:20:35',
        address: '巴南校区图书馆2F阅览室C202-015D',
        time: '2018-05-15 12:00-15:30',
        number: 'sqxqtsg220180515C202015D24',
        status: 1,                   // 0预约成功， 1签到成功， 2取消预约成功， 3被动暂离， 4签离成功
      },{
        type: 2,                     // 0空间预约， 1座位预约， 2讲座预约
        cutOffTime: '10:20:35',
        address: '巴南校区图书馆2F阅览室C202-015D',
        time: '2018-05-15 12:00-15:30',
        number: 'sqxqtsg220180515C202015D24',
        status: 2,                   // 0预约成功， 1签到成功， 2取消预约成功， 3被动暂离， 4签离成功
      },{
        type: 0,                     // 0空间预约， 1座位预约， 2讲座预约
        cutOffTime: '10:20:35',
        address: '巴南校区图书馆2F阅览室C202-015D',
        time: '2018-05-15 12:00-15:30',
        number: 'sqxqtsg220180515C202015D24',
        status: 3,                   // 0预约成功， 1签到成功， 2取消预约成功， 3被动暂离， 4签离成功
      },{
        type: 0,                     // 0空间预约， 1座位预约， 2讲座预约
        cutOffTime: '10:20:35',
        address: '巴南校区图书馆2F阅览室C202-015D',
        time: '2018-05-15 12:00-15:30',
        number: 'sqxqtsg220180515C202015D24',
        status: 4,                   // 0预约成功， 1签到成功， 2取消预约成功， 3被动暂离， 4签离成功
      }]
      
      this.setData({
        list : list,
        type: options.type || 1,
        status: options.status || 1,
        num: 12
      })
    }
})