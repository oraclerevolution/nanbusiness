	$(document).ready(function() {
  var str = [" des applications mobiles                        ",
             " des sites internet                        ",
			 " de l'hébergement web                        ",
             " des cours à domicile"];
  var pos = 0, a = 0;
  var html = "";
  function displayText() {
    if (pos > 3) pos = 0;
    console.log(pos);
    console.log(str[pos].length);
    if (a < str[pos].length) {
      html += str[pos].charAt(a);
      $(".text-change").html(html);
      a++;
    } else {
      a = 0;
      pos++;
      html = "";
    }
  }
  setTimeout(setInterval(displayText, 200), 200000000);
});
