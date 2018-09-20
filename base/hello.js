/**
 * helloコンポーネント設定を行います
 * 
 * Vueインスタンス生成時に、読み込み先のDOMとelプロパティが対応するものを
 * 自動的に紐付けます。
 */
let hello = new Vue({ // 変数への代入は必須ではないですが、後でコンポーネントを参照するために代入しています
    el: '#hello', // id="hello"のDOMが message プロパティを利用できるようになります
    data: { // templateから利用できるプロパティを設定します
        message: 'hello world',
        messageHtml: '<span>HTML文字列<span>',
        vueOrgUrl: 'https://jp.vuejs.org/',
        score: Math.random(),
        current: new Date().toLocaleString(),
    },
    /**
     * 算出プロパティを設定します。
     */
    computed: {
        rank: () => {
            if(this.score >= 0.7) {
                return '優';
            } else if(this.score >= 0.5) {
                return '普';
            } else if (0.5 > this.score){
                return '劣';
            } else {
                return '評価無効';
            }
        },
        /**
         * メソッドと比較するための算出プロパティを設定しています
         * 再描画では実行されません
         */
        randomc: () => Math.random(),
    },
    methods: {
        rerender: () => {
            console.log('update');
            console.log(this.score);
        },
        /**
         * 算出プロパティと比較するためのメソッドを設定しています
         * 再描画で再実行されることを確認できます
         */
        randomm: () => Math.random(),
    }
});