var host = "https://api.giphy.com";
var url_search = host + "/v1/gifs/search";
var api_key = "bd95d4ab36bb445b84c392d063c0a96c";

var $list_gifs = $('.gifs');

function gif(text){
  $.ajax({
  method: "GET",
  url: url_search,
  contentType: "application/json; charset=utf-8",
  data: {
    api_key: api_key,
    q: text,
  }
})
.done(function( response ) {
    var list_gifs = response.data;
    var final_html = "";
    for(var i = 0; i < 25; i++){
      var gif_id = list_gifs[i].id;
      var img_url = "https://i.giphy.com/media/" + gif_id + "/100.gif";
      final_html +='<img src="' + img_url +'">';
    }
    $list_gifs.append(final_html);
  });
}

$('#search').on('click', function(){
  var text = $('#gif-search').val();
  if (text)
    gif(text);
})