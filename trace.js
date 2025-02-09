(function () {
  // ドメインとAPIのURLを設定
  var domain = location.hostname;
  var apiUrl = 'https://trace.bluemonkey.jp/domain/' + domain;

  // ドメインからサイトIDを取得
  var xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // APIからサイトIDを取得
          var websiteId = JSON.parse(xhr.responseText).website_id;
          // Umamiのスクリプトを読み込む
          var el = document.createElement('script');
          el.setAttribute('src', 'https://trace.bluemonkey.jp/script.js');
          el.setAttribute('data-website-id', websiteId);
          document.body.appendChild(el);
      }
  };
  xhr.send();
})();