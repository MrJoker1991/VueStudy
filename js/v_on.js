var app = new Vue({
    el: '#app',
    data: {
        url: 'http://www.taobao.com',
        klass: 'joker',
    },
    methods: {
        onClick: function () {
            console.log("clicked");
        },
        mouseEnter: function () {
            console.log("mouseEnter");
        },
        mouserLeave: function () {
            console.log("mouserLeave");
        },
        onSubmit11: function (e) {
            e.preventDefault();
            console.log("form submit 11");
        },
        onSubmit22: function () {
            console.log("form submit 22");
        },
        onKeyUp: function (e) {
            console.log(e);
            console.log("key up up ");
        }
    }
});