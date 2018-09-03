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
        status: 0,                   // 0已完成， 1取消预约成功， 2已违规
        reason: '未签离'
      },{
        type: 1,                     // 0空间预约， 1座位预约， 2讲座预约
        cutOffTime: '10:20:35',
        address: '巴南校区图书馆2F阅览室C202-015D',
        time: '2018-05-15 12:00-15:30',
        number: 'sqxqtsg220180515C202015D24',
        status: 1,                   // 0已完成， 1取消预约成功， 2已违规
        reason: '未签离'
      },{
        type: 2,                     // 0空间预约， 1座位预约， 2讲座预约
        cutOffTime: '10:20:35',
        address: '巴南校区图书馆2F阅览室C202-015D',
        time: '2018-05-15 12:00-15:30',
        number: 'sqxqtsg220180515C202015D24',
        status: 2,                   // 0已完成， 1取消预约成功， 2已违规
        reason: '未签离'
      },{
        type: 0,                     // 0空间预约， 1座位预约， 2讲座预约
        cutOffTime: '10:20:35',
        address: '巴南校区图书馆2F阅览室C202-015D',
        time: '2018-05-15 12:00-15:30',
        number: 'sqxqtsg220180515C202015D24',
        status: 1,                   // 0已完成， 1取消预约成功， 2已违规
        reason: '未签离'
      },{
        type: 0,                     // 0空间预约， 1座位预约， 2讲座预约
        cutOffTime: '10:20:35',
        address: '巴南校区图书馆2F阅览室C202-015D',
        time: '2018-05-15 12:00-15:30',
        number: 'sqxqtsg220180515C202015D24',
        status: 2,                   // 0已完成， 1取消预约成功， 2已违规
        reason: '未签离'
      }]
      
      this.setData({
        list : list,
        type: options.type || 2,
        status: options.status || 1,
        num: 12
      })
    }
})