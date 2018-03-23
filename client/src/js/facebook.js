import $ from 'jquery'

$(document).ready(function() {
  var api_url = 'http://localhost:60009'
  var newscout = "<span><!-- NEWSCOUT --></span>"
  $.get(api_url + '/tags', function(data) {

    var tags = ""
    $.each(data, function(index, tag) {
      tags = tags + " <a href='#' title=' " + tag.name + "' alt='" + tag.name + "'>" + tag.abbrev + "</a>"
    });
    var text = tags
    setInterval(function() {
      var posts = $('.userContentWrapper:not(:contains(' + newscout + '))');
      if (posts.length > 0) {
        posts.each(function(index, post) {
          post.append(newscout)
          var row = $($(post).find('div:first-child')[0])
          var newContent = "<div style='float: right;'>" +
            text +
            "</div>"

          $(post).find('span div a').each(function(index, a) {
            var href = $(a).attr('href')
            if (!(href === '#') && href.indexOf('l.php') != -1) {
              $.post(api_url + '/pages/query', {"url": href})
              row.append(newContent)
            }

          });

        });
      }
    }, 1000);
  });
});
