var jsFunction = {
  //function getCookie
  getCookie: function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  //function setCookie
  setCookie: function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },


  start: function () {
    //if name exist in cookie
    if (jsFunction.getCookie("name") != "") {
      $('.sBtn').click(function () {
        location.href = './answer/answer.html';
      });
    }else {
      $('.sBtn').click(function () {
        $('.mark').show();
      });
  
      $('.djks').click(function () {
        var name = $('input').val();
        //store name in cookie
        jsFunction.setCookie("name", name, 1);
        location.href = './answer/answer.html';
      });
    }


    
  },
  answer2: function () {
    $('.answerBox ul').on('click', 'li', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
    var n = 0;
    $('.nexBtn').click(function () {
      n++;
      console.log(data[n]);
      if (n > 9) {
        location.href = './result.html';
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
  },
  result: function () {
    //get name from cookie
    var name = jsFunction.getCookie("name");
    $('.reBox h3 span').text(name);

    var index = Math.floor((Math.random()*teaData.length)); 
    $('.imgBox img').attr('src','images/'+teaData[index].t+'.png');
    $('.tea-name div').text(teaData[index].t);
    $('.content div').text(teaData[index].r);
  }
}