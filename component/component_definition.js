/**
 * Vueのコンポーネントは
 * Vueのスコープとして指定したDOM内で扱えるカスタムタグを定義するものです
 * 定義に必要な最低限の設定はカスタムタグの名前と展開される実際のDOMテンプレート文字列です
 */
/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 *    コンポーネントのグローバル 登録
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * 全てのVueインスタンスから呼び出すことができるコンポーネントです
 */
Vue.component('global-component', {
  template: '<div>hello global component!</div>'
});
/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 *    コンポーネントのローカル登録
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * 特定のVueインスタンスのみ利用できるコンポーネントです
 * インスタンス生成時にプロパティとして設定します
 */
let LocalComponent = {
  template: '<div>hello local component!</div>'
};

/**
 * Vueの対象となるスコープを指定する
 */
new Vue({
    el: '#app',
    components: {
      'local-component': LocalComponent
    }
});

new Vue({
  el: '#another-app'
})