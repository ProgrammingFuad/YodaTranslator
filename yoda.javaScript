  <script src="http://code.jquery.com/jquery-1.12.0.min.js"</script>
    <script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"</script>
    <script>
      window.onload=function()
      {
        $('#btnTranslate').on('click',translateText);
      }

      function translateText()
      {
        var textToTranslate= $("#textToTranslate").val();
        var url= "https://yoda.p.mashape.com/yoda?sentance="+textToTranslate;
        $.ajax({url: url,
                headers: {"X-Mashape-Key":
              "GrcLjZPCAVmsh7QHLxsVIn2thuSMp1Tuca8jsnJLJtHNh1LBZF"},
              success: function(result){
                $("#result").html(result);
              }});
      }

    </script>