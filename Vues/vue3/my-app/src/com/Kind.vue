<template>
	<div class="kind">
		<ul class="navList">
			<li v-for="item in list" >
				<router-link :to="{name:'kindlist',params:{classid:item.classID}}" replace>{{item.className}}</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	import MyAjax from "./../md/MyAjax.js";
	import { Indicator } from 'mint-ui';
export default {
		data(){
			return {
//				goodsid:100
				list:[]
			}
		},
		mounted(){
			var that = this;
			
//			if(localStorage.getItem("kindList")){
//				that.list = JSON.parse(localStorage.getItem("kindList"));
//			}else{
	Indicator.open();
				var url = "http://datainfo.duapp.com/shopdata/getclass.php";
				MyAjax.fetch(url,(data)=>{
					console.log(data)
					that.list = data;
					Indicator.close();
					localStorage.setItem("kindList",JSON.stringify(data));
				},(err)=>{console.log(err)})
//			}
			
		}
	};

</script>
