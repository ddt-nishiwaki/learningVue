new Vue({
    el: '#app',
    data: {
        /**
         * これはテンプレートから双方向バインディングによって
         * オブジェクトが設定されることを想定しています
         * テンプレート側のvalueには次のような値が設定されているでしょう
         *
         *      { name: 名前, size: 大きさ }
         */
        unit: {}
    },
    computed: {
        /**
         * unit が {} のままであれば結果は undefined : undefined となります。
         * unit にテンプレート側から nameプロパティとsizeプロパティが設定された場合は
         * その値が表示されるでしょう
         */
        detail: function() {
            return this.unit.name + ' : ' + this.unit.size;
        }
    }
});