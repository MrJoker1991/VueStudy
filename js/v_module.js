//全局组件
// Vue.component('alert', {
//     template: '<button @click="onClick">点一下</button>',
//     methods:{
//         onClick: function(){
//             alert("ccccclicked");
//         }
//     }
// });

var alert_componet = {
    template: '<button @click="onClick">点一下</button>',
    methods:{
        onClick: function(){
            alert("ccccclicked");
        }
    }  
}

var app = new Vue({
    el: '#seg1',
    //局部组件
    components: {
        'alert': alert_componet
    }
});
var app = new Vue({
    el: '#seg2',
});
var app = new Vue({
    el: '#seg3',
});