// btn id(HTML要素)を定数へ代入
const addBtn = document.getElementById('btn');

 // text要素を取得
 const txt = document.getElementById('text');
 
// HTML要素がクリックされたときに処理を実行
addBtn.addEventListener('click', () => {
    // 作成したtext要素にテキストを追加
    txt.textContent = 'ボタンをクリックしました';
});