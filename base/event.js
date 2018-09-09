/**
 * eventコンポーネント設定を行います
 * 
 * ここでは Vueのイベント設定を見ていきます
 */
let event = new Vue({
    el: '#event',
    data: {
        message: '日付を表示してください',
    },
    methods: {
        /*
         * 自身のプロパティを変更するメソッドを設定します。
         * 今回はクリックイベントに対してこのメソッドを呼び出します
         * 参照: event.html
         */
        insertDate: function(eventObject){
            console.log(eventObject); // 引数を設定するとeventオブジェクトが渡されるので利用できます
            this.message = new Date().toLocaleString() // 自身のプロパティを書き換えると紐づくDOMも再描画されます
        }
    }
});