<template>
  <div id="app">
  	<view-box>
  		<x-header slot="header" :left-options="{showBack: false}">
  			<span slot="left"></span>
  			<div slot="overwrite-title">
  				<i></i>
  				<input type="text" placeholder="刘强东"/>
  			</div>
  			<span slot="right"></span>
  		</x-header>
  		<router-view></router-view>
  		<tabbar slot="bottom">
  			<tabbar-item selected link="/home">
	        <img slot="icon" src="./assets/index_1.png">
	        <span slot="label">首页</span>
	      </tabbar-item>
	      <tabbar-item link="/video">
	        <img slot="icon" src="./assets/sp.png">
	        <span slot="label">视频</span>
	      </tabbar-item>
	      <tabbar-item link="/zhibo">
	        <img slot="icon" src="./assets/zhibo.png">
	        <span slot="label">直播</span>
	      </tabbar-item>
	      <tabbar-item link="/my">
	        <img slot="icon" src="./assets/my.png">
	        <span slot="label">我</span>
	      </tabbar-item>
  		</tabbar>
  	</view-box>
  </div>
</template>

<script>
	import {ViewBox,XHeader,Tabbar,TabbarItem} from 'vux'
	export default {
	  name: 'App',
	  components:{
	  	ViewBox,
	  	XHeader,
	  	Tabbar,
	  	TabbarItem
	  }
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	
	html, body {
	  height: 100%;
	  width: 100%;
	  overflow-x: hidden;
	}
	input{
		border: none;
		outline: none;
	}
	#app{
		height: 100%;
		width: 100%;
		.vux-header{
			height: 78px;
			background:#e22829;
			.vux-header-left{
				left: 19px;
				top: 23px;
				width: 72px;
				height: 32px;
				background: url(assets/wangyi.png) no-repeat;
				background-size: 100% 100%;
			}
			.vux-header-title-area{
				width: 488px;
				height: 100%;
				div{
					width: 440px;
					height: 56px;
					margin: 10px 0 11px 48px;
					input{
						width: 410px;
						height: 100%;
						padding: 0 15px;
						font-size: 26px;
						line-height: 56px;
						color: #936a78;
						background: #eb5557;
						border-radius: 8px;
					}
					input::-webkit-input-placeholder{
						padding-left: 160px;
						color: #936a78;
					}
				}
			}
			.vux-header-right{
				top: 18px;
				right: 16px;
				width: 40px;
				height: 40px;
				background: url(assets/24.png) no-repeat;
				background-size: 100% 100%;
			}
		}
		.weui-tabbar{
			position: fixed;
			left: 0;
			bottom: 0;
			height: 78px;
			.weui-tabbar__item{
				padding-top: 12px;
				.weui-tabbar__icon{
					width: 32px;
					height: 30px;
				}
				.weui-tabbar__label{
					height: 36px;
					font-size: 18px;
					line-height: 36px;
				}
			}
			.weui-bar__item_on{
				.weui-tabbar__label{
					color: #cd0d22 !important;
				}
			}
		}
	}
</style>
