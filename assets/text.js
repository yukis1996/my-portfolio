$(function () {
	$('.ef').textillate({
    // ループのオンオフ、falseの場合、outは発動しない
    loop: false,
  
    // テキストが置き換えられるまでの表示時間
    minDisplayTime: 2000,
  
    // 遅延時間
    initialDelay: 0,
  
    // アニメーションが自動的にスタートするかどうか
    autoStart: true,
  
    // フェードインのエフェクトの詳細設定
    in: {
      // エフェクトの名前（animate.cssをご参照下さい）
      effect: 'bounceIn',
  
      // 遅延時間の指数
      delayScale: 1.5,
  
      // 文字ごとの遅延時間
      delay: 100,
  
      // trueにすることでアニメーションをすべての文字に同時に適用される
      sync: false,
  
      // trueにすることで文字を順番にではなく、ランダムに入ってくるようにする
      // (注：syncがtrueの場合は無効になる)
      shuffle: false
    },
  
    // フェードアウトのエフェクトの詳細設定(同上)
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
    }
  });
  $(".em").textillate({
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 1000,
    autoStart: true,
    in: {
      effect: 'bounceIn',
      delayScale: 1.5,
      delay: 100,
      sync: false,
      shuffle: false
    },
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
    }
  })
})