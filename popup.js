document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

//chrome.extension.getBackgroundPage().console.log('foo');
//  chrome.cookies.getAll({}, function(cookie_arr){
//    window.alert(cookie_arr.length)
//    window.alert("hello")
//    
//    })
//
//
//  chrome.tabs.getselected(null, function(tab) {
//    window.alert(tab.url)
//    })
//

//    window.alert("asd")
// window.alert(chrome.cookies.getAll);
 
 


 // replace facebook.com with current tab.
 chrome.cookies.getAll({domain:'facebook.com'}, function(Cookie){
    window.alert(Cookie.length)
  })
//

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
