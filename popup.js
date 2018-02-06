//var odds = 1
console.log("hello");

document.addEventListener('DOMContentLoaded', function() {


  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

  var removeCookie = function (cookie) {
    var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;
    chrome.cookies.remove({"url": url, "name": cookie.name});
    window.alert("cookie removed!")
     };


 // QUESTION: How do I make Cookies object returned to 
 // chrome.cookies.getAll in the chrome console?

 //TODO: replace facebook.com with current tab.
 chrome.cookies.getAll({domain:'nytimes.com'}, function(Cookie){
    //var hell = "sa"
    //console.log(hell)
    //chrome.extension.getBackgroundPage().console.log('foo');
    //window.alert(chrome.extension.getBackgroundPage())
    window.alert(Cookie[1].name)
    //console.log("Helldo")
    debugger;
    for (var i=0; i<Cookie.length;i++){
      removeCookie(Cookie[i])
            }
      })
    })
  })

  //  chrome.tabs.getSelected(null, function(tab) {
  //  d = document;
  //  var f = d.createElement('form');
  //  f.action = 'http://gtmetrix.com/analyze.html?bm';
  //  f.method = 'post';
  //  var i = d.createElement('input');
  //  i.type = 'hidden';
  //  i.name = 'url';
  //  i.value = tab.url;
  //  f.appendChild(i);
  //  d.body.appendChild(f);
  //  f.submit();
  //  });
  //  }, false);
  //  }, false);
