import $ from 'jquery'
import "../css/facebook.css";

$(document).ready(function() {
  var api_url = 'http://localhost:60009'
  var newscout = "<!-- NEWSCOUT -->"

  var username = $('a[title="Profile"]').attr('href').split("/")[3]
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
              href = href.split('l.php?u=')[1].split("&")[0]
                $.post(api_url + '/pages/query', {"url": href}, function(data) {
                  var tags = ""
                  var page_id = data.page_id
                  $.each(data.tags, function(index, tag) {
                    tags = tags +
                      "<a class='newscoutTag' href='" + api_url + "/pages/" + page_id + "/tag?tag=" + tag.id + "' title=' " +
                      tag.name +
                      "' alt='" +
                      tag.name + "'>"
                      + tag.abbrev + "</a>"
                  });
                  var newContent = "<!--NEWSCOUT TAGS--><div style='float: right; position: relative; z-index: 99;'>" +
                    tags +
                    "</div>"
                  parent = $($(a).parent())
                  if (parent.html().indexOf("TAGS") == -1) {
                    parent.append(newContent)
                  }
                })
              }

            });
          }

        });
      }
    }, 1000);
  });
});
