// import { getUserInfo, getImageSocket, getLocation } from '../../resource/utils/comment.js'
import { Index } from 'index-model.js'

var index = new Index()
let app = getApp();
let animationShowHeight = 300; 
const LENGTH = 10;

Page({
	data: {
		password: '',
		count: null,
		passwordConfirm: ''
	},
	
	onLoad: function(){
		
	},
	
	listenerCountInput(){
		this.setData({
            count: e.detail.value,
        })
	},

	listenerPasswordInput(e){
		this.setData({
            password: e.detail.value,
        })
	},

	listenerPasswordAgainInput(e){
		this.setData({
            passwordConfirm: e.detail.value
        })
	},
	

})