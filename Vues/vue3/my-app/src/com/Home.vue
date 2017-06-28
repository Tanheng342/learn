<template >
	<div >
		我是首页
		<mt-button type="default" @click="test()">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger">danger</mt-button>
		<mt-swipe :auto="6000">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui';
export default {
	methods:{
		test(){
//			alert(1)
			Toast({
			  message: '点击按钮',
			  position: 'bottom',
			  duration: 5000
			})
		}
	}
};

</script>
<style >
	.mint-swipe{
		height: 150px;
		background-color: #0f0;
	}
	.mint-swipe-indicator{
		opacity: 1;
	}
	.mint-swipe-indicator.is-active{
		background-color: #fff;
	}
</style>