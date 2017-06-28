import Vue from "vue";
import VueRouter from "vue-router";
//import MintUI from 'mint-ui'
//Vue.use(MintUI)

import 'mint-ui/lib/style.css'

import { Button,Toast  } from "mint-ui";
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button)
Vue.use(VueRouter);


import App from "./App.vue";

import "./scss/main.scss";

import router from "./router";

new Vue({
	router:router,
	render:h => h(App)
}).$mount("#app");
