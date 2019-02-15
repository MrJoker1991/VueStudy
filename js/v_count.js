var app = new Vue({
    el: '#app',
    data: {
        chinese: 120,
        english: 135,
        math: 100,
    },
    computed: {
        sum: function(){
            return this.chinese + this.english + this.math;
        },
        average: function(){
            return Math.round(this.sum / 3);
        }
    }
});