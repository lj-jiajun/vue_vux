import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var store = new Vuex.Store({
	state:{
		tabList:[
			{
				title:'头条',
				path:'/home/toutiao'
			},
			{
				title:'视频',
				path:'/home/shiping'
			},
			{
				title:'新时代',
				path:'/home/xinshidai'
			},
			{
				title:'娱乐',
				path:'/home/yule'
			},
			{
				title:'体育',
				path:'/home/tiyu'
			},
			{
				title:'要问',
				path:'/home/yaowen'
			},
			{
				title:'段子',
				path:'/home/duanzi'
			}
		]
	},
	mutations:{
		
	}
})

export default store;
