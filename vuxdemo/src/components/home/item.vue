<template>
	<div>
      	<swiper height="240px" auto :list="list"></swiper>
      	<div>
	      	<marquee :item-height="60" :duration="1000">
		      	<marquee-item v-for="(item,index) in list" :key="index">{{item.title}}</marquee-item>
		    </marquee>
	    </div>
	    <div>
	    	<panel :list="news" type="5"></panel>
	    </div>
    </div>
</template>

<script>
	import {Swiper,Marquee,MarqueeItem,Panel} from 'vux'
	export default{
		name:'Item',
		components:{
			Swiper,
			Marquee,
			MarqueeItem,
			Panel
		},
		data(){
			return{
				msg:'01',
				list:[],
				news:[]
			}
		},
		created(){
			// 通过jsonp的方式获取数据
			this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then((res)=>{
				this.list = res.focus.filter(function(item,index){
					return  item.picInfo.length !=0
				}).map(function(item,index){
					return {
						url: item.link,
						img: item.picInfo[0].url,
						title: item.title
					}
				})
				this.news = res.news.filter(function(item,index){
					return  item.picInfo.length !=0
				}).map(function(item,index){
					return {
						desc: item.digest,
						src: item.picInfo[0].url,
						title: item.title
					}
				})
				console.log(this.list);
				console.log(this.news);
			})
			
		},
		watch:{
			$route:{
				handler(){
					console.log(this.$route.params.id)
				},
				deep:true
			}
		}
	}
</script>

<style lang="less">
	.vux-swiper-desc{
		font-size: 26px !important;
	}
	.vux-marquee{
		font-size: 32px;
		line-height: 60px;
	}
	.weui-media-box .weui-media-box_appmsg{
		padding: 30px 0;
	}
	.weui-media-box .weui-media-box_appmsg .weui-media-box__hd{
		width: 170px;
		height: 120px;
	}
	.weui-media-box .weui-media-box_appmsg .weui-media-box__bd{
		h4{
			font-size: 28px;
			line-height: 60px;
		}
		p{
			font-size: 20px;
		}
	}
</style>