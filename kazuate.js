// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
//予想

//ボタンの設置
let a1 = document.querySelector('#print');
a1.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei(event) {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = Number(event.target);
  //変数の設定
  ka =document.querySelector('span#kaisu');
  yo =document.querySelector('span#answer');
  an =document.querySelector('p#result');
  // kotae と yoso が一致するかどうか調べて結果を出力
  ka.textContent =  kaisu+1+'回目の予想'+yoso;

  if(kotae===yoso&&kaisu<3){
    an.textContent = '正解です。おめでとう！' ;
    kaisu=kaisu+1;
  }else if(kotae<yoso&&kaisu<2){
    an.textContent = 'まちがい、答えはもっと小さいですよ' ;
    kaisu=kaisu+1;
  }else if(kotae>yoso&&kaisu<2){
    an.textContent = 'まちがい、答えはもっと大きいですよ' ;
    kaisu=kaisu+1;
  }else if(kotae!==yoso&&kaisu===2){
    an.textContent = 'まちがい、残念でした答えは' +kotae+'です';
    kaisu=kaisu+1;
  }else {
    an.textContent = '答えは'+kotae+'でした。すでにゲームは終わっています';
    kaisu=kaisu+1;
  }
}