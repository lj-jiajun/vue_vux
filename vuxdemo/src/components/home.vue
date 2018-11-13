<template>
	<div>
       	<tab active-color="#999" default-color="#666">
        	<tab-item v-for="(item,index) in tabList" :selected="index===0" :key="index">
        		<router-link :to="item.path" tag="p">{{item.title}}</router-link>
        	</tab-item>
      	</tab>
      <router-view></router-view>
    </div>
</template>

<script>
	import {Tab,TabItem} from 'vux'
	import {mapState} from 'vuex'
	export default {
		name:"Home",
		components: {
		    Tab,
		    TabItem
		},
		data(){
			return {
			}
		},
		created(){
			
//			this.$store.state.arr
		},
		computed:{
			...mapState(['tabList'])
		}
	}
</script>

<style>
	.router-link-active{
		color: #000;
	}
</style>