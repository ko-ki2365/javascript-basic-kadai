// 乱数を代入
let num = Math.floor(Math.random() * 10000);


// 条件式(3と5の倍数)
if (num % 3 === 0 && num % 5 === 0){
    console.log('3と5の倍数です')
}
// 条件式(3の倍数)
else if (num % 3 === 0){
    console.log('3の倍数です');
}
// 条件式(5の倍数)
else if (num % 5 === 0){
    console.log('5の倍数です');
}
// 条件式(上記いずれでもない場合、変数numを出力)
else {
    console.log(num);
}