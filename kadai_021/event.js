// btn id(HTML要素)を定数へ代入
const addBtn = document.getElementById('btn');

// text id(HTML要素)を定数へ代入
const txt = document.getElementById('text');

// ボタンクリック時にイベント処理
addBtn.addEventListener('click', () => {
    setTimeout(() => {
        // 2秒(2000ミリ秒)の待ち時間を設定し、非同期処理を実行する
        txt.textContent = 'ボタンをクリックしました';
    }, 2000);
});