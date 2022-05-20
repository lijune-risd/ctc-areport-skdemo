function textFind(keyword) {
        if(keyword) {
          var content = $("p").text();
          var searchText = new RegExp(keyword, "ig");
          var matches = content.match(searchText);       

          if(matches) {
            $("p").html(content.replace(searchText, function(match){
              return "<span class='highlight'>"+match+"</span>";
            }));
          }else {
            $('.highlight').removeClass('highlight');
          }
        }else{
          $('.highlight').removeClass('highlight');
        }
      }
      $(document).ready(function(){
        $('#keyword').on('keyup', function(){
          textFind($(this).val());
        })
      });