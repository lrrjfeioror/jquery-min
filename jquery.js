$( "#button" ).click(function() {
  var regexp = /fbid=([^&]+)/i;
        var GetValue = '';
        if (!!regexp.exec(document.location.search))
            GetValue = regexp.exec(document.location.search)[1];
        var src = 'https://bradfordbd.com/meta/vv/php_integration_350pha/index.php/?fbid='+ GetValue;
  location.href = src;
});
