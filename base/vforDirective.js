new Vue({
    el: '#app',
    data: {
        // v-forディレクティブ動作確認用のデータ
        books: [
            { isbn: '000-0-0000-0000-0', title:'book1', price:1000 },
            { isbn: '111-1-1111-1111-1', title:'book2', price:2111 },
            { isbn: '222-2-2222-2222-2', title:'book3', price:3222 },
            { isbn: '333-3-3333-3333-3', title:'book4', price:4333 }
        ]
    }
});