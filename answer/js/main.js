var answer = {
  answer: function () {
    $('.answerBox ul').on('click', 'li', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
    var n = 0;
    $('.nexBtn').click(function () {
      //check if any answer is selected
      if ($('.answerBox ul li.active').length == 0) {
        alert('请选择答案');
        return;
        }
      n++;
      console.log($('.answerBox ul li'));
      //remove both answerbox active class
      $('.answerBox ul li').removeClass('active');
      if (n > 9) {
        location.href = '../result.html';
      } else {
        $('.answerBox .answerA').hide();
        $('.answerBox ul').hide();
        $('.answerBox .answerA').text(data[n].a);
        for (var i = 0; i < data[n].q.length; i++) {
          $('.answerBox ul li').eq(i).find('span').text(data[n].q[i]);
        }
        if (n >= 9) {
          $(this).addClass('active');
        }
        $('.answerBox .answerA').show();
        $('.answerBox ul').show();
      }

    });
  }
}