import Home from "./../com/Home.vue";
import Kind from "./../com/Kind.vue";
import Cart from "./../com/Cart.vue";
import User from "./../com/User.vue";
import HomeHeader from "./../com/HomeHeader.vue";
import KindHeader from "./../com/KindHeader.vue";
import CartHeader from "./../com/CartHeader.vue";
import UserHeader from "./../com/UserHeader.vue";
import MainFooter from "./../com/MainFooter.vue";
import DetailFooter from "./../com/DetailFooter.vue";
import NoFooter from "./../com/NoFooter.vue";
import KindList from "./../com/KindList.vue";
const routes = [
	{path:"/home",components:{
		header:HomeHeader,
		content:Home,
		footer:MainFooter
	}},
	{
		path:"/kind",redirect:"/kind/kindlist/1"
	},
	{
		path:"/kind",
		components:{
			header:KindHeader,
			content:Kind,
			footer:MainFooter
		},
		children:[
			{path:"kindlist/:classid",name:"kindlist",component:KindList}
		]
	},
	{path:"/cart",components:{
		header:CartHeader,
		content:Cart,
		footer:MainFooter
	}},
	{path:"/user",components:{
		header:UserHeader,
		content:User,
		footer:NoFooter
	}},{
		path:"*",redirect:"/home"
	}
];

export default routes;