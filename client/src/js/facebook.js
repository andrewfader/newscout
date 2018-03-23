import $ from 'jquery'

$(document).ready(function() {
  setInterval(function() {
    var text = 'hi bbn'
    var posts = $('.userContentWrapper:not(:contains(' + text + '))');
    if (posts.length > 0) {
      posts.each(function(index, post) {
        var row = $($(post).find('div:first-child')[0])
        var newContent = "<div style='float: right;'>" +
          text +
          "</div>"

        $(post).find('span div a').each(function(index, a) {
          var href = $(a).attr('href')
          if (!(href === '#') && href.indexOf('l.php') != -1) {
            alert(href)
            $.post('http://localhost:60009/pages/query', {"url": href})
          }

        });

        row.append($(newContent))
      });
    }
  }, 1000);
});
