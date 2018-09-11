import $ from 'jquery'
// import * from 'jquery-ui'
import "../css/facebook.css";

var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  if (event.source != window)
    return;

  if (event.origin == 'https://www.facebook.com')
    return

    alert('wazjo2')
    debugger
  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    debugger
    alert('wazjo')
  }

  // $('popup' + event.data.href).popup();
}, false);

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

            var tagged = {}

            $(post).find('span div a').each(function(index, a) {
              var href = $(a).attr('href')

              if (!(href === '#') && href.indexOf('l.php') != -1) {
                href = href.split('l.php?u=')[1].split("&")[0]
                if (!tagged[href]) {
                  $.post(api_url + '/pages/query', {"url": href}, function(data) {
                    var tags = ""
                    var page_id = data.page_id

                    $.each(data.tags, function(index, tag) {
                      tags = tags +
                        "<a class='newscoutTag' href='" + api_url + "/pages/" + page_id + "/tag?=" + tag.id + "' title=' " +
                        tag.name +
                        "' alt='" +
                        tag.name + "'>"

                        + " " + tag.abbrev + " " + "</a> "
                    });

                    var newContent = "<!--NEWSCOUT TAGS-->" +
                      "<div style='float: right; position: relative; z-index: 99;'>" +
                      "<div id='popup" + href + "' class='newscoutPopup'>" +
                      tags +
                      "</div> <a href=# onClick=window.postMessage({\"text\":\"" + href + "\"},\"*\")>Tag</a></div>"

                    parent = $($(a).parent())

                    if (parent.html().indexOf("TAGS") == -1) {
                      parent.append(newContent)
                      $('.newscoutTag').on('click', function(e) {
                        e.preventDefault()
                        tag = $(e).target()
                        alert(tag.href)
                      });
                    }
                  })
                  tagged[href] = true
                }
              }

            });
          }

        });
      }
    }, 1000);
  });
});
