/**
 * helloコンポーネント設定を行います
 * 
 * Vueインスタンス生成時に、読み込み先のDOMとelプロパティが対応するものを
 * 自動的に紐付けます。
 * 今回は id="hello"のDOMが message プロパティを利用できるようになります
 */
let hello = new Vue({
    el: '#hello',
    data: {
        message: 'hello world'
    }
});