var Vue = require('vue');
 var car = require('./App.vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);
Vue.use(require('vue-resource'));


var App = Vue.extend({})


var router = new VueRouter()


router.map({
    '/show': {
        component: car
    }
})


router.start(App, '#app')