
new WOW().init();

//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin(){
var width = $(window).width();
if(width <= 1024) {//横幅が1024px以下の場合
$(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
$(".has-child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
var parentElem =  $(this).parent();// aタグから見た親要素の<li>を取得し
$(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
$(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
return false;//リンクの無効化
});
}else{//横幅が1024px以上の場合
$(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
$(".has-child").removeClass('active');//activeクラスを削除
$('.has-child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
}
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});
// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

// .p-drawer__iconがクリックされた時
jQuery('.p-drawer__icon').on('click',function(){
//  .p-drawer__iconの次の要素を開いて、スライドトグルを機能するように指定
jQuery(this).next().slideToggle();
})

jQuery('.p-drawer__icon').on('click',function(e){
e.preventDefault();
jQuery('.p-drawer__icon').toggleClass('is-active');
return false;
});












