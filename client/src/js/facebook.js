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

        $(post).find('.userContentWrapper div div div div div div div div span div a').each(function(index, a) {
          if (!($(a).attr('href') === '#')) {
            alert($(a).attr('href'))
          }

        });

        row.append($(newContent))
      });
    }
  }, 1000);
});
