$(function() {
  // 色を変える
  $('#change-color').on('click', function(){
    $('#target').css('color', 'red');
  });
  // 文字内容の変更
  $('#change-text').on('click', function(){
    $('#target').css('color', 'red');
    $('#target').text("Hello!");
  });
  // フェードアウト
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });
  // フェードイン
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
    $('#target').css('color', 'red');
    $('#target').text("Hello!");
  });
});


  
