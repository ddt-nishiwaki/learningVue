/**
 * eventコンポーネント設定を行います
 * 
 * ここでは Vueのイベント設定を見ていきます
 */
let event = new Vue({
    el: '#event',
    data: {
        message: '日付を表示してください',
        placeholder: 'エンターを押してください',
    },
    methods: {
        /*
         * 自身のプロパティを変更するメソッドを設定します。
         * 今回はクリックイベントに対してこのメソッドを呼び出します
         * 参照: event.html
         * 
         * イベントオブジェクトとは別に、任意のデータを受け取る場合は
         * 任意の引数を設定します。テンプレート側から$eventと設定されたものがイベントオブジェクトとして渡ってきます
         */
        insertDate: function(anyData, eventObject){
            console.log(anyData); // 引数を設定するとeventオブジェクトが渡されるので利用できます
            console.log(eventObject); // 引数を設定するとeventオブジェクトが渡されるので利用できます
            this.message = new Date().toLocaleString() // 自身のプロパティを書き換えると紐づくDOMも再描画されます
        },
        /**
         * イベント発生位置を確認するためのメソッドを設定します。
         * これによりイベントのpreventDefaultやstopPropagationの動作を確認します。
         */
        clickHandler: function(message) {
            alert(`${message} でクリックイベントを捕捉しました`)
        },
        /**
         * キーボード入力に対するハンドラを設定します
         * 細かな指定はディレクティブで行っています
         */
        enterKey: function() {
            alert('キー入力を受け付けました');
        }
    }
});