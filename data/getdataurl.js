<div id="svg">

  </div>
  <script>

    function file_get_contents(uri, callback) {
         fetch(uri).then(res => res.text()).then(text => 
        {

            var xmlSvg =text;
            console.log(xmlSvg );
            document.getElementById('svg').innerHTML = xmlSvg;
        })
    }

    
    var uri ='https://api.webgold.ir/data/?u=instinfofast&i=2400322364771558';

    file_get_contents(uri);

</script>
