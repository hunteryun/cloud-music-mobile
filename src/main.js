// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// ajax
import axios from 'axios'

// Muse-UI
import MuseUI from 'muse-ui'    // js
import 'muse-ui/dist/muse-ui.css'  // css

// vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' // css

Vue.config.productionTip = false

Vue.use(MuseUI);   // 加载MuseUI插件
Vue.use(VueAwesomeSwiper); // 加载 VueAwesomeSwiper轮播图插件

Vue.prototype.$http = axios;

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});


