import $ from 'jquery'

$(document).ready(function() {
  var api_url = 'http://localhost:60009'
  var newscout = "<!-- NEWSCOUT -->"
  $.get(api_url + '/tags', function(data) {

    setInterval(function() {
      var posts = $('.userContentWrapper:not(:contains("NEWSCOUT"))');
      if (posts.length > 0) {
        posts.each(function(index, post) {
          if ($(post).html().indexOf("NEWSCOUT") == -1) {
            post = $(post)
            post.append(newscout)

            $(post).find('span div a').each(function(index, a) {
              var href = $(a).attr('href')
              if (!(href === '#') && href.indexOf('l.php') != -1) {
                $.post(api_url + '/pages/query', {"url": href}, function(data) {
                  var tags = ""
                  $.each(data, function(index, tag) {
                    tags = tags + " <a href='#' title=' " + tag.name + "' alt='" + tag.name + "'>" + tag.abbrev + "</a>"
                  });
                  var newContent = "<div style='float: right; position: relative; z-index: 99;'>" +
                    tags +
                    "</div>"
                  $($(a).parent()).append(newContent)
                })
              }

            });
          }

        });
      }
    }, 1000);
  });
});
